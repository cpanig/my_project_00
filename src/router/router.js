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
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    /* 系统管理 */
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
        { path: '/DepartManage', component: DepartManage },
        { path: '/PostsManage', component: PostsManage },
        { path: '/TitleManage', component: TitleManage },
        { path: '/WorkType', component: WorkType },
        { path: '/ScheduleSet', component: ScheduleSet },
        { path: '/WorkFace', component: WorkFace },
        { path: '/ContingencyPlan', component: ContingencyPlan },
        { path: '/Substation', component: Substation }
      ]
    },
    /* 用户管理 */
    { path: '/User_Manage',
      component: UserManage,
      children:
      [ { path: '/User_Manage', redirect: '/AddUser' },
        { path: '/AddUser', component: AddUser },
        { path: '/ChangeUserInfo', component: ChangeUserInfo },
        { path: '/DeleteUser', component: DeleteUser },
        { path: '/SearchUser', component: SearchUser }
      ]
    },
    /* 员工管理 */
    { path: '/Staff_Manage',
      component: StaffManage,
      children:
      [ { path: '/Staff_Manage', redirect: '/StaffSelect' },
        { path: '/StaffSelect', component: StaffSelect },
        { path: '/StaffAdd', component: StaffAdd },
        { path: '/StaffEdit', component: StaffEdit },
        { path: '/StaffDelete', component: StaffDelete },
        { path: '/TagManage', component: TagManage }
      ]
    },
    /* 人员追踪 */
    { path: '/Staff_Tracking',
      component: StaffTracking,
      children:
      [ { path: '/Staff_Tracking', redirect: '/SelectTrack' },
        { path: '/SelectTrack', component: SelectTrack },
        { path: '/RealtimeTrack', component: RealtimeTrack },
        { path: '/PositionSearch', component: PositionSearch },
        { path: '/ActivityTrack', component: ActivityTrack },
        { path: '/TrackReappear', component: TrackReappear },
        { path: '/PersonalPosition', component: PersonalPosition }
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
