<template>
  <div>
    <!-- 顶部菜单-->
    <navbar></navbar>
    <!-- 主页面-->
    <div class="main-container d-flex justify-content-around">
      <!-- 左边菜单 -->
     <mangeBar></mangeBar>
     <!-- 右边表单  -->
     <router-view></router-view>
  </div>
 </div>
</template>

<script>
import navbar from '../public/navbar.vue'
import mangeBar from '../public/systemMangebar.vue'
export default {
  components: {
    navbar: navbar,
    mangeBar: mangeBar
  }
}
</script>

<style>
</style>
