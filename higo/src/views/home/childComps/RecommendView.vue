<template>
  <div class="recommend">
    <div class="rec-item" v-for="rec in recommends" :key="rec.id">
      <a :href="rec.link">
        <img :src="rec.image" alt="">
        <span>{{rec.title}}</span>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default () {
          return [];
        }
      }
    }
  }
</script>

<style scoped>

  .recommend {
    width: 100%;
    padding: 15px 10px 10px;
    border-bottom: 5px solid #eee;
    display: flex;
    justify-content: space-around;
  }

  .rec-item {
    width: 85px;
    font-size: 14px;
  }

  .rec-item img {
    width: 80px;
    height: 80px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }



</style>
