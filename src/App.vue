<template>
  <div id="app">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  body{
    background-color: #162849 !important;
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
