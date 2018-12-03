<template>
  <div class="detail-header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <i class="iconfont icon-fanhui"></i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-header',
  props: {
  },
  components: {
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: 0
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // 实现渐隐渐现效果
    handleScroll () {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  created () {
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  // activated () { 在keep-alive中将detail组件取消，这两个钩子无用了
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // deactivated () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>

<style lang="less" scoped>
@import '~styles/varibles.less';

.detail-header{
  .header-abs{
    position: absolute;
    left: .1rem;
    top: .1rem;
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    border-radius: .2rem;
    background: rgba(0, 0, 0, .8);
    i{
      color: #fff;
      font-size: .2rem;
    }
  }
  .header-fixed{
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: @headerHeight;
    line-height: @headerHeight;
    text-align: center;
    color: #fff;
    background: @bgColor;
    font-size: .16rem;
    i{
      position: absolute;
      top: 0;
      left: 0;
      width: .32rem;
      text-align: center;
      font-size: .2rem;
      color: #fff;
    }
  }
}
</style>
