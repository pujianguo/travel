<template>
  <div class="detail">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list "></detail-list>
    <div class="div">

    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'detail',
  props: {
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      list1: [
        {
          title: '成人票',
          children: [{
            title: '成人三馆联票',
            children: [{
              title: '成人三馆联票 - xx连锁店'
            }]
          }, {
            title: '成人五馆联票'
          }]
        },
        {title: '学生票'},
        {title: '儿童票'},
        {title: '特惠票'}
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      })
    }
  },
  created () {
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="less" scoped>
.detail{
  .div{
    height: 10rem; // 1000px ,为了看滚动效果
  }
}
</style>
