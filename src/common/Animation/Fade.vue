<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'animation-fade'
}
</script>

<style lang="less" scoped>
.v-enter, .v-leave-to{
  opacity: 0;
}
.v-enter-active, .v-leave-active{
  transition: opacity .5s;
}
</style>
