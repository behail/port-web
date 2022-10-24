import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TheLandingPage from './pages/TheLandingPage.vue';

const ContactMePage = () => import('./pages/TheContactMePage.vue');
const EducationPage = () => import('./pages/TheEducationPage.vue');
const ExperiencePage = () => import('./pages/TheExperiencePage.vue');
const SkillsPage = () => import('./pages/TheSkillsPage.vue');
const TestimonialsPage = () => import('./pages/TheTestimonialsPage.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: TheLandingPage,
  },
  {
    path: '/contact',
    name: 'contact',
    // Lazy Loading Routes
    component: ContactMePage,
  },
  {
    path: '/education',
    name: 'education',
    component: EducationPage,
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperiencePage,
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsPage,
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: TestimonialsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
