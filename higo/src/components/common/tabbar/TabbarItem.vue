<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-img-h"></slot></div>
    <div v-else><slot name="item-img"></slot></div>
    <p :style="activeStyle"><slot name="item-txt"></slot></p>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    activeColor: {
      type: String,
      default: '#d3217b'
    },
    path: String
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      if (this.$route.path) {
        return this.$route.path == this.path;
      }
      return false;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.path) {
        this.$router.push(this.path)
      }
    }
  }
}
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
  }
  .tabbar-item img {
    margin-bottom: 3px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

</style>
