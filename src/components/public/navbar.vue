<template>
  <div>
  <!-- 顶部菜单容器 -->
  <div class="header  d-flex align-items-end justify-content-between row">
    <!-- 左边logo -->
    <div class="align-self-center justify-content-sm-center">
      <h1 class="logo">隧道工程人员管理系统</h1>
    </div>
    <!-- 右边导航 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <router-link class="navbar-brand" to="/">首页</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" id="headnav">
          <li class="nav-item">
            <router-link class="nav-link" to="/home/systemMange">系统管理 <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/Integrated_Manage">综合管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/User_Manage">用户管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/Staff_Manage">员工管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/Staff_Tracking">人员追踪</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/Query_Statistic">查询统计</router-link>
          </li>
          <li class="nav-item">
           <router-link class="nav-link" to="/home/Attendance_Manage">考勤管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/System_Help">系统帮助</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: true,
      nav: false
    }
  },
  methods: {
  }
}
</script>

<style>
  /* 顶部导航 */
  .header{
    height: 100px;
    background-color: #426FAA;
    margin-bottom: 10px;
  }
  .logo{
    letter-spacing: 4px;
    color: white;
    text-shadow: 3px 4px 2px #1FAFD9;
    margin-left: 30px;
  }
  #nav{
    width: 900px;
    padding-top: 0;
    padding-bottom: 0;
  }
  #headnav  .nav-link{
    padding: 16px !important;
    position: relative;
  }
  /* 顶部导航特效 */
  #headnav  .nav-link:hover,
  #headnav .nav-item > .router-link-active{
    background-color: #426FAA;
    color: white !important;
  }
  #headnav  .nav-link:hover:after,
  #headnav .nav-item > .router-link-active:after{
    height: 10px;
    width: 10px;
    content: '';
    border: 30px solid;
    border-color: #426FAA transparent transparent transparent;
    position: absolute;
    top: 55px;
    left: 18px;
  }
</style>
