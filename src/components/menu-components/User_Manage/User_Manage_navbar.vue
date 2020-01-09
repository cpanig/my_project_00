<template>
  <div>
    <ul class="list-group">
       <li class="list-group-item active">用户管理</li>
       <router-link to="/AddUser" class="list-group-item list-group-item-action">新建用户</router-link>
       <router-link to="/ChangeUserInfo" class="list-group-item list-group-item-action">修改用户信息</router-link>
       <router-link to="/DeleteUser" class="list-group-item list-group-item-action">删除已有用户信息</router-link>
       <router-link to="/SearchUser" class="list-group-item list-group-item-action">查询用户信息</router-link>
     </ul>
  </div>
</template>

<script>
</script>

<style>
</style>
