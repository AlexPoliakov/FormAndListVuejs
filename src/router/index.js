import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import Form from '../components/Form/Form.vue'
import Users from '../components/Users/Users.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/form', component: Form },
        { path: '/users', component: Users}
    ],
});