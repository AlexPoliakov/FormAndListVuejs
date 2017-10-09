import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import FormAdd from '../components/Form/FormAdd.vue'
import UsersList from '../components/Users/UsersList.vue'
import FormEdit from '../components/Form/FormEdit.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/form/add', name: 'FormAdd', component: FormAdd },
        { path: '/users', name: 'UsersList', component: UsersList},
        { path: '/form/:id', name: 'FormEdit', component: FormEdit, props: true}
    ]
});