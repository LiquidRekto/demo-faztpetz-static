import AuthLayout from "@/layouts/AuthLayout.vue";
import LoginView from "@/views/auth/LoginView.vue";
import { createRouter, createWebHistory } from "vue-router";
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
import AboutUsView from "@/views/main/AboutUsView.vue";
import ContactView from "@/views/main/ContactView.vue";
import CatPetListView from "@/views/main/CatPetListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      redirect: "home",
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
          path: "about-us",
          name: "about-us",
          component: AboutUsView,
        },
        {
          path: "contacts",
          name: "contacts",
          component: ContactView,
        },
        {
          path: "pet-list",
          name: "pet-list",
          component: PetListView,
        },
        {
          path: "pet-list/cat",
          name: "pet-list/cat",
          component: CatPetListView,
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
