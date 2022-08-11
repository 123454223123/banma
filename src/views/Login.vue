<template>
  <div>
    <div class="wrap">
      <div :class="{ header: true, actives: pst }" ref="heds">
        <span @click="$router.back()"><van-icon name="arrow-left" /></span>
        <span><van-icon name="setting-o" /></span>
      </div>

      <div class="t">
        <div class="top">
          <h3>Hi,{{ phono }}</h3>
          <p>让每个家庭省心，精彩的旅行体验</p>
          <div v-if="flag">
            <van-button color="linear-gradient(to right, #FCFCFB, #C8C7C4)">
              登录/注册
            </van-button>
          </div>
          <div v-else>
            <van-button color="linear-gradient(to right, #FCFCFB, #C8C7C4)">
              用户-{{ phono }}
            </van-button>
          </div>
          <div class="bottom">
            <div>
              <p>0</p>
              <p>优惠券</p>
            </div>
            丨
            <div>
              <p>0</p>
              <p>斑马豆</p>
            </div>
            丨
            <div>
              <p>0</p>
              <p>我的收藏</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cell">
        <van-cell title="我的订单" icon="comment-o" />
        <van-cell title="用户反馈" icon="comment-o" />
        <van-cell title="设置" icon="setting-o" />
      </div>
    </div>
    <Fooders></Fooders>
  </div>
</template>

<script>
import Fooders from "../components/Fooders.vue";
import { mapState, mapMutations } from "vuex";
import { Toast, ToastOptions } from "vant";
export default {
  name: "LoginView",

  data() {
    return {
      flag: true,

    };
  },
  components: {
    Fooders,
  },
  computed: {
    ...mapState(["phono", "yzm", "token","num"]),
  },
  mounted() {
    if (this.token) {
      this.flag = false;
      Toast.setDefaultOptions({ duration: 500, overlay: true });

        if(this.num==0){
          Toast("欢迎您登录" + this.phono);
          this.$store.commit("setNum",this.num+1)
        }

    } else {
      this.flag = true;
    }
  },

  methods: {
    ...mapMutations(["setPhono", "setYzm"]), //映射仓库的同步修改方法
  },
  // 判断是否是登录状态， 未登录跳转登录页面
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(vm.token.length);
      if (vm.token) {
        next();
      } else {
        setTimeout(() => {
          vm.$router.push("/user");
        }, 800);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.cell {
  background-color: #fff;
  text-align: left;

  :deep(span) {
    margin-left: 0.3rem;
  }
}
.t {
  background-color: #fff;
  margin-top: 0.9rem;
}

.wrap {
  background-color: #fff;
  padding: 0 0.4rem;
  box-sizing: border-box;

  .top {
    margin: 0.1rem;
    background-image: linear-gradient(to right, #64625d, #221c11);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 8rem;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background-color: #fff;

    h3 {
      padding-top: 30px;

      font-weight: 500;
      font-size: 20px;
    }

    p {
      margin: 30px 0;
    }

    button {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .bottom {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    p {
      margin: 0;
    }
  }
}

.header {
  width: 90%;
  height: 0.88rem;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.3rem;
  box-sizing: border-box;
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
</style>