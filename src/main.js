import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import Router from "./router";

createApp(App).use(Router).mount("#app");
