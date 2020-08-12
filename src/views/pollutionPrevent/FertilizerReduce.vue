<template>
  <div class="fertilizerre">
    <div class="fertilizerre-header">
      <div
        :class="projectName === 'fertilizepro' ? 'btn-act' : 'btn'"
        @click="checkPro('fertilizepro')"
      >
        有机无机配施工程
      </div>
      <div
        :class="projectName === 'returnfield' ? 'btn-act' : 'btn'"
        @click="checkPro('returnfield')"
      >
        秸秆还田工程
      </div>
      <div
        :class="projectName === 'phoreduce' ? 'btn-act' : 'btn'"
        @click="checkPro('phoreduce')"
      >
        磷肥减量工程
      </div>
      <div
        :class="projectName === 'replacepro' ? 'btn-act' : 'btn'"
        @click="checkPro('replacepro')"
      >
        新型缓控释肥替代工程
      </div>
      <div
        :class="projectName === 'sysadjust' ? 'btn-act' : 'btn'"
        @click="checkPro('sysadjust')"
      >
        轮作制度调整工程
      </div>
    </div>

    <div class="fertilizerre-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: 'fertilizepro',
    }
  },
  methods: {
    checkPro(project) {
      this.projectName = project
    },
  },
}
</script>

<style lang="less" scoped>
.fertilizerre {
  width: 100%;
  height: 100%;

  &-header {
    height: 126px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 100px;

    .btnpub() {
      cursor: pointer;
      width: 300px;
      height: 66px;
      line-height: 66px;
      border-radius: 4px;
      text-align: center;
    }

    .btn {
      .btnpub();
      background-image: url('../../assets/pollutionPrevent/btn-bg.png');
      background-size: 100% 100%;
      opacity: 0.6;
      color: #fff;
      font-size: 24px;
    }

    .btn-act {
      .btnpub();
      background: linear-gradient(
        12deg,
        rgba(110, 255, 204, 1) 0%,
        rgba(126, 250, 252, 1) 100%
      );
      opacity: 1;
      font-size: 24px;
    }
  }
}
</style>
