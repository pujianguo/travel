<template>
  <div class="home-weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.src" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home-weekend',
  props: {
  },
  components: {
  },
  data () {
    return {
      weekendList: [
        {id: '001', title: '京城人的周末撒欢地', src: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg', desc: '在帝都过周末，不仅仅是城中游！'},
        {id: '002', title: '京城欢乐亲子游', src: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg', desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'},
        {id: '003', title: '京城有好泉', src: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg', desc: '细数北京温泉，温暖你的冬天'},
        {id: '004', title: '北京必游TOP10', src: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg', desc: '来北京必去的景点非这些地方莫属'},
        {id: '005', title: '寻找北京的皇城范儿', src: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg', desc: '数百年的宫廷庙宇，至今依旧威严霸气'}
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
.home-weekend{
  .weekend-title{
    margin-top: .1rem;
    line-height: .4rem;
    background: #eee;
    text-indent: .1rem;
  }
  .item{
    .item-img-wrapper{
      overflow: hidden;
      height: 0;
      padding-bottom: 35%;
      .item-img{
        width: 100%;
      }
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
    }
  }
}
</style>
