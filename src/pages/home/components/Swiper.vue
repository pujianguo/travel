<template>
  <div class="swiper-box">
    <swiper :options="swiperOption" v-if="swiperSlides.length">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
        <img class="swiper-img" :src="slide.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  components: {
  },
  data () {
    return {
      swiperOption: {
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        notNextTick: true,
        // 循环
        loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        autoplay: true,
        // autoplay: {
        //     delay: 3000,
        //     stopOnLastSlide: false,
        //     disableOnInteraction: true,
        // },
        // 切换效果
        // effect: 'fade',
        // 滑动速度
        speed: 800,
        // 滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex) // 切换结束时，告诉我现在是第几个slide
          }
        }
      },
      swiperSlides: [
        {id: '001', imgUrl: '/static/images/header-swiper-1.jpg'},
        {id: '002', imgUrl: '/static/images/header-swiper-2.jpg'}
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    callback () {
      console.log('aaa')
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less">
// .swiper{
//   width: 100%;
//   height: 100px;
//   .swiper-container{
//     height: 100%;
//   }
// }

.swiper-box{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.66%;
  background: #eee;
 .swiper-pagination-bullet-active{
    background: #fff;
  }
  .swiper-img{
    width: 100%;
  }

}

</style>
