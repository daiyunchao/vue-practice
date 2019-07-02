import Vue from 'vue';
import App from './App.vue';
import routers from "./routers/routers";
import store from './data/index';
new Vue({
  el: '#root',
  components: { App },
  router: routers,
  store,
  render(h) {
    return h(App)
  }
})