<template>
  <!-- 名称 -->
  <div>
  <div class="project-title">
   <h1 class="text-center">隧道工程人员管理系统</h1>
   </div>
  <div class="menu-container">
    <ul class="menu  d-flex justify-content-around">
      <li><router-link to="/systemMange" id="link">系统管理</router-link></li>
      <li>综合管理</li>
      <li>用户管理</li>
    </ul>
    <ul class="menu  d-flex justify-content-around">
      <li>员工管理</li>
      <li>人员追踪</li>
      <li>查询统计</li>
    </ul>
    <ul class="menu  d-flex justify-content-around">
      <li>考勤管理</li>
      <li>GIS界面</li>
      <li>系统帮助</li>
    </ul>
    <transition name="slide-fade">
    <router-view></router-view>
    </transition>
  </div>
 </div>
</template>

<script>
</script>

<style>
  body{
    background-color: #162849 !important;
  }
  /* 标题*/
  .project-title{
    margin-bottom: 80px;
  }
  .project-title > h1{
    margin-top: 20px;
    font-size: 2.5rem;
    letter-spacing: 10px;
    color: white;
    text-shadow: 1px 2px 4px #eee;
  }
  /* 菜单*/
  .menu{
    list-style: none;
    padding: 0 30%;
  }
  .menu > li{
    width: 7rem;
    height: 7rem;
    border-radius: 10px;
    background-image:#162849 ;
    box-shadow:0 0 7px 7px #10539A inset;
    color: white;
    font-size: 1.1rem;
    text-align: center;
    line-height: 110px;
  }
  #link{
    text-decoration: none;
    color: white;
  }
</style>
