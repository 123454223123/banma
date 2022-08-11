<template>
  <div class="box" v-if="ids">
    <header>目的地</header>
    <div class="wrap">
      <div class="left">
        <ul>
          <li
            v-for="(item, i) in list"
            :key="item.label"
            @click="nums = i"
            :class="{ active: i == nums }"
          >
            {{ item.label }}
            <!-- -->
          </li>
        </ul>
      </div>
      <div class="right">
        <ul class="t1">
          <li v-for="item in list[nums].children" :key="item.id">
            <router-link :to="'/twomudi?id=' + item.id+'&name='+item.label">
              <img :src="item.img" alt="" /> <span>{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
        <div class="t2">
          <div class="t2-title">热门推荐</div>
          <ul>
            <li v-for="item in list[nums].product" :key="item.id">
              <router-link :to="'/detail?url=' + item.url">
                <img :src="item.img" alt="" />
                <div class="boxss">
                  <p class="p1">{{ item.title }}</p>
                  <p class="p2">{{ item.subtitle }}</p>
                  <p class="p3">{{ item.price }} 起/套</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Fooders></Fooders>
  </div>
</template>

<script>
import Fooders from "../components/Fooders.vue";
import { getDiZhi } from "../tools/ajax";
export default {
  name: "MudiView",

  data() {
    return {
      list: [],
      nums: 0,
      ids: 0,
    };
  },
  components: {
    Fooders,
  },
  created() {
    this.getList1();
  },

  methods: {
    async getList1() {
      await getDiZhi().then((res) => {
        this.list = res.data.list;
        this.ids = this.list[this.nums].id;
      });
   
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  box-sizing: border-box;
}
.active {
  border-left: 3px solid #ee0a24;
}
.wrap {
  display: flex;
}
header {
  padding: 0.2rem 0;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
}
.left {
  width: 1.6rem;
  height: 12rem;
  margin-top: 0.75rem;
  background-color: #f7f8fa;
  box-sizing: border-box;
  overflow: auto;
  ul li {
    padding: 0.3rem 0;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center   ;
    cursor: pointer;
  }
}
.right {
  width: 6rem;
  height: 12rem;
  margin-top: 0.75rem;
  box-sizing: border-box;
  overflow: auto;
}

.t1 {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    width: 35%;
    height: 1.3rem;
    margin-bottom: 0.2rem;
    position: relative;
    img {
      width: 100%;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 86%;
      height: 77%;
      border: 0.02667rem solid rgba(255, 255, 255, 0.7);
      border-radius: 2px;
      display: flex;
      align-items: center;
      transform: translate(-50%, -50%);
      color: white;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}
.t2-title {
  width: 100%;
  text-align: left;
  padding: 0.2rem 0 0 0.5rem;
  margin-bottom: 0.4rem;
  box-sizing: border-box;
}
.t2 {
  ul {
    width: 100%;
    margin: 0 auto;
    li {
      img {
        width: 80%;
      }
    }
  }
  .boxss {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.7rem;
    text-align: left;
  }
  .p1 {
    margin-top: 0.2rem;
    margin-bottom: 0.06rem;
  }
  .p2 {
    color: #898989;
    margin: 0.1rem 0;
  }
  .p3 {
    color: #c14374;
    margin-bottom: 0.3rem;
  }
}
</style>