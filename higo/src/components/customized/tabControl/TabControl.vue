<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{selected : index === currentIndex}" v-for="(title, index) in titles" :key="index" @click="selectCategory(index)">{{title}}</div>
  </div>

</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0,
        isSelected: false
      }
    },
    props: {
      titles: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    methods: {
      selectCategory(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    background: white;
    justify-content: space-around;
  }

  .tab-control-item {
    width: 40px;
    text-align: center;
  }

  .selected {
    border-bottom: 3px solid #d3217b;
    color: #d3217b;
  }

</style>
