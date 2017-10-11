import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import ('../components/Home.vue');
const FormAdd = () => import('../components/Form/FormAdd.vue');
const UsersList = () => import('../components/Users/UsersList.vue');
const FormEdit = () => import('../components/Form/FormEdit.vue');


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