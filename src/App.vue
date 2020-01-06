<template>
  <div id="app">
    <!-- 名称 -->
  <div class="project-title">
   <h1 class="text-center">隧道工程人员管理系统</h1>
   </div>
   <!-- 主菜单组件 -->
   <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }

}
</script>

<style scoped="scoped">
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
</style>
