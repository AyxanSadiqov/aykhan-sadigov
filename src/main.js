import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VueGtag from "vue-gtag";

library.add(fas, fab);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(
    VueGtag,
    {
      appName: "Portfolio",
      pageTrackerScreenviewEnabled: true,
      config: { id: "G-JZM6QV98BC" },
    },
    router
  )
  .mount("#app");
