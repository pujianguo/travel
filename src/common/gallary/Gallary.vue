<template>
  <div class="common-gallary" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="imgs.length">
        <swiper-slide v-for="slide in imgs" :key="slide.id">
          <img class="swiper-img" :src="slide.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
  },
  data () {
    return {
      swiperOption: {
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.common-gallary{
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper{
    // overflow: hidden;
    .swiper-container{
      overflow: inherit;
    }
    img{
      width: 100%;
    }
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .swiper-pagination{
      color: #fff;
      bottom: -.5rem;
    }
  }
}
</style>
