<template>
  <div>
    <div :class="{ header: true, actives: pst }" ref="heds">
      <span @click="$router.back()"><van-icon name="arrow-left" /></span>
      <p>斑马发现</p>
      <span>
        <router-link to="/search">
          <van-icon name="search" />
        </router-link>
      </span>
    </div>
    <ul class="navs">
      <li
        v-for="item in types"
        :key="item.type"
        @click="changes(item.type)"
        :class="{ active: num == item.type }"
      >
        {{ item.hz }}
      </li>
    </ul>

    <van-list
      v-model:loading="loading"
      class="lists"
      @load="onLoad"
      offset="500"
    >
      <div v-for="item in list" :key="item.id" class="lists-li">
        <router-link :to="'/faxiandetail?id=' + item.id">
          <img :src="item.head_pic" alt="" />
          <p class="p1">{{ item.title }}</p>
          <p class="p2">{{ item.subtitle }}</p>
          <span>{{ item.sort_name }}</span>
        </router-link>
      </div>
    </van-list>

    <Fooders></Fooders>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { getFaXian } from "../tools/ajax";
import Fooders from "../components/Fooders.vue";
const loading = ref(false);
const list = reactive([]);
const num = ref(0);
const page = ref(0);
const types = [
  { hz: "全部", type: 0 },
  { hz: "长知识", type: 5 },
  { hz: "看世界 ", type: 6 },
  { hz: "达人说", type: 7 },
];

function onLoad() {
  loading.value = true;
  page.value++;
  getFaXian({
    sort_id: num.value,
    page: page.value,
    size: 10,
  }).then((res) => {
    list.push(...res.data.list);

    loading.value = false;
  });
}
function changes(ts) {
  page.value = 0;
  num.value = ts;
  list.length = 0;
  getFaXian({
    sort_id: num.value,
    page: page.value,
    size: 10,
  }).then((res) => {
    list.push(...res.data.list);
    loading.value = false;
  });
}
</script>



<style lang="scss" scoped>
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
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 999;

  span {
    width: 0.64rem;
    height: 0.64rem;
    border-radius: 50%;
    color: #666;
    text-align: center;
    line-height: 0.64rem;
  }
}
.navs {
  width: 100%;
  height: 0.88rem;
  padding: 0 0.8rem;
  box-sizing: border-box;
  // margin-top: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  top: 0.88rem;
  li {
    cursor: pointer;
  }
  .active {
    color: rgb(193, 67, 116);
    border-bottom: 1px solid rgb(193, 67, 116);
  }
}
.lists {
  width: 100%;
  margin-top: 1.9rem;
  box-sizing: border-box;
  padding: 0 0.5rem;
  .lists-li {
    width: 100%;
    height: 5.2rem;
    margin-bottom: 0.4rem;
    position: relative;

    img {
      width: 100%;
      height: 3.8rem;
      display: block;
    }
    .p1 {
      padding: 0.1rem 0 0.1rem;
      font-size: 0.24rem;
      text-align: center;
    }
    .p2 {
      color: #333333;
      font-size: 0.2rem;
      text-align: center;
    }
    span {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      padding: 0.1rem 0.2rem;
      color: white;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 0.05333rem;
    }
  }
}
</style>