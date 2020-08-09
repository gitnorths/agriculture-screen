<template>
  <div class="main">
    <HomeHeader />
    <div class="main-body">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader'

export default {
  name: 'Main',
  components: {
    HomeHeader,
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #051628;

  &-body {
    width: 100%;
    height: calc(100% - 86px);
  }
}
</style>
