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
      城市
      <i class="iconfont icon-jiantou"></i>
    </div>
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
  line-height: .86rem;
  background: @bgColor;
  color: #fff;
  .header-left{
    width: .64rem;
    float: left;
    .icon-fanhui{
      text-align: center;
      font-size: .4rem;
    }
  }
  .header-input{
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
  }
  .header-right{
    width: 1.24rem;
    float: right;
    text-align: center;
    .icon-jiantou{
      margin-left: -.04rem;
      font-size: .24rem;
    }
  }
}
</style>
