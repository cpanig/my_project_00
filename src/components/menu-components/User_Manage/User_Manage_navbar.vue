<template>
  <div>
    <ul class="list-group">
       <li class="list-group-item active">用户管理</li>
       <router-link to="/home/User_Manage/AddUser" class="list-group-item list-group-item-action">新建用户</router-link>
       <router-link to="/home/User_Manage/ChangeUserInfo" class="list-group-item list-group-item-action">修改用户信息</router-link>
       <router-link to="/home/User_Manage/DeleteUser" class="list-group-item list-group-item-action">删除已有用户信息</router-link>
       <router-link to="/home/User_Manage/SearchUser" class="list-group-item list-group-item-action">查询用户信息</router-link>
     </ul>
  </div>
</template>

<script>
</script>

<style>
</style>
