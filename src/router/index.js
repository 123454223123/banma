import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/lunbo',
    name: 'lunbo',
    component: () => import(/* webpackChunkName: "about" */ '../views/LunBoView.vue')
  },
  {
    path: '/types',
    name: 'type',
    component: () => import(/* webpackChunkName: "about" */ '../views/TypesView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
  },
  {
    path: '/mudi',
    name: 'mudi',
    component: () => import(/* webpackChunkName: "about" */ '../views/MudiView.vue')
  },
  {
    path: '/faxian',
    name: 'faxian',
    component: () => import(/* webpackChunkName: "about" */ '../views/FaxianView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
  },
  {
    path: '/twomudi',
    name: 'twomudi',
    component: () => import(/* webpackChunkName: "about" */ '../views/TwoMudi.vue')
  },
  {
    path: '/faxiandetail',
    name: 'faxiandetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/FaxianDetail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/dingzhi',
    name: 'dingzhi',
    component: () => import('../views/DingZhi.vue'),
    redirect: "/dingzhi/siren",
    children: [
      {
        path: "siren",
        component: () => import('../views/SiRen.vue')
      },
      {
        path: "qiye",
        component: () => import('../views/QiYe.vue')
      }]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/searchlist',
    name: 'searchlist',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




// 1?????????????????????
// router.beforeEach((to, from, next) => {


  // console.log("ss");
  // var token = localStorage.getItem("s1")
  // console.log(token);


    // if (token) {
    //   // ?????????????????? ????????????????????????
    //   next()
    // } else {
    //   // ??????????????? ????????????????????? 
    //   // next(`/user?to=${to.fullPath}`)
    // }







  // if (isNeedLogin) {
  //   // ???????????????????????????????????????  ??? ???????????????????????????
  //   if (token) {
  //     // ?????????????????? ????????????????????????
  //     next()
  //   } else {
  //     // ??????????????? ?????????????????????  fullPath: "/cart"
  //     next(`/user`)
  //   }
  // } else {
  //   // ???????????????
  //   next()
  // }
// })


export default router
