<template>
  <div>
    <!-- 周末躺酒店 -->
    <div class="newWrap" id="xinJiang" v-if="titles">
      <img :src="titles" alt="" />
    </div>
    <!-- 酒店详情 -->
    <div class="jiuList">
      <ul class="jiuList-ul" v-if="getList.length">
        <li class="jiuList-li" v-for="item in getList" :key="item.id">
          <router-link :to="'/detail?url='+item.url">
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
  </div>
</template>

<script>
import { getIndexHotel } from "../tools/ajax";
export default {
  name: "Mains",

  data() {
    return {
      getList: [],
    };
  },
  props: ["titles", "mains"],
  created() {
    setTimeout(() => {
      if (!this.titles) {
        this.mains.list.forEach((item) => {
          this.getList.push(item);
        });
      } else {
        getIndexHotel({ ids: this.mains }).then((res) => {
          this.getList = res.data.data.list;
        });
      }
    }, 1000);
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
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

  }
      .jiuList-li {
      width: 3.3rem;
      cursor: pointer;
      height: 3.94rem;
      margin-top: 0.1rem;
      overflow: hidden;
      box-shadow: 0 0 0.04rem #ebe0e0;
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
</style>