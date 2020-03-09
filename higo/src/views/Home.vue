<template>
    <div>
        <nav-bar class="home-nav">
          <!--<span slot="left">返回</span>-->
          <p slot="center">购物街</p>
          <!--<span slot="right">分享</span>-->
        </nav-bar>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "Home",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav {
    background: #d3217b;
    color: #fff;
  }

</style>
