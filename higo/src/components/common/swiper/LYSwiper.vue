<template>
  <div class="swiper-container" id="lySwiper">
    <div class="swiper-wrapper">
      <!-- 存放具体的轮播内容 -->
      <div class="swiper-slide">
        <slot name="item"></slot>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination swiper-pagination-white" id="pagination"></div>
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
  <!--<div class="swiper-container" :class="swipeid">-->
    <!--<div class="swiper-wrapper">-->
      <!--&lt;!&ndash; 存放具体的轮播内容 &ndash;&gt;-->
      <!--<slot name ="swiper-con"></slot>-->
    <!--</div>-->
    <!--&lt;!&ndash; 分页器 &ndash;&gt;-->
    <!--<div :class="{'swiper-pagination':pagination}"></div>-->
  <!--</div>-->
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  const props = {
    swipeid: {
      type: String,
    default: "swiper-wrapper"
    },
    effect: {
      type: String,
    default: "slide"
    },
    loop: {
      type: Boolean,
    default: true
    },
    direction: {
      type: String,
    default: "horizontal"
    },
    pagination: {
      type: Boolean,
    default: true
    },
    paginationType: {
      type: String,
    default: "bullets"
    },
    autoPlay: {
      type: Number,
    default: 3000
    }
  };

  export default {
    name: "LYSwiper",
    data() {
      return {
        mySwiper: null
      }
    },
    props,
    mounted() {
      let that = this;
      this.mySwiper = new Swiper("#lySwiper", {
      //循环
      // loop: that.loop,
      loop: true,
      //分页器
      pagination: {
        el: "#pagination",
        bulletClass : 'swiper-pagination-bullet',
        ckable: true //允许点击小圆点跳转
      },
      //分页类型
      // paginationType: "bullets",
      paginationType: that.paginationType,
      //自动播放
      // autoPlay: 3000,
      autoPlay: that.autoPlay,
      //方向
      // direction: "horizontal",
      direction: that.direction,
      //特效
      effect: that.effect,
      //用户操作swiper之后，不禁止autoplay
      disableOnInteraction: false,
      //修改swiper自己或子元素时，自动初始化swiper
      observer: true,
      //修改swiper的父元素时，自动初始化swiper
      observeParents: true
      });
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 200px;
    background-color: orange;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  /*.swiper-wrapper a, img {*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper img{
    top: 50%;
    position: relative;
    transform: translate(0, -50%);
  }
  .swiper-pagination-bullet {
    width:0.833rem;
    height: 0.833rem;
    display: inline-block;
    background: #7c5e53;
  }

</style>
