import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCartShopping, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Products from "./components/Products.vue";
import Checkout from "./components/Checkout.vue";

library.add(faCartShopping, faDollarSign);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Products,
    },
    {
      path: "/checkout",
      component: Checkout,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
