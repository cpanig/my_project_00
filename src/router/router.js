import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
/* 系统管理 */
import systemMange from '../components/menu-components/systemMange/systemMange.vue'
import sysSeting from '../components/menu-components/systemMange/setting/systemSetting.vue'
import ChangePsw from '../components/menu-components/systemMange/setting/ChangePsw.vue'
import LogoutLogin from '../components/menu-components/systemMange/setting/LogoutLogin.vue'
import WorkAreaLocation from '../components/menu-components/systemMange/setting/WorkAreaLocation.vue'
import StationPosition from '../components/menu-components/systemMange/setting/StationPosition.vue'
import OprateDairy from '../components/menu-components/systemMange/setting/OprateDairy.vue'
import SketchSelet from '../components/menu-components/systemMange/setting/SketchSelet.vue'
/* 综合管理 */
import IntegratedManage from '../components/menu-components/Integrated_Manage/Integrated_Manage.vue'
import DepartManage from '../components/menu-components/Integrated_Manage/setting/DepartManage.vue'
/* 用户管理 */
import UserManage from '../components/menu-components/User_Manage/User_Manage.vue'
import AddUser from '../components/menu-components/User_Manage/setting/AddUser.vue'
/* 员工管理 */
import StaffManage from '../components/menu-components/Staff_Manage/Staff_Manage.vue'
import StaffSelect from '../components/menu-components/Staff_Manage/setting/StaffSelect.vue'
/* 人员追踪 */
import StaffTracking from '../components/menu-components/Staff_Tracking/Staff_Tracking.vue'
import SelectTrack from '../components/menu-components/Staff_Tracking/setting/SelectTrack.vue'
/* 查询统计 */
import QueryStatistic from '../components/menu-components/Query_Statistic/Query_Statistic.vue'
import MineStaffQuery from '../components/menu-components/Query_Statistic/setting/MineStaffQuery.vue'
/* 考勤管理 */
import AttendanceManage from '../components/menu-components/DepartDayQuery/Attendance_Manage.vue'
import DepartDayQuery from '../components/menu-components/DepartDayQuery/setting/DepartDayQuery.vue'
/* 系统帮助 */
import SystemHelp from '../components/menu-components/System_Help/System_Help.vue'
import Helps from '../components/menu-components/System_Help/setting/Helps.vue'
import OnlineHelp from '../components/menu-components/System_Help/setting/OnlineHelp.vue'
import About from '../components/menu-components/System_Help/setting/About.vue'
import ContactUs from '../components/menu-components/System_Help/setting/ContactUs.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    /* 系统管理 */
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
     ] },
    /* 综合管理  */
    { path: '/Integrated_Manage',
      component: IntegratedManage,
      children:
      [ { path: '/Integrated_Manage', redirect: '/DepartManage' },
        { path: '/DepartManage', component: DepartManage }
      ]
    },
    /* 用户管理 */
    { path: '/User_Manage',
      component: UserManage,
      children:
      [ { path: '/User_Manage', redirect: '/AddUser' },
        { path: '/AddUser', component: AddUser }
      ]
    },
    /* 员工管理 */
    { path: '/Staff_Manage',
      component: StaffManage,
      children:
      [ { path: '/Staff_Manage', redirect: '/StaffSelect' },
        { path: '/StaffSelect', component: StaffSelect }
      ]
    },
    /* 人员追踪 */
    { path: '/Staff_Tracking',
      component: StaffTracking,
      children:
      [ { path: '/Staff_Tracking', redirect: '/SelectTrack' },
        { path: '/SelectTrack', component: SelectTrack }
      ]
    },
    /* 查询统计 */
    { path: '/Query_Statistic',
      component: QueryStatistic,
      children:
      [ { path: '/Query_Statistic', redirect: '/MineStaffQuery' },
        { path: '/MineStaffQuery', component: MineStaffQuery }
      ]
    },
    /* 考勤管理 */
    { path: '/Attendance_Manage',
      component: AttendanceManage,
      children:
      [ { path: '/Attendance_Manage', redirect: '/DepartDayQuery' },
        { path: '/DepartDayQuery', component: DepartDayQuery }
      ]
    },
    /* 系统帮助 */
    { path: '/System_Help',
      component: SystemHelp,
      children:
      [ { path: '/System_Help', redirect: '/Helps' },
        { path: '/Helps', component: Helps },
        { path: '/About', component: About },
        { path: '/OnlineHelp', component: OnlineHelp },
        { path: '/ContactUs', component: ContactUs }
      ]
    }
  ]
})

export default router
