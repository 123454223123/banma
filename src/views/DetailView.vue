<template>
  <div v-if="flag">
    <GtWraps :lists="list"></GtWraps>
  </div>
</template>

<script>
import GtWraps from "../components/GtWraps.vue";
import { getLunBoDetail } from "../tools/ajax";
export default {
  name: "DetailView",

  data() {
    return {
        list:[],
        flag:false
    };
  },
  components: {
    GtWraps,
  },
  created() {
    getLunBoDetail({
      product_id: this.$route.query.url.split("id=")[1],
      combo_key: "10000:131;20000:6406",
    }).then((res) => {
      this.list = res.data;
      this.flag = true
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>