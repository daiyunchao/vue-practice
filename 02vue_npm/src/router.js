import { A, B,header } from './componments';
import VueRouter from 'vue-router';
export default new VueRouter({
  routes: [
    {
      path: '/a',
      name: "a",
      components: {
        default:A,
        header:header,
        footer:B
      }
    },
    {
      path: '/b',
      name: "b",
      components: {
        default:B,
        header:header,
        footer:B
      }
    },
  ]
})