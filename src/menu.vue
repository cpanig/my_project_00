<template>
  <div>
    <!-- 1.头部标题 -->
    <div class="project-title">
    <h1 class="text-center">隧道工程人员管理系统</h1>
    </div>
    <!-- 2.主菜单界面 -->
    <div class="menu-container">
      <ul class="menu  d-flex justify-content-around">
        <li><router-link to="/home/systemMange" class="link">系统管理</router-link></li>
        <li><router-link to="/home/Integrated_Manage" class="link">综合管理</router-link></li>
        <li><router-link to="/home/User_Manage" class="link">用户管理</router-link></li>
      </ul>
      <ul class="menu  d-flex justify-content-around">
        <li><router-link to="/home/Staff_Manage" class="link">员工管理</router-link></li>
        <li><router-link to="/home/Staff_Tracking" class="link">人员追踪</router-link></li>
        <li><router-link to="/home/Query_Statistic" class="link">查询统计</router-link></li>
      </ul>
      <ul class="menu  d-flex justify-content-around">
        <li><router-link to="/home/Attendance_Manage" class="link">考勤管理</router-link></li>
        <li>GIS界面</li>
        <li><router-link to="/home/System_Help" class="link">系统帮助</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style>
  /* 标题*/
  .project-title{
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .project-title > h1{
    margin-top: 20px;
    font-size: 3.5rem;
    letter-spacing: 10px;
    color: white;
    text-shadow: 1px 2px 4px #eee;
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
