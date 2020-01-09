<template>
  <div>
  <!-- 1.顶部导航navbar-->
  <navbar></navbar>
  <!-- 2.底部所以页面的路由跳转-->
  <transition mode="out-in">
    <router-view></router-view>
  </transition>
 </div>
</template>

<script>
import navbar from './public/navbar.vue'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    navbar: navbar
  }
}
</script>

<style>
  /* 顶部导航 */
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
