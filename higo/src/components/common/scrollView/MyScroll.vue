<template>
  <div ref="myScroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "MyScroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }

    },
    data() {
      return {
        myScroll: null
      }
    },
    components: {
      // BScroll
    },
    mounted() {
      // 1 创建对象
      this.myScroll = new BScroll(this.$refs.myScroll, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      // 2 监听滚动事件
      this.myScroll.on('scroll', (position) => {
        // const tops = this.$refs.boxItem.offsetTop;
        // console.log(position);
        this.$emit('scrollLength',position);
      });
      // 3 监听上拉事件
      this.myScroll.on('pullingUp',() => {
        // console.log('上拉加载');
        this.$emit('pullingUp');
      });
      // 监听scroll滚动到底部
      // if (this.pu)
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.myScroll && this.myScroll.scrollTo && this.myScroll.scrollTo(x, y, time);
      },
      finishPullUp() {
        this.myScroll.finishPullUp();
      },
      refresh() {
        this.myScroll && this.myScroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>
