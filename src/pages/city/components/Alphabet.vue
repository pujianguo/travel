<template>
  <div class="city-alphabet">
    <ul class="list">
      <!-- 阻止通过事件修饰符prevent阻止touchstart的默认行为，否则会拖动页面 -->
      <li class="item" v-for="item in letters" :key="item" :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      > {{item}} </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'city-alphabet',
  props: {
    cities: Object
  },
  components: {
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () { // 有数据时计算一次就可以，不必每次用到的时候都计算
    // A距离顶部的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  watch: {
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    // throttle实现节流
    handleTouchMove: _.throttle(function (e) {
      console.log('hello')
      const touchY = e.touches[0].clientY - 79 // 获取手指距离顶部的高度, 79为header高度
      const index = Math.floor((touchY - this.startY) / 20) // 每个字母高度为20，获取字母的index
      if (index >= 0 && index < this.letters.length) {
        this.$emit('change', this.letters[index])
      }
    }, 16),
    // setTimeout 实现节流
    handleTouchMove1 (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 减少执行频率，提升页面性能
        this.timer = setTimeout(() => {
          console.log('hello')
          const touchY = e.touches[0].clientY - 79 // 获取手指距离顶部的高度, 79为header高度
          const index = Math.floor((touchY - this.startY) / 20) // 每个字母高度为20，获取字母的index
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@import '~styles/varibles.less';
.city-alphabet{
  .list{
    position: absolute;
    top: .79rem;
    right: 0;
    bottom: 0;
    width: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .item{
      line-height: .2rem;
      text-align: center;
      color: @bgColor;
    }
  }
}
</style>
