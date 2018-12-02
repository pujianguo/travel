<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id">
            <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'city-list',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  components: {
  },
  data () {
    return {
      scroll: null
    }
  },
  computed: {
    city () {
      return this.$store.state.common.city
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
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
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="less" scoped>
@import '~styles/varibles.less';
.border-topbottom{
  &:before, &:after{
    border-color: #ccc;
  }
}
.border-bottom{
   &:before{
    border-color: #ccc;
  }
}
.city-list{
  overflow: hidden;
  position: absolute;
  top: .79rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area{
    .title{
      line-height: .27rem;
      background: #eee;
      padding-left: .1rem;
      color: #666;
      font-size: .13rem;
    }
    .button-list{
      overflow: hidden;
      padding: .05rem .3rem .05rem .05rem;
      .button-wrapper{
        float: left;
        width: 33.33%;
        .button{
          margin: .05rem;
          padding: .05rem 0;
          text-align: center;
          border: .01rem solid #ccc;
          border-radius: .03rem;
        }
      }
    }
    .item-list{
      .item{
        line-height: .38rem;
        padding-left: .1rem;
      }
    }
  }
}
</style>
