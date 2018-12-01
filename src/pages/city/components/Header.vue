<template>
  <div class="city-header">
    城市选择
    <router-link to="/">
      <div class="header-back">
        <i class="iconfont icon-fanhui"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'city-header',
  props: {
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@import '~styles/varibles.less';
.city-header{
  position: relative;
  overflow: hidden;
  height: @headerHeight;
  line-height: @headerHeight;
  text-align: center;
  color: #fff;
  background: @bgColor;
  font-size: .16rem;
  .header-back{
    position: absolute;
    top: 0;
    left: 0;
    width: .32rem;
    text-align: center;
    color: #fff;
    i{
      font-weight: bold;
    }
  }
}
</style>
