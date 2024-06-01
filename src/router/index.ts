import AuthLayout from "@/layouts/AuthLayout.vue";
import LoginView from "@/views/auth/LoginView.vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { authGuard } from "./auth.guard";
import HomeView from "@/views/main/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import RequestClassView from "@/views/main/RequestClassView.vue";
import RequestNewSubjectView from "@/views/main/RequestNewSubjectView.vue";
import PetListView from "@/views/main/PetListView.vue";
import PetDetailView from "@/views/main/PetDetailView.vue";
import QuickFindView from "@/views/main/QuickFindView.vue";
import CartCheckoutView from "@/views/main/CartCheckoutView.vue";
import QuickFindResultView from "@/views/main/QuickFindResultView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL ?? '/demo-faztpetz-static/'),
  routes: [
    {
      path: "/auth",
      component: MainLayout,
      children: [
        {
          path: "login",
          name: "login",
          component: LoginView,
        },
      ],
    },
    {
      path: "",
      //beforeEnter: authGuard,
      component: MainLayout,
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "home",
          component: HomeView,
        },
        {
          path: "quick-find",
          name: "quick-find",
          component: QuickFindView,
        },
        {
          path: "quick-find-result",
          name: "quick-find-result",
          component: QuickFindResultView,
        },
        {
          path: "checkout",
          name: "checkout",
          component: CartCheckoutView,
        },
        {
          path: "pet-list",
          name: "pet-list",
          component: PetListView,
        },
        {
          path: "pet-detail",
          name: "pet-detail",
          component: PetDetailView,
        },
        {
          path: "request-subject",
          name: "request-subject",
          component: RequestNewSubjectView,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  ],
});

export default router;
