<template>
  <div>
    <div :class="{ header: true, actives: pst }" ref="heds">
      <span @click="$router.back()"><van-icon name="arrow-left" /></span>
      <p>{{ $route.query.name }}</p>
      <span> <router-link to="/search">
          <van-icon name="search" />
        </router-link></span>
    </div>
    <ul class="types1">
      <li
        v-for="(item, i) in typeList"
        :key="item.type"
        @click="changes(i, item.type)"
        :class="{ active: num == i }"
      >
        {{ item.title }}
      </li>
    </ul>
    <!-- 酒店详情 -->
    <div class="jiuList">
      <ul class="jiuList-ul" v-if="list.length">
        <li class="jiuList-li" v-for="item in list" :key="item.id">
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
            <div class="tops">{{item.product_type_name}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDiZhiDetail, getDiZhiTypes, getDiZhiXuan } from "../tools/ajax";
// import Mains from "../components/Mains.vue";
export default {
  name: "TwoMudi",

  data() {
    return {
      list: [],
      typeList: [],
      num: 0,
    };
  },
  // components: {
  //   Mains,
  // },

  created() {
    this.getList();
  },

  methods: {
    async getList() {
      await getDiZhiDetail({ district_id: [this.$route.query.id] }).then(
        (res) => {
          this.list = res.data.list;

        }
      );
      await getDiZhiTypes({ district_id: this.$route.query.id }).then((res) => {
        this.typeList = res.data.list;
      });
    },
    changes(i, ss) {
      this.num = i;
      getDiZhiDetail({
        type: ss.toString(),
        district_id: [this.$route.query.id],
      }).then((res) => {
        this.list = res.data.list;
      });
      // this.list = [];
      // this.list.push(...arr);
      // console.log(this.list);
    },
  },
};
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
.types1 {
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.88rem;
  padding: 0.2rem 0.6rem;
  color: #898989;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    cursor: pointer;
  }
  .active {
    border-bottom: 0.03rem solid #c04374;
  }
}

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
      width: 100%;
      position: relative;
      cursor: pointer;
      height: 6.2rem;
      margin-top: 0.1rem;
      overflow: hidden;
      box-shadow: 0 0 0.04rem #ebe0e0;
    }
  }
  .top {
    width: 100%;
    height: 2.04rem;
    img {
        width: 100%;
      height: 4.04rem;
    }
  }
  .bottom {
    width: 100%;
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
    top: 0.1rem;
    font-size: 0.2rem;
    padding: 0.02rem 0.06rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 0.06rem 0.06rem;
    margin-left: 0.14rem;
  }
}
</style>





