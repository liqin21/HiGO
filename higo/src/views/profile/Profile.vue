<template>
  <div>
    <!--<div id="wrapper" v-if="swiperList.length > 0">-->
      <swiper id="wrapper" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="toBanner" :src="item.image">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    <!--</div>-->

    <my-scroll class="content" ref="scroll">
      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
        <li>列表16</li>
        <li>列表17</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表20</li>
        <li>列表21</li>
        <li>列表22</li>
        <li>列表23</li>
        <li>列表24</li>
        <li>列表25</li>
        <li>列表26</li>
        <li>列表27</li>
        <li>列表28</li>
        <li>列表29</li>
        <li>列表30</li>
        <li>列表31</li>
        <li>列表32</li>
        <li>列表33</li>
        <li>列表34</li>
        <li>列表35</li>
        <li>列表36</li>
        <li>列表37</li>
        <li>列表38</li>
        <li>列表39</li>
        <li>列表40</li>
        <li>列表41</li>
        <li>列表42</li>
        <li>列表43</li>
        <li>列表44</li>
        <li>列表45</li>
        <li>列表46</li>
        <li>列表47</li>
        <li>列表48</li>
        <li>列表49</li>
        <li>列表50</li>
      </ul>
    </my-scroll>


  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import MyScroll from "components/common/scrollView/MyScroll";
  export default {
    name: "Profile",
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 1500,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination', // 指示点容器
            type: 'bullets',//这个不用变成custom值，就可以之定义分页器样式(可爽)
            bulletElement : 'span',//设置分页器小圆点标签，默认为span标签
            clickable:true,
            paginationClickable: true,
            notNextTick:true,
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
          on: {
            // touchEnd: function (event) {
            //   //你的事件
            // },
          }
        },
        swiperList: [
          {image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",link: "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119"},
          {image: "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",link: "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119"},
          {image: "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",link: "https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119"},
          {image: "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",link: "https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119"}
        ],
        scroll: null
      }
    },
    components: {
      swiper,
      swiperSlide,
      MyScroll
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

  .toBanner{
    display: block;
    width: 690px;
    height: 210px;
  }

  /*.swiper-pagination {*/
    /*background: rebeccapurple;*/
  /*}*/

  /*.bullet {*/
    /*background:black;*/
  /*}*/


  /*.bullet-active {*/
    /*background:red;*/
  /*}*/

  .content {
    width: 200px;
    height: 400px;
    background: orange;
    overflow: auto;
  }

</style>
