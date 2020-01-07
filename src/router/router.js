import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import systemMange from '../components/menu-components/systemMange.vue'
import sysSeting from '../components/menu-components/setting/systemSetting.vue'
import ChangePsw from '../components/menu-components/setting/ChangePsw.vue'
import LogoutLogin from '../components/menu-components/setting/LogoutLogin.vue'
import WorkAreaLocation from '../components/menu-components/setting/WorkAreaLocation.vue'
import StationPosition from '../components/menu-components/setting/StationPosition.vue'
import OprateDairy from '../components/menu-components/setting/OprateDairy.vue'
import SketchSelet from '../components/menu-components/setting/SketchSelet.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/systemMange',
      component: systemMange,
      children:
     [ { path: '/systemMange', redirect: '/systemSeting' },
       { path: '/systemSeting', component: sysSeting },
       { path: '/ChangePsw', component: ChangePsw },
       { path: '/LogoutLogin', component: LogoutLogin },
       { path: '/WorkAreaLocation', component: WorkAreaLocation },
       { path: '/StationPosition', component: StationPosition },
       { path: '/OprateDairy', component: OprateDairy },
       { path: '/SketchSelet', component: SketchSelet }
     ] }
  ]
})

export default router
