import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TheLandingPage from "./pages/TheLandingPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: TheLandingPage,
  },
  {
    path: "/contact",
    name: "contact",
    //Lazy Loading Routes
    component: () =>
      import(/* webpackChunkName: "contact" */ "./pages/TheContactMePage.vue"),
  },
  {
    path: "/education",
    name: "education",
    component: () =>
      import(/* webpackChunkName: "education"*/ "./pages/TheEducationPage.vue"),
  },
  {
    path: "/experience",
    name: "experience",
    component: () =>
      import(
        /* webpackChunkName: "experience"*/ "./pages/TheExperiencePage.vue"
      ),
  },
  {
    path: "/skills",
    name: "skills",
    component: () =>
      import(/* webpackChunkName: "skills" */ "./pages/TheSkillsPage.vue"),
  },
  {
    path: "/testimonials",
    name: "testimonials",
    component: () =>
      import(
        /* webpackChunkName: "testimonials" */ "./pages/TheTestimonialsPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
