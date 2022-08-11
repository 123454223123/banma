<template>
  <div id="app">
    <nav>
      <router-link to="/"></router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
    
    <router-view></router-view>

  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 13.33333vw;
  scroll-behavior: smooth;
}
// body {
//   // font-size: 0.32rem;
// }
body {
  font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB",
    "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
  margin: 0;
  color: #333;
  font-size: 12px;
  scroll-behavior: smooth;
}
a{
      color: #646566;
}
#app {
  // overflow-x: hidden;
  text-align: center;
  color: #333;
  width: 100%;
  height: 100%;
}

</style>
