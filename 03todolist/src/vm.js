import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import routers from './routers'
import './css/index.css';
Vue.use(VueRouter);
const vm = new Vue({
  el: '#root',
  data: {},
  methods: {},
  computed: {},
  watch: {},
  router:routers
})