<template>
    <div class="home">
      <nav-bar class="home-nav">
        <p slot="center">购物街</p>
      </nav-bar>
      <tab-control class="fixed" :titles="tabControlTitle" v-show="showTabControl" @tabClick="tabClick"></tab-control>
      <my-scroll class="scroll-content" ref="mainScroll" :probe-type="3" :pull-up-load="true" @scrollLength="scrollLength" @pullingUp="getMoreData">
        <swiper id="wrapper" ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="item in swiperList" :key="item.id" class="swiper-item">
            <a :href="item.link">
              <img :src="item.image" alt="" @load="swiperImgLoad">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <recommend-view :recommends="recommends"></recommend-view>

        <a class="feature" href="https://act.mogujie.com"><img src="~assets/img/home/daily_stroll.png"></a>

        <tab-control :titles="tabControlTitle" @tabClick="tabClick" ref="tabControl"></tab-control>

        <goods :goodsList="goods[selectType].list"></goods>

      </my-scroll>

      <back-top @click.native="backTop" :isShow="showBackTop" v-show="showBackTop">goTop</back-top>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import 'swiper/dist/css/swiper.min.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import RecommendView from './childComps/RecommendView'
  import TabControl from 'components/customized/tabControl/TabControl'
  import Goods from "components/customized/goods/Goods";
  import MyScroll from "components/common/scrollView/MyScroll";
  import BackTop from "components/common/backTop/BackTop";

  import {homeMultiData, getHomeGoods} from 'network/home/homeRequest.js'

  export default {
    name: "Home",
    data() {
      return {
        swiperList: [],
        recommends: [],
        goods: {
          'pop': {page: 0,list:[]},
          'new': {page: 0,list:[]},
          'sell': {page: 0,list:[]}
        },
        selectType: 'pop',
        tabControlTitle: ['流行','新款','精选'],
        swiperOption: {
          autoplay: {
            delay: 1500,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination', // 指示点容器
            type: 'bullets',//这个不用变成custom值，就可以之定义分页器样式(可爽)
            bulletElement: 'span',//设置分页器小圆点标签，默认为span标签
            clickable: true,
            paginationClickable: true,
            notNextTick: true,
            bulletClass: 'bullet-class',//设置小圆点的类名,包括下面的当前页面导航器的类名，用来写css样式，注意，这段css一定要引在，swiper实例创建之前，通常用import引入,图片可以考虑用base64方式写入！！！！！！！！！！
            bulletActiveClass: 'bullet-active-class',
          },
          loop: true, // 循环
          speed: 500, // 滑动速度
          // height: 580,
          watchOverflow: true, //当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等。默认不开启这个功能。
          slidesPerView: 1,
          spaceBetween: 30,
          preventClicksPropagation: true,//阻止click冒泡。拖动Swiper时阻止click事件。
          simulateTouch: false,//鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
        },
        tabControlOfSetTop: 0,
        showBackTop: false,
        showTabControl: false,
        isLoad: false
      }
    },
    components: {
      NavBar,
      swiper,
      swiperSlide,
      RecommendView,
      TabControl,
      Goods,
      MyScroll,
      BackTop
    },
    created() {
      // 请求首页多个数据
      this.getHomePageData();
      // 请求首页商品数据
      this.getGoodsData('pop');
      this.getGoodsData('new');
      this.getGoodsData('sell');
    },
    mounted() {
      //使用防抖函数，避免函数不断调用
      const refresh = this.debounce(this.$refs.mainScroll.refresh,100);
      // 监听图片加载完成事件
      this.$bus.$on('goodsImgLoad', () => {
        // 刷新mainScroll，解决图片高度计算不准的问题
        refresh();
        // this.$refs.mainScroll.myScroll.refresh();
      });
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    methods: {
      tabClick(index) {
        switch (index) {
          case 0:
            this.selectType = 'pop';
            break;
          case 1:
            this.selectType = 'new';
            break;
          case 2:
            this.selectType = 'sell';
            break;
        }
      },
      backTop() {
        this.$refs.mainScroll.scrollTo(0,0, 'bounce');
      },
      scrollLength(position) {
        this.showBackTop = (-position.y) > 1000;
        this.showTabControl = this.tabControlOfSetTop < (-position.y);
      },
      getMoreData() {
        this.getGoodsData(this.selectType);
      },
      // 防抖函数
      debounce(func, delay) {
        let timer = null;
        return function (...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this, args);
          },delay);
        }
      },
      swiperImgLoad() { // 获取tabControl的offsetTop
        if (!this.isLoad) {
          this.tabControlOfSetTop = this.$refs.tabControl.$el.offsetTop;
          console.log(this.$refs.tabControl.$el.offsetTop);
          this.isLoad = true;
        }
      },

      getHomePageData() {
        homeMultiData().then(res => {
          this.swiperList = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }, error => {
          console.log(error);
        });
      },
      getGoodsData(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          const list = res.data.list;
          // ... 语法，吧数组中的元素遍历出来存入到另一个数组中
          this.goods[type].list.push(...list);
          this.goods[type].page += 1;
          this.$refs.mainScroll.finishPullUp();
        },error => {
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped>
  .home {
    /*padding: 44px 0 49px;*/
  }

  .home-nav {
    width: 100%;
    background: #d3217b;
    color: #fff;
  }

  .swiper-item {
    height: 200px;
    overflow: hidden;
    position: relative;
  }

  .swiper-slide img{
    top: 50%;
    position: relative;
    transform: translate(0, -50%);
  }

  .feature {
    display: block;
    width: 100%;
    height: 300px;
  }

  .feature img {
    width: 100%;
  }

  .fixed {
    /*实现吸顶效果*/
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 999;
    /*background: white;*/
  }

  .scroll-content {
    /*height: 400px;*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: auto;
  }

</style>
