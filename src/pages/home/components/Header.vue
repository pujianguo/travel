<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
      输入城市/景点/游玩主题
    </div>
    <router-link :to="'/city'">
      <div class="header-right">
        {{city}}
        <i class="iconfont icon-jiantou"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    city () {
      return this.$store.state.common.city
    }
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

<style lang="less">
@import '~styles/varibles.less';
.header{
  display: flex;
  line-height: @headerHeight;
  background: @bgColor;
  color: #fff;
  .header-left{
    width: .32rem;
    float: left;
    text-align: center;
    .icon-fanhui{
      text-align: center;
      font-weight: bold;
    }
  }
  .header-input{
    flex: 1;
    height: .32rem;
    line-height: .32rem;
    margin-top: .06rem;
    margin-left: .1rem;
    padding-left: .1rem;
    background: #fff;
    border-radius: .05rem;
    color: #ccc;
  }
  .header-right{
    // width: .62rem;
    min-width: .62rem;
    padding: 0 .05rem;
    float: right;
    text-align: center;
    color: #fff;
    .icon-jiantou{
      margin-left: -.02rem;
      font-size: .12rem;
    }
  }
}
</style>
