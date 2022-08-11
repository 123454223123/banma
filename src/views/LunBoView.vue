<template>
  <div class="box">
    <div class="fh">
      <span @click="$router.back()"><van-icon name="arrow-left" /></span>
      {{ list.pageName }} {{ jiuList.title }}
      <span><van-icon name="bar-chart-o" /></span>
    </div>

    <div class="wrap">
      <!-- 拼车出游 秋季推荐 -->
      <div class="ltWrap" v-if="flag">
        <!-- 拼车出游 -->
        <div class="ltWrap-t1" v-if="flag2">
          <div class="bm1">
            <img :src="list.data[0].data[0].img.url" alt="" />
          </div>
          <div class="bm2">
            <img :src="list.data[1].data[0].img.url" alt="" />
          </div>
          <Mains :mains="jiuList"></Mains>
        </div>
        <!-- 秋季推荐 -->
        <div class="ltWrap-t2" v-if="!flag2">
          秋季推荐
          <br />
          <br />
          <div
            class="ltWrap-t2-m1"
            v-for="item in jiuList"
            :key="item.id"
            v-show="jiuList.length"
          >
            <router-link :to="'/detail?url=' + item.url">
              <img :src="item.img" alt="" />
              <div class="ltWrap-info">
                <p class="p1">{{ item.title }}</p>
                <p class="p2">{{ item.subtitle }}</p>
                <p class="p3">
                  <span v-for="item2 in item.mark" :key="item2.name">{{
                    item2.name
                  }}</span>
                </p>
                <p class="p4">{{ item.price }}起/一人</p>
                <div class="p5">{{ item.tip_mark }}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 甘南秘境 伊利小环线 草原正当季 独库公路 -->
      <div class="gtWrap" v-if="flag3">
        <GtWraps :lists="list"></GtWraps>
      </div>
    </div>
  </div>
</template>

<script>
import { getLunBoDetail, getIndexList, getIndexHotel } from "../tools/ajax";
import Mains from "../components/Mains.vue";
import GtWraps from "../components/GtWraps.vue";
export default {
  name: "LunBoView",
  components: {
    Mains,
    GtWraps,
  },
  data() {
    return {
      flag: false,
      flag2: false,
      list: [],
      jiuList: [],
      idss: "",
      flag3: false,
    };
  },

  mounted() {},
  created() {
    let id = this.$route.query.id.split("com/")[1].split("/")[0];
    let id2 = this.$route.query.id.split("com/")[1].split("/")[2];
    if (id == "quality" || id == "list") {
      let lj = this.$route.query.id.split("?id=")[1];
      // 甘南秘境  伊利小环线 草原正当季  独库公路
      getLunBoDetail({
        product_id: lj,
        combo_key: "10000:131;20000:6406",
      }).then((res) => {
        this.list = res.data;
        this.flag3 = true;
      });
    } else if (id2 == "62b95806b8963177d145f996") {
      // 拼车出游

      this.idss = this.$route.query.id.split("activity/")[1];

      if (this.idss == "62b95806b8963177d145f996") {
        this.flag2 = true;
      }

      getIndexList({
        pageId: this.idss,
      }).then((res) => {
        this.list = res.data;
        this.flag = true;
      });
      getIndexHotel({
        ids: [
          "2563",
          "2582",
          "3054",
          "2691",
          "3006",
          "2659",
          "3053",
          "2617",
          "2644",
          "2664",
          "2536",
          "2554",
        ],
      }).then((res) => {
        this.jiuList = res.data.data;
      });
    } else {
      //  秋季推荐
      getIndexHotel({
        ids: ["2637", "3053", "3057", "2664", "2617", "2644", "3061"],
      }).then((res) => {
        this.jiuList = res.data.data.list;
        this.flag = true;
      });
    }
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  background-color: #f5f5f5;
}
.fh {
  width: 100%;
  height: 0.88rem;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 0.32rem;
  position: fixed;
  top: 0;
  background-color: transparent;
  // background-color: #fff;
  z-index: 999;
  span {
    cursor: pointer;
  }
}
.bm1 {
  margin-top: 0.88rem;
  width: 100%;
  height: 3.78rem;
  img {
    display: block;
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
}
.bm2 {
  width: 100%;
  height: 2.44rem;
  img {
    display: block;
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
}
.ltWrap-t2 {
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
  .ltWrap-t2-m1 {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
  }
}
.ltWrap-info {
  width: 100%;
  box-sizing: border-box;
  padding: 0.14rem 0.18rem 0;
  text-align: left;
  font-size: 0.26rem;
  .p2 {
    font-family: PingFangSC-Light;
    font-size: 11px;
    color: #898989;
    letter-spacing: 0.15px;
    margin-bottom: 9px;
  }
  .p3 {
    span {
      border: 0.5px solid rgba(193, 67, 116, 0.2);
      padding: 3px 6px;
      font-family: PingFangSC-Light;
      font-size: 10px;
      color: #c14374;
      letter-spacing: 0.2px;
      margin-right: 9px;
    }
  }
  .p4 {
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #c04374;
    letter-spacing: 0.8px;
    white-space: nowrap;
    margin: 0.23rem 0;
  }
  .p5 {
    position: absolute;
    top: 0;
    left: 9px;
    padding: 0.06rem 0.1rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 0.06rem 0.06rem;
    font-size: 0.2rem;
  }
}
</style>