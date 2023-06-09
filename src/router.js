import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import SingleProject from './pages/SingleProject.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/projects/:slug',
            name: 'singleProject',
            component: SingleProject
        },
            ]
});
export { router };
