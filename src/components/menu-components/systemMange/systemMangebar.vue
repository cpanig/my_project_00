<template>
  <!-- 系统管理左边菜单栏-->
  <div class="main-left">
    <ul class="list-group">
       <li class="list-group-item active">系统管理</li>
       <router-link to="/home/systemMange/systemSeting" class="list-group-item list-group-item-action">系统设置</router-link>
       <router-link to="/home/systemMange/ChangePsw" class="list-group-item list-group-item-action">修改密码</router-link>
       <router-link to="/home/systemMange/OprateDairy" class="list-group-item list-group-item-action">操作日记管理</router-link>
       <router-link to="/home/systemMange/SketchSelet" class="list-group-item list-group-item-action">示意图选择</router-link>
       <router-link to="/home/systemMange/StationPosition" class="list-group-item list-group-item-action">分站显示位置</router-link>
       <router-link to="/home/systemMange/WorkAreaLocation" class="list-group-item list-group-item-action">工作站显示位置</router-link>
       <router-link to="/home/systemMange/LogoutLogin" class="list-group-item list-group-item-action">注销登陆</router-link>
     </ul>
  </div>
</template>

<script>
</script>

<style>
/* #asidenav .router-link-active:after,
.list-group-item:hover:after{
  height: 10px;
  width: 10px;
  content: '';
  border: 15px solid ;
  border-color: transparent transparent transparent #007BFF;
  position: absolute;
  left: 290px;
} */
</style>
