<template>
  <div class="box" v-if="flag">
    <div class="header">
      <span @click="$router.back()"><van-icon name="arrow-left" /></span>
      <span>{{ list.pageName }}</span>
    </div>
    <!-- 类型一 国内酒店 -->
    <div class="type-one">
      <div class="imgs">
        <!-- <img :src="list.data[0].data[0].img.url" alt="" /> -->
        <div class="banner">
          <van-swipe class="my-swipe" :autoplay="2000">
            <van-swipe-item
              v-for="item in list.data[0].data"
              :key="item"
              swipeTo="i"
            >
              <router-link :to="'/lunbo?id=' + item.url">
                <img :src="item.img.url" alt="" />
              </router-link>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <!-- 选项栏 -->
      <ul class="pictures" v-if="shows">
        <li v-for="item in list.data[1].data" :key="item.id">
          <img :src="item.img.url" alt="" />
        </li>
      </ul>
      <div class="pictures2" v-else>
        <img
          :src="list.data[1].data[0].img.url"
          alt=""
          style="width: 100%; margin-top: 0.3rem"
        />
      </div>

      <!-- 列表 -->
      <div v-if="flag2">
        <Mains
          :titles="list.data[2].data[0].img.url"
          :mains="list.data[3].data.ids"
        ></Mains>
        <Mains
          :titles="list.data[4].data[0].img.url"
          :mains="list.data[5].data.ids"
          v-if="list.data[4]"
        ></Mains>
        <Mains
          :titles="list.data[6].data[0].img.url"
          :mains="list.data[7].data.ids"
          v-if="list.data[6]"
        ></Mains>
        <Mains
          :titles="list.data[8].data[0].img.url"
          :mains="list.data[9].data.ids"
          v-if="list.data[8]"
        ></Mains>
        <Mains
          :titles="list.data[10].data[0].img.url"
          :mains="list.data[11].data.ids"
          v-if="list.data[10]"
        ></Mains>
        <Mains
          :titles="list.data[12].data[0].img.url"
          :mains="list.data[13].data.ids"
          v-if="list.data[12]"
        ></Mains>
      </div>
      <div v-else>
        <div class="pictures2">
          <img
            :src="list.data[2].data[0].img.url"
            alt=""
            style="width: 100%; margin-top: 0.3rem"
          />
        </div>

        <Mains
          :titles="list.data[3].data[0].img.url"
          :mains="list.data[4].data.ids"
        ></Mains>
        <Mains
          :titles="list.data[5].data[0].img.url"
          :mains="list.data[6].data.ids"
        ></Mains>
        <img class="imgs1" :src="list.data[7].data[0].img.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
/* 
    类型1 ：国内酒店
    类型2  明星推荐 艺游小团  自然野着 亲子玩法
    类型3   团队定制
*/
import { getIndexList } from "../tools/ajax";
import Mains from "../components/Mains.vue";

export default {
  name: "TypesView",

  data() {
    return {
      flag: false,
      list: {},
      shows: true,
      flag2: false,
    };
  },
  components: {
    Mains,
  },

  created() {
    let url = this.$route.query.url.split("activity/")[1];
    if (url == "60e69bc7b8963157a577fe4c") {
      getIndexList({ pageId: url }).then((res) => {
        this.flag = true;
        this.list = res.data;
        // console.log(this.list);
      });
    } else {
      if (
        url == "6193530eb8963157a42b47b7" ||
        url == "61403e62b8963131303059f5"
      )
        this.shows = false;
      getIndexList({ pageId: url }).then((res) => {
        this.flag = true;
        this.flag2 = true;
        this.list = res.data;
      });
    }
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
}
.imgs1 {
  width: 100%;
}
.header {
  width: 100%;
  height: 0.88rem;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  font-size: 0.3rem;
  padding: 0 0.32rem;
  background-color: #fff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  span {
    margin-right: 2.6rem;
  }
}

// 酒店详情
.imgs {
  width: 90%;
  margin: 0.88rem auto 0;
  img {
    width: 100%;
    height: 4.5rem;
  }
}
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

.banner {
  width: 6.8rem;
  height: 3.78rem;
  margin-left: auto;
  margin-right: auto;
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
</style>