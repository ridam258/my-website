import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue-loaders/dist/vue-loaders.css";
import VueLoaders from "vue-loaders";
const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueLoaders);
app.mount("#app");
