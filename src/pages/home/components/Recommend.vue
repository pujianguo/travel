<template>
  <div class="home-recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home-recommend',
  props: {
    list: Array
  },
  components: {
  },
  data () {
    return {
      recommendList: [
        {id: '001', title: '龙脉温泉', desc: '龙脉温泉简介简介简介', imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/53/53f7752ece875d00a3.img.jpg_200x200_5c006913.jpg', alt: '龙脉温泉'},
        {id: '002', title: '故宫', desc: '故宫简介简介简介', imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', alt: '故宫'},
        {id: '003', title: '北京乐多港奇幻乐园', desc: '北京乐多港奇幻乐园简介简介简介', imgUrl: 'http://img1.qunarzz.com/sight/p0/1608/5c/5c30160572493ba9a3.water.jpg_200x200_8ded77a0.jpg', alt: '北京乐多港奇幻乐园'},
        {id: '004', title: '远去的恐龙', desc: '远去的恐龙简介简介简介', imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg', alt: '远去的恐龙'},
        {id: '005', title: '北京野生动物园', desc: '北京野生动物园简介简介简介', imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg', alt: '北京野生动物园'}
      ]
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
@import '~styles/mixins.less';
.border-bottom{
  &:before, &:after{
    border-color: #ccc;
  }
}
.home-recommend{
  .recommend-title{
    margin-top: .1rem;
    line-height: .4rem;
    background: #eee;
    text-indent: .1rem;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: .95rem;
    .item-img{
      width: .85rem;
      height: .85rem;
      padding: .05rem;
    }
    .item-info{
      flex: 1;
      padding: .05rem;
      min-width: 0;
      .item-title{
        line-height: .27rem;
        font-size: .16rem;
        .ellipsis();
      }
      .item-desc{
        line-height: .2rem;
        color: #ccc;
        .ellipsis();
      }
      .item-button{
        line-height: .22rem;
        margin-top: .08rem;
        background: #ff9300;
        padding: 0 .1rem;
        border-radius: .03rem;
        color: #fff;
      }
    }
  }
}
</style>
