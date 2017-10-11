<template>
    <div class="form__pg">
        <div class="about">
            <h3 class="success">{{ setUserData }}</h3>
            <h3 class="success" v-if="differentMessage">Changes successfully made.</h3>
        </div>

        <form-user v-model="user" :header="messageHeader"></form-user>

        <button type="button" class="save_change" v-if="!differentMessage" @click="validation">
            <i class="ion-ios-unlocked"></i>
        </button>
        <button type="button" class="save_change" v-else>
            <i class="ion-ios-locked"></i>
        </button>
        <button type="button" class="save_change" @click="removeUser">
            <i class="ion-trash-b"></i>
        </button>
        <hr>
        <div class="search">
            <pre>{{ user }}</pre>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import FormUser from './Form.vue';

    export default {
        name: 'FormEdit',
        // Get the input data (id)
        props: {
          id: String,
          required: true
        },

        components: {
            FormUser
        },
        data() {
            return {
                messageHeader: 'Form for changing or deleting user data',
                url: 'http://localhost:3000/users/',
                user: {},
                removeFlag: true,
                differentMessage: false
            }
        },

        computed: {
          // Set this data user in message field class "about"
          setUserData() {
              if (!this.removeFlag) {
                  return 'User data deleted successfully.'
              }
              return `User: ${this.user.firstName} ${this.user.lastName}, tel.: ${this.user.phone}`;
          },
          // Calculated path to user data
          restUrl() {
              return `${this.url}${this.id}`;
          }
        },

        methods: {
            // The method for cleaning Form
            clearForm() {
                for (let key in this.user) {
                    if (key === 'picture') {
                        this.user[key] = 'http://placehold.it/128x128';
                    }else {
                        this.user[key] = '';
                    }
                }
            },
            // Check for completeness of all form fields
            validation() {
                for (let prop in this.user) {
                    if (this.user[prop] === '') {
                        if (prop === "id" || prop === "isActive") continue;
                        alert(`Fill in the field: ${prop}`);
                        return;
                    }
                }
                this.saveChanges();
            },
            // Redirect to Users List
            redirect() {
                setTimeout(() => {
                    this.$router.push({ path: '/users' });
                }, 3000);
            },
            // Load data the selected user in Form for will change or remove
            loadDataUser() {
                axios({
                    method:'get',
                    url: this.restUrl,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => {
                        this.user = response.data;
                    })
                    .catch(error => {
                        let err = new Error(error);
                        console.log(err);
                    });
            },
            // Save changes
            saveChanges() {
                axios({
                    method: 'patch',
                    url: this.restUrl,
                    data: this.user
                })
                    .then(response => {
                        this.differentMessage = true;
                        // After 3 seconds, go to the list of users
                        this.redirect();
                    })
                    .catch(error => {
                        const err = new Error(error);
                        console.log(err);
                    })
            },

            // Remove this user
            removeUser() {
                axios({
                    method: 'delete',
                    url: this.path
                })
                    .then(response => {
                        this.removeFlag = false;
                    })
                    .catch(error => {
                        let err = new Error(error);
                        console.log(err);
                    })
            }
        },

        mounted() {
            this.loadDataUser();
        }
    }
</script>

<style>
    .form__pg {
        margin: 60px auto;
        bottom: 0;
        border: 1px solid lightsteelblue;
        color: #afafaf;
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        width: 940px;
    }

    .save_change {
        display: inline-block;
        background-color: transparent;
        border: 0;
        width: 40px;
        height: 40px;
        font-size: 35px;
        outline: none;
        color: #9f9f9f;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        margin: 10px 0 20px 40px;
    }

    .save_change:hover {
        color: #272727;
    }

    .save_change:active {
        background-color: rgba(0, 0, 0, .1);
    }

    .search,
    .about {
        width: 91%;
        margin: 10px 0 15px 40px;
        overflow-x: hidden;
        color: #272727;
        border: 1px solid #afafaf;
        background-color: #f5f5f5;
    }

    h3 {
        margin-left: 5px;
        text-align: center;
    }
</style>
