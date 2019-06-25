import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import routers from './router'
Vue.use(VueRouter)
const vm = new Vue({
  el: '#root',
  data: {
    a: 12,
    b: 5
  },
  methods:{
    goa(){
      this.$router.push('/a')
    },
    gob(){
      this.$router.push('/b')
    },
  },
  router: routers
})