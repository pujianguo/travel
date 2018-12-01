<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{city}}
      <i class="iconfont icon-jiantou"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String,
      required: true
    }
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

<style lang="less">
@import '~styles/varibles.less';
.header{
  display: flex;
  line-height: .43rem;
  background: @bgColor;
  color: #fff;
  .header-left{
    width: .32rem;
    float: left;
    text-align: center;
    .icon-fanhui{
      text-align: center;
      font-size: .2rem;
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
    width: .62rem;
    float: right;
    text-align: center;
    .icon-jiantou{
      margin-left: -.02rem;
      font-size: .12rem;
    }
  }
}
</style>
