import { createRouter, createWebHistory } from 'vue-router';
import HomeIndex from '@/page/HomeIndex.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        {
            path: '/stxvue/',
            name: 'Home',
            component: HomeIndex,
        }, 
        {
            path: '/vuestx/company',
            name: 'Company',
            component: HomeIndex
        }, 
        {
            path: '/vuestx/business',
            name: 'Bussiness',
            component: HomeIndex
        }, 
        {
            path: '/vuestx/cb',
            name: 'Cb',
            component: HomeIndex
        }, 
        {
            path: '/vuestx/ad',
            name: 'AD',
            component: HomeIndex
        }, 
        {
            path: '/vuestx/cs',
            name: 'CS',
            component: HomeIndex
        }, 
        {
            path: '/vuestx/job',
            name: 'Job',
            component: HomeIndex
        } 
    ]
});

export default router;