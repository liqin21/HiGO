<template>
      <div class="wrapper" ref="wrapScroll">
        <div class="content">
          <div class="c-1">content 1</div>
          <div class="c-2">content 2</div>
          <div class="c-3">content 3</div>
          <div class="c-4">content 4</div>
          <div class="c-1">content 1</div>
          <div class="c-2">content 2</div>
          <div class="c-3">content 3</div>
          <div class="c-4">content 4</div>
          <div class="c-1">content 1</div>
          <div class="c-2">content 2</div>
          <div class="c-3">content 3</div>
          <div class="c-4">content 4</div>
          <div class="c-1">content 1</div>
          <div class="c-2">content 2</div>
          <div class="c-3">content 3</div>
          <div class="c-4">content 4</div>
        </div>
      </div>
</template>

<script>
  import BScroll from "better-scroll";
  export default {
    name: "Category",
    components: {
    },
    data() {
      return {
        wrapScroll: {} //滚动容器对象
      };
    },
    mounted() {
      //渲染dom后初始化滚动
      this.$nextTick(() => {
        this.initScroll();
      });
    },
    activated() {

    },
    deactivated() {

    },
    methods: {
      //初始化滚动
      initScroll() {
        this.wrapScroll = new BScroll(this.$refs.wrapScroll);
      },
      //滚动到指定距离
      scrollTo(x, y) {
        this.wrapScroll.scrollTo(x, y, 300);
      },
      //滚动到指定元素
      scrollToEl(el) {
        //根据class获取dom元素
        let element = this.$refs.wrapScroll.getElementsByClassName(el)[0];
        this.wrapScroll.scrollToElement(element, 300);
      }
    }
  }
</script>


<style scoped>
  .wrapper {
    width: 300px;
    height: 600px;
    background-color: #999;
    overflow: hidden;
  }
  .content > div {
    margin-top: 30px;
    height: 100px;
    background-color: red;
    border: 1px solid #ddd;
  }
</style>
