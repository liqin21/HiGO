<template>
    <div class="good">
      <a class="goods-item" v-for="(good, index) in goodsList" :key="index" :href="good.link">
        <div class="img-box">
          <img class="good-img" :src="good.show.img" @load="imgLoad">
        </div>
        <p class="good-title">{{good.title}}</p>
        <div class="item-bot">
          <span class="price">{{good.price}}</span>
          <span class="follow-num">{{good.cfav}}</span>
<!--          <img class="follow-icon" src="~assets/img/home/followed.png">-->
        </div>
      </a>
    </div>
</template>

<script>
  export default {
    name: "Goods",
    props: {
      goodsList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      imgLoad() {
        // 使用事件总线 将图片加载事件发射出去
        this.$bus.$emit('goodsImgLoad');
        // console.log(this.$bus);
      }
    }
  }
</script>

<style scoped>
  .good {
    display: flex;
    width: 100%;
    padding: 10px 1%;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 14px;
  }
  .goods-item {
    position: relative;
    display: inline-block;
    width: 47%;
    margin: 1%;
    padding-bottom: 5px;
    border-radius: 5px;
    background: white;
    overflow: hidden;
  }
  .img-box {
    position: relative;
    height: 280px;
  }
  .good-img {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: auto;
    transform: translateX(-50%);
  }
  .good-title {
    margin: 5px 0;
    width: 100%;
    padding: 0 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
  }
  .item-bot {
    height: 24px;
    padding: 0 5px;
  }
  .price {
    color: #333;
    overflow: hidden;
    font-size: 16px;
    font-weight: 700;
    float: left;
  }
  .follow-num {
    display: inline-block;
    width: 60px;
    height: 24px;
    line-height: 26px;
    padding-right: 22px;
    background: url("~assets/img/home/followed.png") right no-repeat;
    background-size: 18px 18px;
    float: right;
    color: #999;
    text-align: right;
  }
  .follow-icon {
    float: right;
    width: 18px;
    height: 18px;
  }
</style>
