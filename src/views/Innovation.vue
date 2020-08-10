<template>
  <div class="innovation">
    <div class="person">
      <img src="../assets/homePage/innovation/img_rw.png" alt="" />
    </div>
    <div class="chassis">
      <img src="../assets/homePage/innovation/chassis.png" alt="" />
    </div>
    <div class="cube1">
      <img src="../assets/homePage/innovation/cube1.png" alt="" />
    </div>
    <div class="cube2">
      <img src="../assets/homePage/innovation/cube2.png" alt="" />
    </div>
    <div class="cube3">
      <img src="../assets/homePage/innovation/cube3.png" alt="" />
    </div>
    <div class="cube4">
      <img src="../assets/homePage/innovation/cube4.png" alt="" />
    </div>
    <div class="cube5">
      <img src="../assets/homePage/innovation/cube5.png" alt="" />
    </div>
    <div class="cube6">
      <img src="../assets/homePage/innovation/cube6.png" alt="" />
    </div>
    <div class="cube7">
      <img src="../assets/homePage/innovation/cube7.png" alt="" />
    </div>
    <div class="tip1">
      项目建设进度上墙
    </div>
    <div class="tip2">
      工程建设例会制
    </div>
    <div class="tip3">
      实行基层志愿者督查制
    </div>
    <div class="tip4">
      专家论证制度
    </div>
    <div class="tip5">
      代表委员查看问询制
    </div>
    <div class="tip6">
      面源治理技术高峰论坛制
    </div>
    <div class="tip7">
      绩效考核制
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.innovation {
  width: 100%;
  height: 100%;
  background-image: url('../assets/homePage/innovation/bg.jpg');
  position: relative;

  .person {
    position: absolute;
    top: 134px;
    left: 858px;
    z-index: 1;
  }
  .chassis {
    position: absolute;
    top: 369px;
    left: 738px;
  }
  .cube1 {
    position: absolute;
    top: 304px;
    left: 289px;
  }
  .cube2 {
    position: absolute;
    top: 380px;
    left: 415px;
  }
  .cube3 {
    position: absolute;
    top: 517px;
    left: 563px;
  }
  .cube4 {
    position: absolute;
    top: 557px;
    left: 834px;
  }
  .cube5 {
    position: absolute;
    top: 517px;
    left: 1130px;
  }
  .cube6 {
    position: absolute;
    top: 380px;
    left: 1303px;
  }
  .cube7 {
    position: absolute;
    top: 304px;
    left: 1474px;
  }

  .tip(@top: 304px, @left: 1474px) {
    position: absolute;
    top: @top;
    left: @left;
    width: 273px;
    height: 55px;
    background: rgba(8, 59, 199, 0.2);
    font-size: 24px;
    font-family: 'PingFangSC';
    font-weight: 400;
    color: rgba(229, 252, 255, 1);
    line-height: 55px;
    text-align: center;
    border: 2px dashed #7efafc;
  }
  .tip1 {
    .tip(@top: 425px, @left: 60px);
  }
  .tip2 {
    .tip(@top: 549px, @left: 239px);
  }
  .tip3 {
    .tip(@top: 729px, @left: 459px);
  }
  .tip4 {
    .tip(@top: 830px, @left: 811px);
  }
  .tip5 {
    .tip(@top: 729px, @left: 1130px);
  }
  .tip6 {
    .tip(@top: 549px, @left: 1378px);
  }
  .tip7 {
    .tip(@top: 425px, @left: 1538px);
  }
}
</style>
