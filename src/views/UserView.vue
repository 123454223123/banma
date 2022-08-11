<template>
  <div>
    <div :class="{ header: true, actives: pst }" ref="heds">
      <span @click="$router.push('/')"><van-icon name="cross" /></span>
    </div>
    <!-- 手机号注册页面 -->
    <div class="main" v-if="flag2">
      <div class="main-top">
        <p class="p1">手机号登录</p>
        <p class="p2">未注册手机验证后即完成注册</p>
      </div>
      <div class="main-zhuce">
        <p>手机号</p>
        <input
          type="text"
          v-model="values"
          @input="changes"
          placeholder="请输入手机号码"
        />
        <button @click="sumbits" :class="{ acts: flag }">获取验证码</button>
      </div>
      <p class="mian-p">账号密码登录</p>
    </div>

    <!-- 登录验证完成收到验证码页面 -->
    <div class="main2" v-else>
      <p class="p1">请输入验证码</p>
      <div class="main2-div">
        <div class="p2">
          已发送验证码至 <span>{{ phono }}aaaa</span>
        </div>
        <!-- <input type="text" v-model="values2" placeholder="请输入验证码" /> -->
        <van-password-input
          :value="values2"
          :focused="showKeyboard"
            :length="4"
          @focus="showKeyboard = true"
        />
        <van-number-keyboard
          v-model="values2"
          :show="showKeyboard"
          @blur="showKeyboard = false"
        />

        <button @click="submit2">注册</button>
      </div>
      <p class="p3">重新发送</p>
    </div>

    <div class="fooder">登录即代表同意 &nbsp; 斑马旅游 &nbsp; 用户协议</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { getPhoneYzm, getYzmZhu } from "../tools/ajax";
import { Toast, ToastOptions } from "vant";
export default {
  name: "UserView",

  data() {
    return {
      values: "",
      lengs: 11,
      flag: false,
      flag2: true,
      values2: "",
      showKeyboard:true,
    };
  },
  computed: {
    ...mapState(["phono", "yzm", "token"]),
  },

  mounted() {},

  methods: {
    ...mapMutations(["setPhono", "setYzm", "setToken"]), //映射仓库的同步修改方法
    sumbits() {
      var reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.values)) {
        this.setPhono(this.values);
        this.flag2 = false;
        // 请求验证码
        getPhoneYzm({ phone: this.values.toString() }).then((res) => {});
      } else {
        Toast.setDefaultOptions({ duration: 500, overlay: true });
        Toast("请输入正确的手机号码");
      }
    },
    changes() {
      // 只能输入数字
      let reg = /[^\d.]/g;
      if (reg.test(this.values)) {
        Toast("只能输入数字");
        Toast.setDefaultOptions({ duration: 500, overlay: true });
      }
      this.values = this.values.replace(reg, "");
      let arr = this.values.toString().split("");
      if (arr.length == 11) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    submit2() {
      getYzmZhu({ phone: this.values, code: this.values2 }).then((res) => {
        if (res.data.code == 0) {
          let arr = document.cookie.split(";");
          this.setToken(arr);

          this.$router.push("/login");
        }else{
               Toast("请输入正确的验证码");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 90%;
  height: 0.88rem;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4rem;
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
    font-size: 0.42rem;
  }
}
.main {
  width: 5.6rem;
  height: 6rem;
  margin: 1.2rem auto 0;
  .main-top {
    width: 100%;
    text-align: left;
    .p1 {
      font-family: PingFangSC-Medium;
      font-weight: 500;
      font-size: 0.36rem;
      color: #333;
    }
    .p2 {
      top: 0.85333rem;
      font-family: PingFangSC-Regular;
      font-size: 0.22rem;
      color: #898989;
      margin-top: 0.2rem;
    }
  }
  .main-zhuce {
    margin: 0.5rem 0;
    text-align: left;
    input {
      margin-top: 0.3rem;
      width: 5.6rem;
      height: 0.84rem;
      border: none;
      border-bottom: 1px solid #e1e1e1;
      font-size: 0.28rem;
      margin-bottom: 0.3rem;
    }
    .acts {
      background-color: #c04374;
    }
    button {
      width: 5.6rem;
      height: 0.84rem;
      border: none;
      background: #e2a0b9;
      color: #fff;
    }
  }

  .mian-p {
    font-size: 0.26rem;
    letter-spacing: 0.008rem;
    text-align: left;
    color: #333;
    text-decoration: underline;
  }
}
.fooder {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.22rem;
}

.main2 {
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  margin-top: 1.5rem;
  text-align: left;
  .p1 {
    font-size: 0.34rem;
  }
  .main2-div {
    margin-top: 0.4rem;
    overflow: hidden;
    .p2 {
      span {
        color: #898989;
      }
    }
    input {
      width: 4rem;
      height: 0.6rem;
      margin-top: 0.3rem;
      border: #c04374 1px solid;
    }
    button {
      width: 1rem;
      height: 0.5rem;
      border: none;
      margin-left: 0.3rem;
    }
  }
  .p3 {
    margin-top: 0.4rem;
    text-decoration: underline;
    font-weight: bold;
  }
}
</style>