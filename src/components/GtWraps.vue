<template>
  <div class="box" v-if="feature">
    <div :class="{ header: true, actives: pst }" ref="heds" v-if="headerShow">
      <span @click="$router.back()" class="headers-sp1"> </span>
      <p>{{ lists.pageName }}</p>
      <span class="headers-sp2"> </span>
    </div>
    <div class="header" id="headers" v-else>
      <span @click="$router.back()">
        <van-icon name="arrow-left" />
      </span>
      <p>{{ lists.title }}</p>
      <span>
        <van-icon name="setting-o" />
      </span>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="2000">
        <van-swipe-item v-for="item in luoBoList" :key="item.id" swipeTo="i">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="m1">
      <p class="p1">{{ lists.title }}</p>
      <p class="p2">{{ lists.label }}</p>
      <ul>
        <li v-for="item in lists.mark" :key="item.name">{{ item.name }}</li>
      </ul>
      <div class="p4">
        ￥{{
          lists.group_list[1].list[typesNum].min_price || lists.max_price
        }}起/套
        <p class="p5">
          <span>本次下单最多可以赢140黄豆</span>
          <span>查看</span>
        </p>
      </div>
    </div>
    <!-- 评分 -->
    <div class="m1-pf">
      <div class="pf-title">
        <span>评分: &nbsp; 5.0</span>
        <span>查看全部(4)></span>
      </div>
      <div class="pf-main">
        <p class="p1" v-if="lists.comment.length">
          <span>{{ lists.comment[0].name }}</span>
          <span>{{ lists.comment[0].time }}</span>
        </p>
        <div class="p2">
          <p>
            <span>
              行程安排
              <van-rate
                v-model="valuess"
                color="#ffd21e"
                :size="10"
                gutter="1px"
                readonly
              />
            </span>
            <span>
              餐饮住宿
              <van-rate
                v-model="valuess"
                color="#ffd21e"
                :size="10"
                gutter="1px"
                readonly
              />
            </span>
          </p>
          <p>
            <span>
              导游服务
              <van-rate
                v-model="valuess"
                color="#ffd21e"
                :size="10"
                gutter="1px"
                readonly
              />
            </span>
            <span>
              旅游交通
              <van-rate
                v-model="valuess"
                color="#ffd21e"
                :size="10"
                gutter="1px"
                readonly
              />
            </span>
          </p>
        </div>
        <div class="p3" v-if="lists.comment.length">
          {{ lists.comment[0].content }}
        </div>
      </div>
    </div>

    <div class="m2">
      <span>
        <i><van-icon name="share-o" /> 出发地:</i> 全国</span
      >
      <span> 切换城市 <van-icon name="arrow-down" /></span>
    </div>
    <div class="m3">
      <div ref="type_view" :class="{ active: pst, 'm3-title': true }">
        <div class="m3-title-a">
          <ul>
            <li
              v-for="(item, i) in lists.group_list[1].list"
              :class="{ activest: typesNum == i }"
              @click="typesNum = i"
              :key="item.id"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <ul class="m3-title-b">
          <li
            v-for="(item, i) in typeTitleList"
            :class="{ activest: typeTitleNum == i }"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="m3-main">
        <div
          v-html="feature[0].content"
          v-if="feature.length"
          class="mainWrap"
        ></div>
        <div class="m3-main-a">
          <div
            class="contentst"
            v-for="item in lists.high_feature"
            :key="item.id"
          >
            <div class="contentst-title"><span>|</span>{{ item.title }}</div>
            <div v-for="item2 in item.list" :key="item2">
              <img :src="item2.imgs[0]" alt="" />
              <div class="contentst-mark">
                <span>{{ item2.label }}</span>
              </div>
              <div class="contentst-a">{{ item2.title }}</div>
              <div class="contentst-b">{{ item2.content }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m4">
        <div class="contentst-title"><span>|</span>酒店介绍</div>
        <div v-html="lists.www_fee_contain" class="m4-main"></div>
      </div>
    </div>

    <div class="fooder">
      <span @click="pushUser">
        <van-icon name="star-o" />
        <br />
        收藏
      </span>
      <span>
        <van-icon name="service-o" />
        <br />
        客服
      </span>
      <div>选择团期</div>
    </div>

    <div class="backTop" v-show="pst" @click.stop="backTop" ref="ss">
      回到<br />
      顶部
    </div>
  </div>
</template>

<script>
import { Toast, ToastOptions } from "vant";
import { mapState} from "vuex";
export default {
  name: "GtWraps",
  props: ["lists"],
  data() {
    return {
      luoBoList: [],
      groupName: "",
      feature: "",
      pst: false,
      flags: false,
      headerShow: true,
      valuess: 5,
      typesNum: 0,
      typeTitleList: ["产品热点", "特色体验", "行程安排", "费用须知"],
      typeTitleNum: 0,
    };
  },
  computed: {
    ...mapState(["phono", "yzm", "token"]),
  },
  created() {
    setTimeout(() => {
      this.luoBoList = this.lists.product_img_www;
      this.groupName = this.lists.group_list[1].list[0].name;
      this.feature = this.lists.feature;
    }, 1000);
    this.bindScroll();
  },

  mounted() {},

  methods: {
    // 滚动监听函数, 当网页滚动时,左侧二级分类标题联动
    scrollHandle() {
      // 当前网页滚动距离
      var scrollTop = document.scrollingElement.scrollTop;
      if (scrollTop > 360) {
        this.pst = true;
        this.headerShow = false;
      } else {
        this.pst = false;
        this.headerShow = true;
      }
      // 控制介绍头部
      if (scrollTop > 1800) {
        this.typeTitleNum = 3;
      } else if (scrollTop > 1200) {
        this.typeTitleNum = 2;
      } else if (scrollTop > 600) {
        this.typeTitleNum = 1;
      } else if (scrollTop < 600) {
        this.typeTitleNum = 0;
      }
    },
    backTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    bindScroll() {
      window.addEventListener("scroll", this.scrollHandle);
    },
    clearScroll() {
      window.removeEventListener("scroll", this.scrollHandle);
    },
    pushUser() {
      if (this.token) {
      } else {
        Toast.setDefaultOptions({ duration: 500, overlay: true,type:"primary" });
         this.$toast.success({
          message:'未登录，即将跳转登录页',
        })
        setTimeout(() => {
          this.$router.push("/user");
        }, 800);
      }
    },
  },
  destroyed() {
    // 取消滚动监听
    this.clearScroll();
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  background-color: #f5f5f5;
  :deep(.toast-message){
    background-color: orange;
  }
}
#headers {
  padding: 0;
  background: #fff;
  position: fixed;
  top: 0;
  span {
    color: #666;
  }
  p {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.header {
  width: 100%;
  height: 0.88rem;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.3rem;
  padding: 0 0.32rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 999;
  .headers-sp1 {
    background: center no-repeat
      url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQgMTcuNjZMOC4zNCAxMiAxNCA2LjM0Ii8+PC9nPjwvc3ZnPg==");
  }
  .headers-sp2 {
    background: center no-repeat
      url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBmaWxsPSIjMDAwIiBvcGFjaXR5PSIwLjUiIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYgNikiIHN0cm9rZT0iI0ZGRiI+PGNpcmNsZSBjeD0iMiIgY3k9IjYiIHI9IjIiLz48Y2lyY2xlIGN4PSI5IiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiLz48cGF0aCBkPSJNMy44MyA1LjI3bDMuNDYtMi4xMU0zLjcyIDYuOThsNC4zNyAyLjM5Ii8+PC9nPjwvZz48L3N2Zz4=");
  }
  span {
    width: 0.64rem;
    height: 0.64rem;
    border-radius: 50%;

    color: white;
    text-align: center;
    line-height: 0.64rem;
  }
}
.active {
  position: fixed;
  top: 0.88rem;
  z-index: 999;
  background: #fff;
}
.active2 {
  border-bottom: 1px solid #c04374;
}
.backTop {
  background: #666666;
  width: 1rem;
  height: 1rem;
  text-align: center;
  line-height: 0.5rem;
  position: fixed;
  right: 0.48rem;
  bottom: 1.92rem;
  z-index: 10;
  cursor: pointer;
}
// 轮播图样式
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  width: 100%;
  height: 3.78rem;
  text-align: center;
  img {
    width: 100%;
    display: block;
    height: 3.78rem;
  }
}
:deep(.van-swipe__indicator) {
  border-radius: 0;
  width: 0.12rem;
  height: 0.04rem;
}
.m1 {
  width: 100%;
  height: 3.2rem;
  padding: 0.24rem 0.36rem 0.1rem;
  text-align: left;
  box-sizing: border-box;
  background-color: #ffffff;
  .p1 {
    margin-bottom: 0.12rem;
  }
  .p2 {
    margin-bottom: 0.1rem;
    font-family: PingFangSC-Light;
    font-size: 0.24rem;
    color: #898989;
    letter-spacing: 0.004rem;
  }
  ul {
    display: flex;
    text-align: left;
    padding: 0.2rem 0;
    li {
      list-style: none;
      border: 0.01333rem solid rgba(193, 67, 116, 0.2);
      padding: 0.08rem 0.16rem;
      font-family: PingFangSC-Light;
      font-size: 0.2rem;
      color: #c14374;
      letter-spacing: 0.00533rem;
      margin-right: 0.16rem;
    }
  }
  .p4 {
    color: #c04374;
    font-size: 0.32rem;
  }
  .p5 {
    margin-top: 0.2rem;
    font-size: 0.24rem;
    display: flex;
    justify-content: space-between;
  }
}
.m1-pf {
  width: 100%;
  background: #fff;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
  .pf-title {
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0;
    & span:nth-child(1) {
      color: #ff9900;
      font-size: 0.28rem;
      font-weight: bold;
    }
    & span:nth-child(2) {
      color: #333;
      font-size: 0.28rem;
    }
  }
  .pf-main {
    box-sizing: border-box;
    padding: 0.3rem 0 0.2rem;
    .p1 {
      display: flex;
      justify-content: space-between;
      & span:nth-child(1) {
        font-size: 0.25rem;
        font-weight: bold;
      }
      & span:nth-child(2) {
        font-size: 0.22rem;
        color: #898989;
      }
    }
    .p2 {
      margin-top: 0.2rem;
      p {
        display: flex;
        color: #898989;
        font-size: 0.22rem;
        justify-content: space-between;
      }
    }
    .p3 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 0.1rem;
      font-size: 0.22rem;
    }
  }
}

.m2 {
  width: 100%;
  height: 0.6rem;
  padding: 0.1rem 0.3rem;
  box-sizing: border-box;
  margin: 0.1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.34667rem;
  color: #333;
  background-color: #ffffff;
  span {
    font-size: 0.3rem;
    font-weight: normal;
    i {
      font-style: normal;
      font-weight: bold;
    }
  }
}
.m3 {
  background-color: #ffffff;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.2rem;
  padding: 0.3rem 0.2rem 0;
  overflow: hidden;
  .m3-title {
    background-color: #ffffff;
    width: 100%;
  }
  .m3-title-a {
    width: 100%;
    height: 0.68rem;
    ul {
      display: flex;
    }
    li {
      font-weight: normal;
      padding: 0 0.1rem;
      font-size: 0.24rem;
      height: 100%;
      text-align: center;
      line-height: 0.65rem;
      margin-left: 0.3rem;
      background: #f6f6f6;
      color: #333;
      cursor: pointer;
    }
    .activest {
      color: #fff;
      background: #c04374;
    }
  }
  .m3-title-b {
    width: 100%;
    height: 0.72rem;
    display: flex;
    margin: 0.12rem 0;
    justify-content: space-around;
    li {
      padding: 0.2rem 0;
    }
    .activest {
      border-bottom: 2px #c04374 solid;
    }
  }

  .m3-main {
    width: 100%;
    margin-top: 0.16rem;
  }
}
.m4 {
  width: 100%;
  background-color: #fff;
  padding: 0 0.24rem;
  box-sizing: border-box;
  text-align: left;
  .m4-main {
    width: 100%;
    padding-left: 0.1rem;
    box-sizing: border-box;
    color: #898989;
  }
}

.mainWrap {
  width: 100%;
  box-sizing: border-box;
  p {
    width: 100%;
    img {
      display: inline-block;
      width: 100% !important;
      height: auto;
    }
  }
}
.m3-main-a {
  margin: 0.48rem 0;
  box-sizing: border-box;
  padding-bottom: 0.64rem;
  text-align: left;
  img {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
.contentst {
  margin-bottom: 0.3rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #898989;
}
.contentst-title {
  font-size: 0.3rem;
  color: #333333;
  position: relative;
  margin-bottom: 0.32rem;
  font-weight: bold;
  overflow: hidden;
  span {
    color: #c04374;
    margin-right: 0.2rem;
  }
}
.contentst-mark {
  width: 100%;
  padding: 0.2rem;
  span {
    display: inline-block;
    font-size: 0.26667rem;
    color: #c14374;
    border: 0.02667rem solid rgba(255, 65, 76, 0.2);
    border-radius: 0.05333rem;
    margin: 0.24rem 0;
    margin-right: 0.24rem;
    position: relative;
    left: -0.16rem;
  }
}
.contentst-b {
  margin-top: 0.2rem;
  font-size: 0.26rem;
  color: #898989;
}
.fooder {
  background: #fff;
  box-shadow: 0 -0.05333rem 0.21333rem 0 rgba(0, 0, 0, 0.04);
  height: 1.44rem;
  padding: 0.10667rem 0.48rem 0.13333rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    width: 4rem;
    height: 0.9rem;
    border-radius: 0.05333rem;
    line-height: 0.9rem;
    background-color: #c04374;
    color: #ffffff;
  }
  span {
    cursor: pointer;
  }
}
</style>

<style  lang="scss">
.mainWrap {
  width: 100%;
  box-sizing: border-box;
  p {
    width: 100%;
    img {
      display: inline-block;
      width: 100% !important;
      height: auto;
    }
  }
}
</style>