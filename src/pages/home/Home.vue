<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    test
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default {
  name: 'home',
  props: {
  },
  components: {
    HomeHeader,
    HomeSwiper
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
.home{
}
</style>
