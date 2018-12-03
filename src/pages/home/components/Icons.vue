<template>
  <div class="header-icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-image">
            <img class="icon-image-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-text">{{item.label}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'header-icons',
  props: {
    // iconList: Array
  },
  components: {
  },
  data () {
    return {
      iconList: [
        {id: '001', label: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
        {id: '002', label: '北京必游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'},
        {id: '003', label: '一日游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'},
        {id: '004', label: '文化古迹', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'},
        {id: '005', label: '动植物园', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
        {id: '006', label: '打卡圣地', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'},
        {id: '007', label: '野生动物园', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'},
        {id: '008', label: '泡温泉', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'},
        {id: '009', label: '故宫', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'},
        {id: '010', label: '全部玩乐', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'}
      ],
      swiperOption: {
        // 分页器设置
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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

<style lang="less" scoped>
@import '~styles/varibles.less';
@import '~styles/mixins.less';
// 移动端布局中，元素的高度不是固定的，是按照宽度计算的，而宽度也是不固定的，但是高度和宽度的比例一般是相同的
// 宽度是100%，但是高度的百分比是相对父元素的高度，此时可将高度设置为0,设置padding-bottom为百分比，padding的百分比是相对元素自己的宽度的百分比。
// 对于图片一般都会给img标签加个父元素，这个父元素的高度就是这样设定的，来防止网速较慢时，图片资源没，下面的内容会自动补上来。
// 基本的设置高度方法
// .box{
//   overflow: hidden;
//   height: 0;
//   padding-bottom: 50%; // 元素高度为宽度的50%
// }
.header-icons{
  // overflow: hidden;
  // height: 0;
  // padding-bottom: 50%;
  margin-top: .05rem;
  .swiper-container{
    height: 0;
    padding-bottom: 50%;
  }
  // background: green;
  .icon{
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    // background: red;
    .icon-image{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .22rem;
      box-sizing: border-box;
      padding: .05rem;
      // background: blue;
      .icon-image-content{
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-text{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: .22rem;
      line-height: .22rem;
      color: @darkTextColor;
      text-align: center;
      .ellipsis();
    }
  }
}
</style>
