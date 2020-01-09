<template>
  <div>
    <!-- 主页面-->
    <div class="main-container row d-flex justify-content-center">
    <!-- 左边菜单 -->
    <mangeBar class="col-md-2"></mangeBar>
    <!-- 右边菜单 -->
    <transition mode="out-in">
    <router-view class="col-md-9"></router-view>
    </transition>
  </div>
 </div>
</template>
<script>
import mangeBar from './Staff_Tracking_navbar.vue'
export default {
  components: {
    mangeBar: mangeBar
  }
}
</script>
<style>
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
</style>
