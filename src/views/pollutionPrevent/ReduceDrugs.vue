<template>
  <div class="reducedrug">
    <div class="reducedrug-left">
      <div class="btns">
        <div
          :class="projectIndex === 'physical' ? 'btn-act' : 'btn'"
          @click="setProject('physical')"
        >
          物理防治
        </div>
        <div
          :class="projectIndex === 'chemistry' ? 'btn-act' : 'btn'"
          @click="setProject('chemistry')"
        >
          化学防治
        </div>
        <div
          :class="projectIndex === 'biological' ? 'btn-act' : 'btn'"
          @click="setProject('biological')"
        >
          生物防治
        </div>
      </div>
      <div class="swipercom">
        <Slider :projectIndex="projectIndex" />
      </div>
    </div>
    <div class="reducedrug-right">
      <div class="tecnog">
        <div class="tecnog-header">
          <img src="../../assets/pollutionPrevent/dot1.png" alt="" />
          <span>{{ titles }}</span>
          <img src="../../assets/pollutionPrevent/dot2.png" alt="" />
        </div>
        <div class="tecnog-body">
          {{ desc }}
        </div>
      </div>
      <div class="chart">
        <div class="chart-header">
          <img src="../../assets/pollutionPrevent/dot1.png" alt="" />
          <span>项目实施效果</span>
          <img src="../../assets/pollutionPrevent/dot2.png" alt="" />
        </div>
        <div class="chart-body">
          <BarChart v-if="projectIndex === 'physical'" />
          <Chemistry v-if="projectIndex === 'chemistry'" />
          <PieChart v-if="projectIndex === 'biological'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/reduceDrugs/BarChart'
import PieChart from '@/components/reduceDrugs/PieChart'
import Chemistry from '@/components/reduceDrugs/Chemistry'
import Slider from '@/components/Slider'
export default {
  components: {
    BarChart,
    PieChart,
    Chemistry,
    Slider,
  },
  data() {
    return {
      projectIndex: 'physical',
      titles: '物理防治',
      desc: '',
      data: {
        physical: {
          title: '物理防治',
          description:
            '项目区采购和装配太阳能杀虫灯100盏，配置新型5W波长365频振诱虫灯管，单灯控制面积农田500㎡~20亩；频振式杀虫灯150盏，配置15W多波长诱虫灯管。实施区共计面积2000亩，按每亩每年可少施农药0.25千克计算，年减少农药使用量约500千克。在双凤镇庆丰村和沙溪镇设置诱虫黄板56000个，实施面积约500亩，主要诱杀蚜虫、白粉虱、烟粉虱、飞虱、叶蝉、斑潜蝇等害虫，可减少农药使用量150千克。',
        },
        chemistry: {
          title: '化学防治',
          description:
            '通过大型精准施药机械以及新型农药助剂来提高喷药的作业效率并实现精准喷雾施药作业。购置高效植保机4台，功率为13.4kw；植保联防机械15台手拖式机动喷雾机3wz-300s，可在项目区沙溪镇500亩示范区实现农药的精准喷施，避免施药过程中的“跑、冒、滴、漏”现象，提高施药效率，减少农药使用量约25%。',
        },
        biological: {
          title: '生物防治',
          description:
            '在1000亩示范区内，安装害虫性信息素大螟、稻纵卷叶螟诱捕器各4000套，二化螟诱捕器2000套，田埂种植驱诱植物香根草15亩，可防治3种害虫：稻纵卷叶螟幼虫、大螟幼虫、二化螟幼虫，防治区害虫数量分别为31.3%、6.9%、17.7%，综合防治效率分别为71.1%、49.47%、49.47%。',
        },
      },
      barOption: {},
    }
  },
  methods: {
    setProject(index) {
      this.projectIndex = index
      this.titles = this.data[this.projectIndex].title
      this.desc = this.data[this.projectIndex].description
    },
  },
  mounted() {
    this.desc = this.data[this.projectIndex].description
  },
}
</script>

<style lang="less" scoped>
.reducedrug {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 60px 81px;
  display: flex;
  justify-content: space-between;

  &-left {
    width: 940px;
    height: 740px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .btns {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-between;

      .btnpub() {
        cursor: pointer;
        width: 280px;
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

    .swipercom {
      width: 100%;
      height: calc(100% - 114px);
      background: url('../../assets/pollutionPrevent/bg2.png') no-repeat;
      background-size: 100% 100%;
    }
  }

  &-right {
    width: calc(100% - 1018px);
    height: 740px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    .tecnog {
      width: 100%;
      height: 290px;
      background: url('../../assets/pollutionPrevent/bg1.png') no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 2px;

      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 100%;
        line-height: 70px;
        text-align: center;
        font-size: 24px;
        color: rgba(112, 226, 230, 1);
        span {
          padding: 0 10px;
        }
      }

      &-body {
        width: 100%;
        height: calc(100% - 80px);
        font-size: 16px;
        line-height: 32px;
        color: #fff;
        box-sizing: border-box;
        padding: 0 40px;
        text-indent: 2em;
      }
    }

    .chart {
      width: 100%;
      height: calc(100% - 340px);
      background: url('../../assets/pollutionPrevent/bg1.png') no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 2px;

      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 100%;
        line-height: 70px;
        text-align: center;
        font-size: 24px;
        color: rgba(112, 226, 230, 1);
        span {
          padding: 0 10px;
        }
      }

      &-body {
        width: 100%;
        height: calc(100% - 80px);
      }
    }
  }
}
</style>
