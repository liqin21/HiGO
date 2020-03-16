<template>
  <tabbar>
    <tabbar-item path="/home">
      <img src="~assets/img/tabbar/home_h.png" slot="item-img-h">
      <img src="~assets/img/tabbar/home.png" slot="item-img">
      <p slot="item-txt">首页</p>
    </tabbar-item>
    <tabbar-item path="/category">
      <img src="~assets/img/tabbar/category_h.png" slot="item-img-h">
      <img src="~assets/img/tabbar/category.png" slot="item-img">
      <p slot="item-txt">分类</p>
    </tabbar-item>
    <tabbar-item path="/shoppingbar">
      <img src="~assets/img/tabbar/shoppingbar_h.png" slot="item-img-h">
      <img src="~assets/img/tabbar/shoppingbar.png" slot="item-img">
      <p slot="item-txt">购物车</p>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img src="~assets/img/tabbar/profile_h.png" slot="item-img-h">
      <img src="~assets/img/tabbar/profile.png" slot="item-img">
      <p slot="item-txt">我的</p>
    </tabbar-item>
  </tabbar>

</template>

<script>
  import TabbarItem from 'components/common/tabbar/TabbarItem'
  import Tabbar from 'components/common/tabbar/Tabbar'
  export default {
    name: "MainTabbar",
    components: {
      TabbarItem,
      Tabbar
    }
  }
</script>

<style scoped>

</style>
