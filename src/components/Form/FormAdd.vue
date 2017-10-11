<template>
    <div class="form__pg">
        <div class="about" v-if="successAdded">
            <h3 class="success">User {{ newUserData }}</h3>
        </div>

        <form-user v-model="user" :header="messageHeader"></form-user>
        
        <button type="button" class="add_user" v-if="!show" @click="validation">
            <i class="ion-person-add"></i>
        </button>
        <button type="button" class="add_user" v-else>
            <i class="ion-checkmark-round"></i>
        </button>
        <hr>
        <div class="search">
            <pre>{{ user }}</pre>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    // Template object for user data
    const userTemplate = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        picture: 'http://placehold.it/128x128',
        age: 0,
        isActive: false,
        accessLevel: '',
        balance: '$',
        phone: '',
        address: '',
        company: '',
        about: '',
        registered: ''
    };

    export default {
        name: 'FormAdd',
        components: {
            FormUser: () => import('./Form.vue')
        },
        data() {
            return {
                messageHeader: 'Registration Form',
                serverMessage: 'successfully added',
                show: false,
                successAdded: false,
                user: userTemplate,
                url: 'http://localhost:3000/users',
                newUser: {}
            }
        },
        computed: {
            // Computed message for displaying success or failure when adding a user
            newUserData() {
                return `${this.newUser.name} ${this.newUser.lastName} ${this.serverMessage}`;
            }
        },
        methods: {
            // Clear form fields after a successful user upload
            clearForm() {
                for (let key in this.user) {
                    if (key === 'picture') {
                        this.user[key] = 'http://placehold.it/128x128';
                    }else {
                        this.user[key] = '';
                    }
                }
            },
            // Validation of the filling of form fields
            validation() {
                for (let prop in this.user) {
                    if (this.user[prop] === '') {
                        if (prop === "id" || prop === "isActive") continue;
                        alert(`Fill in the field: ${prop}`);
                        return;
                    }
                }
                this.setUser();
            },
            // Displaying user data on successful upload
            requestServerMessage() {
                this.successAdded = true;
                return this.newUser = {
                    name: this.user.firstName,
                    lastName: this.user.lastName
                }
            },
            // Redirect to Users List
            redirect() {
                setTimeout(() => {
                    this.$router.push({ path: '/users' });
                }, 3000);
            },
            // Sending a request for adding data to the server and processing the results
            setUser() {
                axios({
                    method: 'post',
                    url: this.url,
                    data: this.user
                })
                    .then(response => {
                        // Change the icon with the addition to success
                        this.show = true;
                        // After 3 seconds, go to the list page
                        this.redirect();
                    })
                    .then(() => {
                        // We call a method for displaying the inscription about success
                        this.requestServerMessage();
                        // Clear form fields
                        this.clearForm();
                    })
                    .catch(error => {
                        let err = new Error(error);
                        console.log(err);
                        // A method is called to display a failure message
                        this.serverMessage = `was't added. Try again.`;
                        this.requestServerMessage();
                    })
            }
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

    .add_user {
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

    .add_user:hover {
        color: #272727;
    }

    .add_user:active {
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