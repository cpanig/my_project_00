<template>
  <div>
  <!-- 主菜单  -->
  <div class="menu-container">
    <ul class="menu  d-flex justify-content-around">
      <li @click.capture="changeFlag"><router-link to="/systemMange" class="link">系统管理</router-link></li>
      <li><router-link to="/Integrated_Manage" class="link">综合管理</router-link></li>
      <li><router-link to="/User_Manage" class="link">用户管理</router-link></li>
    </ul>
    <ul class="menu  d-flex justify-content-around">
      <li><router-link to="/Staff_Manage" class="link">员工管理</router-link></li>
      <li><router-link to="/Staff_Tracking" class="link">人员追踪</router-link></li>
      <li><router-link to="/Query_Statistic" class="link">查询统计</router-link></li>
    </ul>
    <ul class="menu  d-flex justify-content-around">
      <li><router-link to="/Attendance_Manage" class="link">考勤管理</router-link></li>
      <li>GIS界面</li>
      <li><router-link to="/System_Help" class="link">系统帮助</router-link></li>
    </ul>
  </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      flag: true
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style>
  body{
    background-color: #162849 !important;
  }
  /* 菜单*/
  .menu{
    list-style: none;
    padding: 10px 25%;
  }
  .menu > li{
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-image:#162849 ;
    box-shadow:0 0 15px 8px #10539A inset;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    line-height: 140px;
  }
  .menu-link:hover{
    animation: faden 1s 1;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
    animation-name: faden;
    cursor: pointer;
  }
  .link{
    text-decoration: none !important;
    color: white !important;
  }
</style>
