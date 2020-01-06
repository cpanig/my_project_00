<template>
  <div class="menu-container">
    <ul class="menu d-flex justify-content-around">
      <li><router-link to="/home/systemMange" id="link">系统管理</router-link></li>
      <li>综合管理</li>
      <li>用户管理</li>
    </ul>
    <ul class="menu d-flex justify-content-around">
      <li>员工管理</li>
      <li>人员追踪</li>
      <li>查询统计</li>
    </ul>
    <ul class="menu d-flex justify-content-around">
      <li>考勤管理</li>
      <li>GIS界面</li>
      <li>系统帮助</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
  body{
    background-color: #162849 !important;
  }
  .menu{
    list-style: none;
    padding: 0 30%;
    height: fit-content;
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
  @media screen and (max-width:1000px){
    padding: 0;
  }
</style>
