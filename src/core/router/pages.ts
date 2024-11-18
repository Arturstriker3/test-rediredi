import pageNotFound from "@/core/pages/errors/404.vue"
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/:pathMatch(.*)", component: pageNotFound },
        { path: '/', component: () => import('@/core/pages/home/Home.vue') },
        { path: '/categories', component: () => import('@/core/pages/categories/Categories.vue') },
        { path: '/subcategories', component: () => import('@/core/pages/subcategories/Subcategories.vue') },
    ]
});

export default router;
