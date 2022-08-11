<template>
  <div>
    <div class="header">
      <span @click="$router.back()"><van-icon name="arrow-left" /></span>
    </div>
    <div class="wrap">
      <p class="st">{{list.sort}}</p>
      <h3>{{list.title}}</h3>
      <div class="p1">
        <span class="sp1">{{list.subtitle}}</span>
        <span class="sp2">立下龙</span>
        <span class="sp3">斑马旅游BMTRIP</span> <br />
        <em>{{list.update_time}}</em>
      <div class="wrap-list" v-html="list.content">

      </div>

      </div>
    </div>
  </div>
</template>

<script>
import { getFaXianDetail } from "../tools/ajax";
export default {
  name: "FaxianDetail",

  data() {
    return {
      list:{}
    };
  },

  created() {
    getFaXianDetail({
        id:this.$route.query.id
    }).then(res=>{
      this.list=res.data
    })
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 0 0.3rem;
  text-align: left;
  font-size: 0.3rem;
  span {
    display: block;
  }
}
.wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.4rem;
  .st{
    text-align: left;
  color: rgba(0, 0, 0, 0.3);
  }
  h3 {
    font-size: 0.4rem;
    font-weight: normal;
    text-align: left;
    margin-bottom: 0.1rem;
  }
  .p1 {
    width: 100%;
    margin-bottom: 0.3rem;
    text-align: left;
    span {
      margin-right: 0.2rem;
    }
    .sp1 {
      background: #f2f2f2;
      padding: 0.04rem 0.06rem;
    }
    .sp1,
    .sp2 {
      color: rgba(0, 0, 0, 0.3);
    }
    .sp3 {
      color: #9eaac2;
    }
    em,
    i {
      display: inline-block;
      margin-top: 0.1rem;
      font-style: normal;
      color: rgba(0, 0, 0, 0.3);
      letter-spacing: 0.03rem;
    }
  }
}
</style>
<style>
.wrap-list img{
    width: 100%;
}
</style>