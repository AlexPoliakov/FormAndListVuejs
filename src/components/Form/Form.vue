<template>
    <div>
        <h2 class="name__form">{{ text }}</h2>
        <label for="name">First name:
            <input type="text" id="name" autofocus required placeholder="First name" v-model="user.firstName">
        </label>
        <label for="username">Username:
            <input type="text" id="username" required placeholder="Last name" v-model="user.lastName">
        </label>
        <label for="email">Email:
            <input type="email" id="email" required placeholder="Email" v-model="user.email">
        </label>
        <label for="gender">Gender:
            <input type="select" id="gender" list="your_gender" required placeholder="Gender" v-model="user.gender">
            <datalist id="your_gender">
                <option value="male"></option>
                <option value="female"></option>
            </datalist>
        </label>
        <label for="photo">Picture:
            <input type="url" id="photo" required placeholder="http://" v-model="user.picture">
        </label>
        <div class="form__photo">
            <img class="avatar" v-if='havePhoto' :src="user.picture" alt="No image">
            <a v-else href="" target="_blank">
                Add avatar
            </a>
        </div>
        <label for="age">Your age:
            <input type="number" id="age" required placeholder="Age" v-model="user.age">
        </label>
        <label for="activity">Activity:
            <input type="checkbox" id="activity" required v-model="user.isActive">Yes
        </label>
        <label for="level">Access level:
            <input type="select" id="level" list="your_level" required placeholder="Access level" v-model="user.accessLevel">
            <datalist id="your_level">
                <option value=""></option>
                <option value="user"></option>
                <option value="admin"></option>
                <option value="guest"></option>
            </datalist>
        </label>
        <label for="balance">Balance:
            <input type="text" id="balance" required placeholder="Balance" v-model="user.balance">
        </label>
        <label for="phone">Phone:
            <input type="tel" id="phone" required placeholder="Phone" v-model="user.phone">
        </label>
        <label for="address">Address:
            <input type="text" id="address" required placeholder="Address" v-model="user.address">
        </label>
        <label for="company">Company:
            <input type="text" id="company" required placeholder="Company" v-model="user.company">
        </label>
        <label for="bio">Biography:
            <textarea id="bio" required placeholder="Biography" v-model="user.about"></textarea>
        </label>
        <label for="date">Date registration:
            <input type="datetime" id="date" required placeholder="Date registration" v-model="user.registered">
        </label>
    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';

    export default {
        name: 'FormUser',
        model: {
            prop: 'user'
        },
        props: {
            user: {
                type: Object
            },
            header: String
        },
        data() {
            return {
                text: this.header,
                messageUser: '',
            }
        },
        // computed for Form component
        computed: {
            havePhoto() {
                return this.user.picture !== '';
            }
        }
    }
</script>

<style scoped>
    .name__form {
        text-align: center;
    }

    label {
        display: block;
        font-size: 18px;
        margin: 10px 0 5px 40px;
    }

    label:hover {
        color: #272727;
        transition: all 0.3s ease-in-out;
    }

    input,
    textarea {
        width: 95%;
        font-size: 16px;
        caret-color: red;
        background-color: #f5f5f5;
    }

    input {
        height: 28px;
    }

    textarea {
        height: 100px;
    }

    #activity {
        width: 20px;
        vertical-align: middle;
    }

    .form__photo {
        margin-top: 10px;
        width: 150px;
        height: 200px;
        border: 1px solid #afafaf;
        margin-left: 40px;
    }

    .avatar {
        width: inherit;
        height: inherit;
        text-align: center;
        font-size: 18px;
        line-height: 120px;
    }

</style>
