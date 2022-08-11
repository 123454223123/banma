import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入icon图标
import './assets/图标/iconfont.css';

import { 
    Swipe, 
    SwipeItem,
    Icon ,
    Popup,
    Tabbar, 
    TabbarItem ,
    List  ,
    Rate ,
    Toast ,
    PasswordInput, NumberKeyboard
} from 'vant';
const app =createApp(App)
//引入路由和vuex
app.use(store)
app.use(router)
app.use(Popup)


// 引入vant组件
app.use(Swipe);
app.use(SwipeItem);
app.use(Icon)
app.use(Tabbar);
app.use(TabbarItem);
app.use(List);
app.use(Rate);
app.use(Toast);
app.use(PasswordInput);
app.use(NumberKeyboard);

app.mount('#app')
