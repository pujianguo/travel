<template>
  <div>
    <div class="detail-banner" @click="handleBannerClick">
      <img class="banner-img" alt="" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <i class="iconfont icon-img"></i>
          <span>{{gallaryImgs.length}}</span>
        </div>
      </div>
    </div>
    <animation-fade>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </animation-fade>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import AnimationFade from '@/common/animation/Fade'

export default {
  name: 'detail-banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    AnimationFade
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg'},
        {id: '002', imgUrl: 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg'},
        {id: '003', imgUrl: 'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg'},
        {id: '004', imgUrl: 'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png'},
        {id: '005', imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_350x240_af846382.jpg'},
        {id: '006', imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/34/f540a04367d06820af4dfeaf0ad40257.water.jpg_350x240_100fac79.jpg'},
        {id: '007', imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/9d/fe8109ab5df1c9c324e74284fa802e72.water.jpg_350x240_8571d9ed.jpg'},
        {id: '008', imgUrl: 'http://img1.qunarzz.com/wugc/p238/201306/16/d9090c728fed64eb93835fbb.jpg_350x240_afe6c0fa.jpg'},
        {id: '009', imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/af/af47583adca3f972.water.jpg_350x240_95007698.jpg'},
        {id: '010', imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/be/d44bb81ae3218a627a65ded451326b2c.water.jpg_350x240_9f163cbc.jpg'}
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.detail-banner{
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img{
    width: 100%;
  }
  .banner-info{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .3rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0 , .8));
    .banner-title{
      flex: 1;
      font-size: .16rem;
      padding: 0 .1rem;
    }
    .banner-number{
      height: .16rem;
      line-height: .16rem;
      margin-top: .1rem;
      padding: 0 .2rem;
      border-radius: .1rem;
      background: rgba(0, 0, 0, .8);
      font-size: .12rem;
      .iconfont{
        color: #fff;
        font-size: .12rem;
      }
    }
  }
}
</style>
