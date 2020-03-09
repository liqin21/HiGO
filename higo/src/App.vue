<template>
  <div id="app">

    <router-view></router-view>

    <main-tabbar></main-tabbar>
  </div>
</template>

<script>

import router from '@/router/index'
import MainTabbar from 'components/customized/MainTabbar'

export default {
  name: 'App',
  router,
  components: {
    MainTabbar
  }
}
</script>

<style>
  @import "assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
