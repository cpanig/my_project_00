import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import systemMange from '../components/menu-components/systemMange.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/home/systemMange', component: systemMange }
  ]
})

export default router
