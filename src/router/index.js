import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import ProjectsPage from "../components/ProjectsPage.vue";
import ProjectDetails from "../components/ProjectDetails.vue";
import ContactPage from "../components/ContactPage.vue";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/project", component: ProjectsPage },
    { path: "/contact", component: ContactPage },
    { path: "/projectdetails/:id", component: ProjectDetails, props: true },
  ],
});

export default router;
