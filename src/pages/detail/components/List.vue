<template>
  <div class="detail-list">
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        <span>{{item.title}}</span>
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-list',
  props: {
    list: Array
  },
  components: {
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
.border-bottom{
  &:before, &:after{
    border-color: #ccc;
  }
}
.detail-list{
  .item{
    .item-title{
      line-height: .4rem;
      font-size: .16rem;
      padding: 0 .1rem;
      .item-title-icon{
        position: relative;
        left: .03rem;
        top: .03rem;
        display: inline-block;
        width: .18rem;
        height: .18rem;
        background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.225rem no-repeat;
        margin-right: .05rem;
        background-size: .2rem 1.5rem;
      }
    }
    .item-children{
      padding: 0 .1rem;
    }
  }
}
</style>
