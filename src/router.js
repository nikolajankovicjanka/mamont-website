import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutUs from '@/components/pages/AboutUs.vue';
import ProjectsPage from '@/components/pages/ProjectsPage.vue';
import ServicesPage from '@/components/pages/ServicesPage.vue';
import OurTeam from '@/components/pages/OurTeam.vue';
import CareerPage from "@/components/pages/CareerPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutUs },
    { path: '/services', component: ServicesPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/tim', component: OurTeam },
    { path: '/karijera', component: CareerPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;