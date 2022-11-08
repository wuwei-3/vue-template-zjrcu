import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
<<<<<<< HEAD
import 'element-ui/lib/theme-chalk/index.css';
import element from 'element-ui'

Vue.use(element)
=======
>>>>>>> 6f6aa81... vue2

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
