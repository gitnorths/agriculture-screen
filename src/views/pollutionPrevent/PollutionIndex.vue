<template>
  <div class="polluteIndex">
    <div class="polluteIndex-header">
      <div class="header-left">
        <div class="back" @click="goBack"></div>
        <div class="name">实施效果</div>
      </div>
      <div class="header-right">
        <div class="right-top">
          <div
            :class="btnIndex === 1 ? 'btn1 btn-act' : 'btn1'"
            @click="setBtnIndex(1)"
          >
            农田面源污染防治
          </div>
          <div
            :class="btnIndex === 2 ? 'btn2 btn-act' : 'btn2'"
            @click="setBtnIndex(2)"
          >
            养殖业污染减排
          </div>
          <div
            :class="btnIndex === 3 ? 'btn3 btn-act' : 'btn3'"
            @click="setBtnIndex(3)"
          >
            地表径流污水净化利用
          </div>
          <div
            :class="btnIndex === 4 ? 'btn4 btn-act' : 'btn4'"
            @click="setBtnIndex(4)"
          >
            技术集成示范及环境监测
          </div>
          <div
            :class="btnIndex === 5 ? 'btn5 btn-act' : 'btn5'"
            @click="setBtnIndex(5)"
          >
            示范区配套建设
          </div>
          <div
            :class="btnIndex === 6 ? 'btn6 btn-act' : 'btn6'"
            @click="setBtnIndex(6)"
          >
            技术模式及标准规范
          </div>
          <div
            :class="btnIndex === 7 ? 'btn7 btn-act' : 'btn7'"
            @click="setBtnIndex(7)"
          >
            水质改善效果
          </div>
        </div>
        <div class="right-bot">
          <div
            :class="
              projectIndex === 'fertilizerre'
                ? 'sub-btn1 sub-btn-act'
                : 'sub-btn1'
            "
            @click="setProject('fertilizerre')"
          >
            化肥减施工程
          </div>
          <div
            :class="
              projectIndex === 'fieldsaving'
                ? 'sub-btn2 sub-btn-act'
                : 'sub-btn2'
            "
            @click="setProject('fieldsaving')"
          >
            农田节水工程
          </div>
          <div
            :class="
              projectIndex === 'reducedrug'
                ? 'sub-btn3 sub-btn-act'
                : 'sub-btn3'
            "
            @click="setProject('reducedrug')"
          >
            农田减药工程
          </div>
          <div
            :class="
              projectIndex === 'reuse' ? 'sub-btn4 sub-btn-act' : 'sub-btn4'
            "
            @click="setProject('reuse')"
          >
            农业废弃物利用工程
          </div>
          <div
            :class="
              projectIndex === 'purify' ? 'sub-btn5 sub-btn-act' : 'sub-btn5'
            "
            @click="setProject('purify')"
          >
            农田排水氮磷拦截净化工程
          </div>
        </div>
      </div>
    </div>
    <div class="polluteIndex-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnIndex: 1,
      projectIndex: 1,
    }
  },
  methods: {
    goBack() {
      // this.$router.push('/main/implement')
      window.location.href = '../effect.html'
    },
    setBtnIndex(index) {
      this.btnIndex = index
      switch (index) {
        case 2:
          window.location.href = '../effect/yzywrjp.html'
          break
      }
    },
    setProject(index) {
      this.projectIndex = index
      this.$router.push(`/pollutionpre/${index}`)
    },
  },
}
</script>

<style lang="less" scoped>
.polluteIndex {
  height: 100%;
  width: 100%;
  background-color: #051628;

  &-header {
    height: 146px;
    width: 100%;
    background: url('../../assets/pollutionPrevent/header.png') no-repeat;
    background-size: 100% 100%;
    display: flex;

    .header-left {
      width: 384px;
      height: 100%;
      display: flex;
      padding: 20px 56px 50px 40px;
      justify-content: space-between;
      box-sizing: border-box;
      align-items: center;
      .back {
        cursor: pointer;
        width: 85px;
        height: 32px;
        background: url('../../assets/pollutionPrevent/back.png') no-repeat;
        background-size: 100% 100%;
      }

      .name {
        width: 168px;
        height: 56px;
        font-size: 42px;
        font-family: 'PingFang-SC-Bold';
        color: rgba(112, 226, 230, 1);
      }
    }
    .header-right {
      width: calc(100% - 384px);
      height: 100%;

      .right-top {
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .btn(@width:200px) {
          cursor: pointer;
          height: 65px;
          line-height: 65px;
          text-align: center;
          width: @width;
          font-size: 20px;
          color: rgba(126, 250, 252, 1);
        }
        .btn-act {
          background: url('../../assets/pollutionPrevent/btn-act.png') no-repeat;
          background-size: 100% 100%;
        }

        .btn1 {
          .btn();
        }
        .btn2 {
          .btn();
        }
        .btn3 {
          .btn(@width:250px);
        }
        .btn4 {
          .btn(@width:250px);
        }
        .btn5 {
          .btn();
        }
        .btn6 {
          .btn();
        }
        .btn7 {
          .btn();
        }
      }

      .right-bot {
        height: calc(100% - 80px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 150px 0 50px;

        .sub-btn(@width:197px) {
          background: url('../../assets/pollutionPrevent/sub-btn.png') no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
          height: 44px;
          line-height: 44px;
          text-align: center;
          width: @width;
          font-size: 20px;
          color: #5e94a5;
        }

        .sub-btn-act {
          background: url('../../assets/pollutionPrevent/sub-btn-act.png')
            no-repeat !important;
          background-size: 100% 100% !important;
          color: #ffffff !important;
        }
        .sub-btn1 {
          .sub-btn();
        }
        .sub-btn2 {
          .sub-btn();
        }
        .sub-btn3 {
          .sub-btn();
        }
        .sub-btn4 {
          .sub-btn(@width:260px);
        }
        .sub-btn5 {
          .sub-btn(@width:317px);
        }
      }
    }
  }

  &-body {
    width: 100%;
    height: calc(100% - 146px);
    background: url('../../assets/pollutionPrevent/bg-bot.png') center bottom
      no-repeat;
  }
}
</style>
