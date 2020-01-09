<template>
  <div>
    <!-- 主页面-->
    <div class="main-container row d-flex justify-content-center">
    <!-- 左边菜单 -->
    <mangeBar class="col-md-2"></mangeBar>
    <!-- 右边菜单 -->
    <router-view class="col-md-9"></router-view>
  </div>
 </div>
</template>

<script>
import mangeBar from './Query_Statistic_navbar.vue'
export default {
  components: {
    mangeBar: mangeBar
  }
}
</script>

<style>
</style>
