<template>
  <div class="box">
    <div class="header">
      <van-cell @click="showPopup"><van-icon name="service-o" /></van-cell>
      <van-popup
        position="bottom"
        :style="{ height: '36%' }"
        v-model:show="show1">
        <div class="showTop">
          客户服务 <span><van-icon name="cross" /></span>
        </div>
        <ul>
          <li>
            <div>
              <p class="showP1">联系在线客服</p>
              <p class="showP2">服务时间:周一到周日9：00 - 22：00</p>
            </div>
            <div class="showRight">
              <van-icon name="service-o" />
            </div>
          </li>
          <li>
            <div>
              <p class="showP1">拨打客服电话</p>
              <p class="showP2">服务时间:周一到周日9：00 - 22：00</p>
            </div>
            <div class="showRight">
              <van-icon name="phone-o" />
            </div>
          </li>
          <li>
            <div>
              <p class="showP1">留言资讯</p>
              <p class="showP2">服务时间:周一到周日9：00 - 22：00</p>
            </div>
            <div class="showRight">
              <van-icon name="comment-o" />
            </div>
          </li>
        </ul>
      </van-popup>
      <span>首页</span>
      <div class="search-icon">
        <router-link to="/search">
          <van-icon name="search" />
        </router-link>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="2000">
        <van-swipe-item v-for="item in luoBoList" :key="item.id" swipeTo="i">
          <router-link :to="'/lunbo?id=' + item.url">
            <img :src="item.img.url" alt="" />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 选项栏 -->
    <ul class="pictures">
      <li v-for="item in jiuList" :key="item.id">
        <router-link :to="'/types?url=' + item.url"
          ><img :src="item.img.url" alt=""
        /></router-link>
      </li>
    </ul>

    <!-- 新品推荐 -->
    <div class="newWrap">
      <img :src="newRecommend" alt="" />
    </div>

    <!-- 新品推荐轮播... -->
    <div class="newLunBo">
      <van-swipe class="my-swipe newLunBoList" lazy-render="true">
        <van-swipe-item v-for="item in newList" :key="item.id" swipeTo="i">
          <router-link :to="'/detail?url=' + item.url">
            <img :src="item.img.url" alt="" />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 周末躺酒店 -->
    <div class="newWrap">
      <img :src="tangUrl" alt="" />
    </div>
    <!-- 酒店详情 -->
    <div class="jiuList">
      <ul class="jiuList-ul">
        <li class="jiuList-li" v-for="item in tangList" :key="item.id">
          <router-link :to="'/detail?url=' + item.url">
            <div class="top">
              <img :src="item.img" alt="" />
              <div class="bottom">
                <div class="bottom-a1">{{ item.title }}</div>
                <div class="bottom-a2">{{ item.subtitle }}</div>
                <div class="bottom-a3">
                  <ul class="bottom-a3-list">
                    <li v-for="item2 in item.mark" :key="item2">
                      {{ item2.name }}
                    </li>
                  </ul>
                  <div class="bottom-a3-price">{{ item.price }}起/套</div>
                </div>
              </div>
            </div>
            <div class="tops">酒店套餐</div>
          </router-link>
        </li>
      </ul>
    </div>

    <Mains
      :titles="lists[6].data[0].img.url"
      :mains="lists[7].data.ids"
      v-if="lists.length"
    ></Mains>
    <Mains
      :titles="lists[8].data[0].img.url"
      :mains="lists[9].data.ids"
      v-if="lists.length"
    ></Mains>
    <Mains
      :titles="lists[10].data[0].img.url"
      :mains="lists[11].data.ids"
      v-if="lists.length"
    ></Mains>
    <Mains
      :titles="lists[12].data[0].img.url"
      :mains="lists[13].data.ids"
      v-if="lists.length"
    ></Mains>
    <Mains
      :titles="lists[14].data[0].img.url"
      :mains="lists[15].data.ids"
      v-if="lists.length"
    ></Mains>
    <Mains
      :titles="lists[16].data[0].img.url"
      :mains="lists[17].data.ids"
      v-if="lists.length"
    ></Mains>
    <Mains
      :titles="lists[18].data[0].img.url"
      :mains="lists[19].data.ids"
      v-if="lists.length"
    ></Mains>
    <Mains
      :titles="lists[20].data[0].img.url"
      :mains="lists[21].data.ids"
      v-if="lists.length"
    ></Mains>

    <!-- 方案定制 -->
    <div class="fangAn">
      <img
        src="https://product-ssl-qiniu.bmtrip.com/product_60d150be321bb.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!678x114.88333333333334r/crop/678x114.88333333333334/format/webp"
        alt=""
      />
    </div>

    <!-- 方案定制提交表单 -->
    <div class="fangAnSumbit">
      <div class="fangSumbit-list">
        <div class="fangSumbit-t">
          <div class="box">
            请输入你的目的地(必填)
            <van-icon name="arrow-down" />
          </div>
          <div class="box">
            预计出游时间
            <van-icon name="arrow-down" />
          </div>
          <div class="box">您的姓名</div>
          <div class="box-btn">
            <button>免费获取方案</button>
          </div>
          <ul class="box-fooder">
            <li>1v1专属定制</li>
            <li>2小时极速方案</li>
            <li>7*24H行中服务</li>
          </ul>
        </div>
      </div>
    </div>

    <Fooders></Fooders>
  </div>
</template>

<script>
import { getIndexList, getIndexHotel } from "../tools/ajax";
import Mains from "../components/Mains.vue";
import Fooders from "../components/Fooders.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  name: "HomeView",
  components: {
    Mains,
    Fooders,
  },

  data() {
    return {
      // 全部资源
      lists: [],
      // 轮播
      luoBoList: [],
      //国内酒店
      jiuList: [],
      //  新品推荐
      newRecommend: "",
      // 新品推荐轮播
      newList: [],
      // 周末躺酒店头部
      tangUrl: "",
      // 周某躺酒店详情
      tangList: [],
      show: false,
      show1: false,
    };
  },

  mounted() {},
  created() {
    // 请求首页数据
    getIndexList({ pageId: "5da95458b896310cf66ba97f" }).then((res) => {
      this.lists = res.data.data;
      // 轮播
      this.luoBoList = res.data.data[0].data;

      //国内酒店
      this.jiuList = res.data.data[1].data;
      // 新品推荐
      this.newRecommend = res.data.data[2].data[0].img.url;
      // 新品推荐轮播
      this.newList = res.data.data[3].data;
      // 周末躺酒店
      this.tangUrl = res.data.data[4].data[0].img.url;
      // 酒店详情
      getIndexHotel({ ids: res.data.data[5].data.ids }).then((res) => {
        this.tangList = res.data.data.list;
      });
    });
  },

  methods: {
    showPopup() {
      this.show1 = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 0.88rem;
  padding: 0 18px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  :deep(.van-cell) {
    padding: 0;
    display: flex;
    border-bottom: none;
    width: 5%;
  }
  .showTop {
    width: 100%;
    height: 0.66rem;
    line-height: 0.66rem;
    color: #333;
    font-size: 0.32rem;
    text-align: center;
    position: relative;
    margin-bottom: 0.2rem;
    box-shadow: inset 0 -0.02667rem 0 0 rgba(240, 240, 240, 0.5);
    span {
      display: block;
      position: absolute;
      right: 0.2rem;
      top: 0rem;
    }
  }
  ul {
    text-align: left;
    text-indent: 0.28rem;
    li {
      padding: 0.2rem 0;
      display: flex;
      justify-content: space-between;
      .showP1 {
        font-weight: bold;
        font-size: 0.24rem;
      }
      .showP2 {
        color: #898989;
        font-size: 0.2rem;
        margin-top: 0.2rem;
      }
    }
  }
  .showRight {
    margin-right: 0.3rem;
    font-size: 0.26rem;
    width: 0.58rem;
    height: 0.5rem;
    text-align: center;
    border: 0.02667rem solid #c14374;
    border-radius: 50%;
    :deep(.van-icon) {
      width: 100%;
      height: 100%;
      position: relative;
      left: -0.7rem;
      top: 0.1rem;
      color: #c04374;
    }
  }
  :deep(.van-cell::after) {
    border-bottom: none;
  }
  i {
    font-size: 0.3rem;
    cursor: pointer;
  }
  span {
    font-size: 0.3rem;
  }
  .search-icon{
    :deep(.van-icon){
      padding: .2rem;
      font-size: .4rem;
      box-sizing: border-box;
    }
  }
}

.banner {
  width: 6.8rem;
  height: 3.78rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.88rem;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  border-radius: 3px;
}
// 轮播图样式
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  width: 6.8rem;
  height: 3.78rem;
  text-align: center;
  img {
    width: 6.8rem;
    height: 3.78rem;
  }
}
:deep(.van-swipe__indicator) {
  border-radius: 0;
  width: 0.12rem;
  height: 0.04rem;
}

// 选项卡
.pictures {
  margin: 0.32rem auto;
  width: 6.8rem;
  height: 4.28rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  li {
    width: 2.14rem;
    height: 1.96rem;
    overflow: hidden;
    img {
      width: 3rem;
      display: inline-block;
      height: 100%;
      margin-left: -0.5rem;
    }
  }
}

// 新品推荐
.newWrap {
  width: 100%;
  cursor: pointer;
  height: 0.52rem;
  img {
    width: 6.78rem;
    height: 0.52rem;
    display: block;
    margin: 0 auto;
  }
}
// 新品推荐轮播
.newLunBo {
  width: 100%;
  height: 6.78rem;
  margin: 18px 0 32px;
  padding: 0 18px;
  box-sizing: border-box;
  .my-swipe .van-swipe-item {
    width: 100vw;
    height: 6.78rem;
    text-align: center;
    padding: 0 9px;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 6.78rem;
    }
  }
}
// 酒店详情
.jiuList {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  .jiuList-ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .jiuList-li {
      width: 3.3rem;
      cursor: pointer;
      height: 3.94rem;
      margin-top: 0.1rem;
      overflow: hidden;
      box-shadow: 0 0 0.04rem #ebe0e0;
    }
  }
  .top {
    width: 3.3rem;
    height: 2.04rem;
    img {
      width: 3.3rem;
      height: 2.04rem;
    }
  }
  .bottom {
    width: 3.3rem;
    height: 1.7rem;
    .bottom-a1 {
      font-size: 0.24rem;
      margin-bottom: 0.03rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
    }
    .bottom-a2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0.06rem;
      font-size: 0.2rem;
      text-align: left;
      color: #898989;
    }
    .bottom-a3 {
      width: 3.3rem;
      height: 0.75rem;
      .bottom-a3-list {
        width: 3.3rem;
        height: 0.43rem;
        // display: flex;
        li {
          float: left;
          font-size: 0.18rem;
          padding: 0.01rem 0.03rem;
          margin-right: 0.06rem;
          margin-bottom: 0.06rem;
          color: #c14374;
          border: 1px solid rgba(193, 67, 116, 0.2);
        }
      }
      .bottom-a3-price {
        font-size: 0.24rem;
        letter-spacing: 0.3px;
        color: #c04374;
        text-align: left;
      }
    }
  }
  .tops {
    position: absolute;
    top: 0.46rem;
    font-size: 0.2rem;
    padding: 0.02rem 0.06rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 0.06rem 0.06rem;
    margin-left: 0.14rem;
  }
}
#xinJiang {
  height: 0.8rem;
  img {
    height: 0.8rem;
  }
}

.fangAn {
  width: 100%;
  height: 1.14rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  img {
    width: 100%;
    height: 1.14rem;
  }
}
.fangAnSumbit {
  width: 100%;
  height: 5.45rem;
  .fangSumbit-list {
    width: 100%;
    height: 100%;
    padding: 0.32rem 0.32rem 0.64rem;
    box-sizing: border-box;
  }
}
.icon-kefu {
  cursor: pointer;
}
.fangSumbit-t {
  width: 100%;
  height: 100%;
  padding: 0.32rem;
  box-sizing: border-box;
  .box {
    width: 100%;
    height: 0.72rem;
    border-bottom: 1px solid #c9c4c4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #c9c4c4;
  }
  .box-btn {
    width: 100%;
    height: 0.9rem;
    margin-top: 0.36rem;
    background-color: #c14374;
    color: white;
    button {
      width: 100%;
      height: 0.9rem;
      border: none;
      background-color: #c14374;
    }
  }
  .box-fooder {
    width: 100%;
    height: 0.26rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #898989;
    font-size: 0.2rem;
    margin-top: 0.2rem;
  }
}
.popup-wrap {
  width: 100%;
  height: 100%;
  .ptop {
    margin-top: 0.32rem;
    font-size: 0.32rem;
    color: rgb(183, 176, 176);
  }
  ul {
    li {
      padding: 0.2rem 0.26rem;
      box-sizing: border-box;
      text-align: left;
      span {
        display: block;
        color: #898989;
        padding-top: 0.1rem;
      }
    }
  }
}
</style>
