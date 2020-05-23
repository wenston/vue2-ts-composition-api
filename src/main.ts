import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import karmaui from "karma-ui"
import "karma-ui/lib/index.css"
Vue.use(karmaui, {
  KButton: {
    size: "big"
  },
  KInput: {
    size: "big"
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
