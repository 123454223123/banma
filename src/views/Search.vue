<template>
  <div>
    <div class="box">
      <div class="search">
        <div class="inputs">
          <van-icon name="search" />
          <input
            type="text"
            v-model="txt"
            @keyup.enter="changes"
            placeholder="  请输入"
          />
        </div>
        <button @click="$router.back()">取消</button>
      </div>
      <!-- 热门搜索 -->
      <div class="hotSearch">
        <p>热门搜索</p>
        <ul>
          <li v-for="item in hotList" :key="item.keyword" @click="hots(item.keyword)">
            {{ item.keyword }}
          </li>
        </ul>
      </div>
      <div class="historySearch">
        <p>搜索历史</p>
        <ul>
          <li v-for="item in arr"  @click="hots(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";

const txt = ref("");
const txtList = localStorage.getItem("list");
const arr = reactive([]);

if (txtList != "") {
  arr.push(...txtList.split(/,/));
}

const router = useRouter()
function changes() {
  arr.push(txt.value);
  localStorage.setItem("list", arr);
  
  router.push("/searchlist");
}
function hots(ss){
  console.log("ss");
    arr.push(ss);
  localStorage.setItem("list", arr);
  
  router.push("/searchlist");
}
</script>


<script>
import { getHotSearch } from "../tools/ajax";
import { useRouter } from 'vue-router';
export default {
  name: "Search",

  data() {
    return {
      hotList: [],
    };
  },

  created() {
    getHotSearch().then((res) => {
      this.hotList = res.data.list;
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.4rem;
  .search {
    padding-top: 0.2rem;
    display: flex;

    .inputs {
      width: 85%;
      height: 0.6rem;
      border: 0.02667rem solid #d9d9d9;
      input {
        border: none;
        width: 85%;
        font-size: 0.24rem;
        line-height: 0.6rem;
      }
      :deep(.van-icon) {
        font-size: 0.24rem;
        color: #666;
      }
    }
    button {
      display: block;
      border: none;
      background: #fff;
      margin-left: 0.3rem;
    }
  }
  .hotSearch {
    width: 100%;
    margin-top: 0.5rem;
    text-align: left;
    ul {
      margin-top: 0.4rem;
      li {
        width: 1rem;
        padding: 0.2rem 0.3rem;
        color: #333;
        background: #f6f6f6;
        font-size: 0.24rem;
        font-weight: 300;
      }
    }
  }
  .historySearch {
    width: 100%;
    margin-top: 0.5rem;
    text-align: left;
    ul {
      display: flex;
      margin-top: 0.4rem;
      flex-wrap: wrap;
      li {
        padding: 0.2rem 0.1rem;
        color: #333;
        background: #f6f6f6;
        font-size: 0.24rem;
        font-weight: 300;
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>