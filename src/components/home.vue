<template>
  <div>
  <!-- 1.顶部导航navbar-->
  <navbar></navbar>
  <!-- 2.主内容区 -->
  <transition mode="out-in">
    <router-view id="asidenav"></router-view>
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
  .list-group-item{
    position: relative;
  }
  /* 侧边菜单栏特效  */
  #asidenav .router-link-active,
  .list-group-item:hover{
    background-color:#007BFF !important;
    color: white !important;
    box-shadow: -4px 5px 20px grey;
    z-index: 99999;
  }
  .list-group-item:first-child{
    box-shadow: 0 !important;
  }
</style>
