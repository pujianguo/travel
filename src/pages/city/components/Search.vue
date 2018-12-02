<template>
  <div class="city-search">
    <div class="search">
      <input class="search-input" type="text" v-model="keyword" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'city-search',
  props: {
    cities: Object
  },
  components: {
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(city => {
            if (city.spell.includes(this.keyword) || city.name.includes(this.keyword)) {
              result.push(city)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  created () {
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="less" scoped>
@import '~styles/varibles.less';
.border-bottom{
   &:before{
    border-color: #ccc;
  }
}
.city-search{
  .search{
    height: .36rem;
    padding: 0 .05rem;
    background: @bgColor;
    .search-input{
      box-sizing: border-box;
      width: 100%;
      height: .31rem;
      line-height: .31rem;
      padding: 0 .05rem;
      text-align: center;
      border-radius: .03rem;
      color: #666;
    }
  }
  .search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: .79rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    .search-item{
      line-height: .31rem;
      padding-left: .1rem;
      color: #666;
      background: #fff;
    }
  }
}
</style>
