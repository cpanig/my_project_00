<template>
  <div id="app">
   <!-- 头部区域 -->
   <navbar></navbar>
   <!-- 主菜单组件 -->
   <transition mode="out-in">
   <router-view></router-view>
   </transition>
    </div>
</template>

<script>
import navbar from './components/public/navbar.vue'
export default {
  name: 'app',
  components: {
    navbar: navbar
  }
}
</script>

<style>
  .v-enter{
    opacity: 0;
    transform: translateX(-100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
</style>
