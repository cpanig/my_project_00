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
      <a class="navbar-brand" href="#">首页</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">系统管理 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">综合管理</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">用户管理</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">员工管理</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">人员追踪</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">查询统计</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">考勤管理</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">系统帮助</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  </div>
</template>

<script>
</script>

<style>
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
  }
</style>
