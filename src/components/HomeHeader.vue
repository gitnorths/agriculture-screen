<template>
  <div class="home-header">
    <div
      :class="tags === 'home' ? 'active-left' : 'btn-left'"
      @click="gotoPage('home')"
    >
      首页
    </div>
    <div
      :class="tags === 'build' ? 'active-left' : 'btn-left'"
      @click="gotoPage('build')"
    >
      建设内容
    </div>
    <div
      :class="tags === 'implement' ? 'active-left' : 'btn-left'"
      @click="gotoPage('implement')"
    >
      实施效果
    </div>
    <div class="title"></div>
    <div
      :class="tags === 'project' ? 'active-right' : 'btn-right'"
      @click="gotoPage('project')"
    >
      项目管理
    </div>
    <div
      :class="tags === 'innovation' ? 'active-right' : 'btn-right'"
      @click="gotoPage('innovation')"
    >
      创新机制
    </div>
    <div
      :class="tags === 'system' ? 'active-right' : 'btn-right'"
      @click="gotoPage('system')"
    >
      系统设置
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      tags: 'home',
    }
  },
  methods: {
    gotoPage(tag) {
      this.tags = tag
      this.$router.push(`/main/${tag}`)
    },
  },
  mounted() {
    this.tags = this.$router.history.current.name
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home-header {
  width: 100%;
  height: 86px;
  // border-bottom: 2px solid;
  // border-image: linear-gradient(
  //     90deg,
  //     rgba(0, 216, 247, 0) 0%,
  //     #0e5867 50%,
  //     rgba(0, 216, 247, 0) 100%
  //   )
  //   2 2 2 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/homePage/header/title-mid.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .btn(@background-image: url('../assets/homePage/header/btn-bg.png')) {
    position: relative;
    width: 173px;
    height: 50px;
    color: #7efafc;
    font-size: 22px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    background-image: @background-image;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .btn-left {
    .btn();
  }

  .active-left {
    .btn(@background-image: url('../assets/homePage/header/btn-act.png'));
  }

  .active-right {
    .btn(@background-image: url('../assets/homePage/header/btn-right-act.png'));
  }

  .title {
    width: 660px;
    font-size: 36px;
    font-weight: bold;
    color: #7efafc;
  }

  .btn-right {
    .btn(@background-image: url('../assets/homePage/header/btn-right-bg.png'));
  }
}
</style>
