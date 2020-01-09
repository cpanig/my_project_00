import Vue from 'vue'
import VueRouter from 'vue-router'
/* 主菜单界面 */
import home from '../components/home.vue'
import menus from '../menu.vue'
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
import PostsManage from '../components/menu-components/Integrated_Manage/setting/PostsManage.vue'
import TitleManage from '../components/menu-components/Integrated_Manage/setting/TitleManage.vue'
import WorkType from '../components/menu-components/Integrated_Manage/setting/WorkType.vue'
import ScheduleSet from '../components/menu-components/Integrated_Manage/setting/ScheduleSet.vue'
import WorkFace from '../components/menu-components/Integrated_Manage/setting/WorkFace.vue'
import ContingencyPlan from '../components/menu-components/Integrated_Manage/setting/ContingencyPlan.vue'
import Substation from '../components/menu-components/Integrated_Manage/setting/Substation.vue'
/* 用户管理 */
import UserManage from '../components/menu-components/User_Manage/User_Manage.vue'
import AddUser from '../components/menu-components/User_Manage/setting/AddUser.vue'
import ChangeUserInfo from '../components/menu-components/User_Manage/setting/ChangeUserInfo.vue'
import DeleteUser from '../components/menu-components/User_Manage/setting/DeleteUser.vue'
import SearchUser from '../components/menu-components/User_Manage/setting/SearchUser.vue'
/* 员工管理 */
import StaffManage from '../components/menu-components/Staff_Manage/Staff_Manage.vue'
import StaffSelect from '../components/menu-components/Staff_Manage/setting/StaffSelect.vue'
import StaffAdd from '../components/menu-components/Staff_Manage/setting/StaffAdd.vue'
import StaffEdit from '../components/menu-components/Staff_Manage/setting/StaffEdit.vue'
import StaffDelete from '../components/menu-components/Staff_Manage/setting/StaffDelete.vue'
import TagManage from '../components/menu-components/Staff_Manage/setting/TagManage.vue'
/* 人员追踪 */
import StaffTracking from '../components/menu-components/Staff_Tracking/Staff_Tracking.vue'
import SelectTrack from '../components/menu-components/Staff_Tracking/setting/SelectTrack.vue'
import RealtimeTrack from '../components/menu-components/Staff_Tracking/setting/RealtimeTrack.vue'
import PositionSearch from '../components/menu-components/Staff_Tracking/setting/PositionSearch.vue'
import ActivityTrack from '../components/menu-components/Staff_Tracking/setting/ActivityTrack.vue'
import TrackReappear from '../components/menu-components/Staff_Tracking/setting/TrackReappear.vue'
import PersonalPosition from '../components/menu-components/Staff_Tracking/setting/PersonalPosition.vue'
/* 查询统计 */
import QueryStatistic from '../components/menu-components/Query_Statistic/Query_Statistic.vue'
import MineStaffQuery from '../components/menu-components/Query_Statistic/setting/MineStaffQuery.vue'
/* 考勤管理 */
import AttendanceManage from '../components/menu-components/Attendance_Manage/Attendance_Manage.vue'
import DepartDayQuery from '../components/menu-components/Attendance_Manage/setting/DepartDayQuery.vue'
/* 系统帮助 */
import SystemHelp from '../components/menu-components/System_Help/System_Help.vue'
import Helps from '../components/menu-components/System_Help/setting/Helps.vue'
import OnlineHelp from '../components/menu-components/System_Help/setting/OnlineHelp.vue'
import About from '../components/menu-components/System_Help/setting/About.vue'
import ContactUs from '../components/menu-components/System_Help/setting/ContactUs.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/menus' },
    { path: '/menus', component: menus },
    /* 主菜单界面 */
    { path: '/home', redirect: '/home/systemMange' },
    { path: '/home',
      component: home,
      children:
     [
       /* 系统管理 */
       { path: '/home/systemMange',
         component: systemMange,
         children:
        [ { path: '/home/systemMange', redirect: '/home/systemMange/systemSeting' },
          { path: '/home/systemMange/systemSeting', component: sysSeting },
          { path: '/home/systemMange/ChangePsw', component: ChangePsw },
          { path: '/home/systemMange/LogoutLogin', component: LogoutLogin },
          { path: '/home/systemMange/WorkAreaLocation', component: WorkAreaLocation },
          { path: '/home/systemMange/StationPosition', component: StationPosition },
          { path: '/home/systemMange/OprateDairy', component: OprateDairy },
          { path: '/home/systemMange/SketchSelet', component: SketchSelet }
        ] },
       /* 综合管理  */
       { path: '/home/Integrated_Manage',
         component: IntegratedManage,
         children:
         [ { path: '/home/Integrated_Manage', redirect: '/home/Integrated_Manage/DepartManage' },
           { path: '/home/Integrated_Manage/DepartManage', component: DepartManage },
           { path: '/home/Integrated_Manage/PostsManage', component: PostsManage },
           { path: '/home/Integrated_Manage/TitleManage', component: TitleManage },
           { path: '/home/Integrated_Manage/WorkType', component: WorkType },
           { path: '/home/Integrated_Manage/ScheduleSet', component: ScheduleSet },
           { path: '/home/Integrated_Manage/WorkFace', component: WorkFace },
           { path: '/home/Integrated_Manage/ContingencyPlan', component: ContingencyPlan },
           { path: '/home/Integrated_Manage/Substation', component: Substation }
         ]
       },
       /* 用户管理 */
       { path: '/home/User_Manage',
         component: UserManage,
         children:
         [ { path: '/home/User_Manage', redirect: '/home/User_Manage/AddUser' },
           { path: '/home/User_Manage/AddUser', component: AddUser },
           { path: '/home/User_Manage/ChangeUserInfo', component: ChangeUserInfo },
           { path: '/home/User_Manage/DeleteUser', component: DeleteUser },
           { path: '/home/User_Manage/SearchUser', component: SearchUser }
         ]
       },
       /* 员工管理 */
       { path: '/home/Staff_Manage',
         component: StaffManage,
         children:
         [ { path: '/home/Staff_Manage', redirect: '/home/Staff_Manage/StaffSelect' },
           { path: '/home/Staff_Manage/StaffSelect', component: StaffSelect },
           { path: '/home/Staff_Manage/StaffAdd', component: StaffAdd },
           { path: '/home/Staff_Manage/StaffEdit', component: StaffEdit },
           { path: '/home/Staff_Manage/StaffDelete', component: StaffDelete },
           { path: '/home/Staff_Manage/TagManage', component: TagManage }
         ]
       },
       /* 人员追踪 */
       { path: '/home/Staff_Tracking',
         component: StaffTracking,
         children:
         [ { path: '/home/Staff_Tracking', redirect: '/home/Staff_Tracking/SelectTrack' },
           { path: '/home/Staff_Tracking/SelectTrack', component: SelectTrack },
           { path: '/home/Staff_Tracking/RealtimeTrack', component: RealtimeTrack },
           { path: '/home/Staff_Tracking/PositionSearch', component: PositionSearch },
           { path: '/home/Staff_Tracking/ActivityTrack', component: ActivityTrack },
           { path: '/home/Staff_Tracking/TrackReappear', component: TrackReappear },
           { path: '/home/Staff_Tracking/PersonalPosition', component: PersonalPosition }
         ]
       },
       /* 查询统计 */
       { path: '/home/Query_Statistic',
         component: QueryStatistic,
         children:
         [ { path: '/home/Query_Statistic', redirect: '/home/Query_Statistic/MineStaffQuery' },
           { path: '/home/Query_Statistic/MineStaffQuery', component: MineStaffQuery }
         ]
       },
       /* 考勤管理 */
       { path: '/home/Attendance_Manage',
         component: AttendanceManage,
         children:
         [ { path: '/home/Attendance_Manage', redirect: '/home/Attendance_Manage/DepartDayQuery' },
           { path: '/home/Attendance_Manage/DepartDayQuery', component: DepartDayQuery }
         ]
       },
       /* 系统帮助 */
       { path: '/home/System_Help',
         component: SystemHelp,
         children:
         [ { path: '/home/System_Help', redirect: '/home/System_Help/Helps' },
           { path: '/home/System_Help/Helps', component: Helps },
           { path: '/home/System_Help/About', component: About },
           { path: '/home/System_Help/OnlineHelp', component: OnlineHelp },
           { path: '/home/System_Help/ContactUs', component: ContactUs }
         ]
       }
     ] }
  ]
})

export default router
