<template>
    <div class="box_list">
        <div class="list__pg">
            <h2 class="name__list">{{ text }}</h2>
            <div class="users_count">
                <h4 class="users_in_list">Number of Users {{ count }}</h4>
                <button class="refresh_list_but"><i class="ion-loop"></i></button>
            </div>
            <div class="choose_count">

            </div>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                    <tr class="head">
                        <th class="id">id</th>
                        <th class="name">First Name</th>
                        <th class="lastName">Last Name</th>
                        <th class="age">Age</th>
                        <th class="balance">Balance</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th class="active">Activity</th>
                        <th class="enter">Edit</th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                    <tr class="user" v-for="user in shortList">
                        <td class="id">{{ user.id }}</td>
                        <td class="name">{{ user.firstName }}</td>
                        <td class="lastName">{{ user.lastName }}</td>
                        <td class="age">{{ user.age }}</td>
                        <td class="balance">{{ user.balance }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td class="active">{{ user.isActive }}</td>
                        <td class="enter">
                            <button class="change_user_data" @click="changeDataUser(user.id)">
                                <i class="ion-edit"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'List',
        data() {
            return {
                url: 'http://localhost:3000/users',
                text: 'List Users',
                list: [],
                shortList: []
            }
        },
        // method for List component
        methods: {
            createShortList(list) {
                this.shortList = list.map((key) => {
                    return {
                        id: key.id,
                        firstName: key.firstName,
                        lastName: key.lastName,
                        age: key.age,
                        balance: key.balance,
                        email: key.email,
                        phone: key.phone,
                        isActive: key.isActive
                    }
                });
            },

            getAllUser() {
                axios({
                    method:'get',
                    url: this.url,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(response => {
                        this.list = [...response.data];
                        this.createShortList(this.list);
                        this.list = []
                    })
                    .catch(error => {
                        let err = new Error(error);
                        console.log(err);
                    });
            },

            changeDataUser(id) {
                this.$router.push({ path: `/form/${id}`});
            }
        },
        // computed for List component
        computed: {
            count() {
                return (this.list.length);
            }
        },
        // mounted for List component
        mounted() {
            this.getAllUser();
        }
    }
</script>

<style>
    .box_list {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
    }

    .list__pg {
        margin: 60px auto;
        bottom: 0;
        border: 1px solid lightsteelblue;
        color: #afafaf;
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        max-width: 65%;
    }

    .users_count {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-top: 1px solid #afafaf;
        border-bottom: 1px solid #afafaf;
        background-color: #f5f5f5;
    }

    .users_in_list {
        display: inline-block;
        margin-left: 40px;
    }

    .refresh_list_but {
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
        margin-right: 40px;
        margin-top: 8px;
    }

    .refresh_list_but:hover {
        color: #272727;
    }

    .refresh_list_but:active {
        background-color: rgba(0, 0, 0, .1);
    }

    .user ul {
        list-style: none;
        padding: 0;
    }

    .name__list {
        text-align: center;
    }

    table{
        width:100%;
        table-layout: fixed;
    }

    .tbl-header{
        background-color: rgba(255,255,255,0.3);
        margin-top: 40px;
    }

    .tbl-content{
        height:500px;
        overflow-x:auto;
        margin-top: 0px;
        border: 1px solid rgba(255,255,255,0.3);
    }

    th {
        padding: 20px 15px;
        text-align: left;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
        background-color: #f5f5f5;
    }

    td{
        padding: 15px;
        text-align: left;
        vertical-align:middle;
        font-weight: 400;
        font-size: 14px;
        border-bottom: solid 1px rgba(255,255,255,0.1);
    }

    tr:hover {
        background-color: #f5f5f5;
    }

    .id,
    .age {
        width: 60px;
    }

    .name,
    .lastName,
    .balance {
        width: 115px;
    }

    .active,
    .enter {
        width: 80px;
    }

    .change_user_data {
        display: inline-block;
        background-color: transparent;
        border: 0;
        width: 27px;
        height: 27px;
        font-size: 27px;
        outline: none;
        color: #9f9f9f;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
    }

    .change_user_data:hover {
        color: #272727;
    }

    .change_user_data:active {
        background-color: rgba(0, 0, 0, .1);
    }

</style>