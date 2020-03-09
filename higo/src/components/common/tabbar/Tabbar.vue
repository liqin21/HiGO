<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  .tabbar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 49px;
    padding-top: 2px;
    background: #e6e6e6;
    font-size: 16px;
    display: flex;
  }

</style>
