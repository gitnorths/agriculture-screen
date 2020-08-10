<template>
  <div class="implement">
    <div class="implement-left">
      <div class="env">
        <div class="title">技术集成示范及环境监测</div>
        <div class="chemistrys">
          <div
            :class="
              chemistry === 'organic' ? 'chemistrycell-active' : 'chemistrycell'
            "
            @click="setChemistry('organic')"
          >
            <div class="chemistry">
              <img src="../assets/homePage/implement/organic.png" alt="" />
            </div>
            <span>有机质变化</span>
          </div>
          <div
            :class="
              chemistry === 'nitrogen'
                ? 'chemistrycell-active'
                : 'chemistrycell'
            "
            @click="setChemistry('nitrogen')"
          >
            <div class="chemistry">
              <img src="../assets/homePage/implement/nitrogen.png" alt="" />
            </div>
            <span>全氮变化</span>
          </div>
          <div
            :class="
              chemistry === 'potassium'
                ? 'chemistrycell-active'
                : 'chemistrycell'
            "
            @click="setChemistry('potassium')"
          >
            <div class="chemistry">
              <img src="../assets/homePage/implement/potassium.png" alt="" />
            </div>
            <span>速效钾变化</span>
          </div>
          <div
            :class="
              chemistry === 'phosphorus'
                ? 'chemistrycell-active'
                : 'chemistrycell'
            "
            @click="setChemistry('phosphorus')"
          >
            <div class="chemistry">
              <img src="../assets/homePage/implement/phosphorus.png" alt="" />
            </div>
            <span>有效磷变化</span>
          </div>
        </div>
        <div class="btns">
          <div
            :class="village === 'donglin' ? 'btn-active' : 'btn'"
            @click="setVillage('donglin')"
          >
            东林村
          </div>
          <div
            :class="village === 'wanfeng' ? 'btn-active' : 'btn'"
            @click="setVillage('wanfeng')"
          >
            万丰村
          </div>
          <div
            :class="village === 'qingfeng' ? 'btn-active' : 'btn'"
            @click="setVillage('qingfeng')"
          >
            庆丰村
          </div>
          <div
            :class="village === 'zhonghe' ? 'btn-active' : 'btn'"
            @click="setVillage('zhonghe')"
          >
            中荷村
          </div>
          <div
            :class="village === 'tangqiao' ? 'btn-active' : 'btn'"
            @click="setVillage('tangqiao')"
          >
            塘桥村
          </div>
          <div
            :class="village === 'shengli' ? 'btn-active' : 'btn'"
            @click="setVillage('shengli')"
          >
            胜利村
          </div>
        </div>
        <div class="charts">
          <v-chart :options="mapOption" />
        </div>
      </div>
      <div class="reducepollu">
        养殖业污染减排
      </div>
    </div>
    <div class="implement-mid">
      <div class="farmlandpollu">
        农田面源污染防治
      </div>
      <div class="implement-mid-bot">
        <div class="demonstration">示范区配套建设</div>
        <div class="specification">
          技术模式及标准规范
        </div>
      </div>
    </div>
    <div class="implement-right">
      <div class="waterqua">
        水质改善效果
      </div>
      <div class="sewage">
        地表径流污水净化利用
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chemistry: 'organic',
      village: 'donglin',
      mapOption: {
        color: ['#38B8C5', '#3F75FF', '#769BFE'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          show: true,
          data: ['220KV', '110KV', '15KV'],
          right: 10,
          textStyle: {
            color: '#fff',
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 35,
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '3%',
          bottom: '5%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['武汉市', '黄石市', '十堰市', '宜昌市', '襄阳市', '鄂州市'],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#134C9E',
                width: 1,
                type: 'solid',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#FFF',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} ',
              color: '#FFF',
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#134C9E',
                width: 1,
                type: 'solid',
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '220KV',
            type: 'bar',
            data: [20, 50, 80, 58, 83, 68],
            barWidth: 10, //柱子宽度
            barGap: 0.3, //柱子之间间距
          },
          {
            name: '110KV',
            type: 'bar',
            data: [50, 70, 60, 61, 75, 87],
            barWidth: 10,
            barGap: 0.3,
          },
          {
            name: '15KV',
            type: 'bar',
            data: [70, 48, 73, 68, 53, 47],
            barWidth: 10,
            barGap: 0.3,
          },
        ],
      },
    }
  },
  methods: {
    setChemistry(tag) {
      this.chemistry = tag
    },
    setVillage(tag) {
      this.village = tag
    },
  },
}
</script>

<style lang="less" scoped>
.implement {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 28px 20px 25px 20px;

  display: flex;

  &-left {
    width: 550px;
    height: 100%;

    .env {
      width: 550px;
      height: 458px;
      background-image: url('../assets/homePage/implement/frame.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 2px;

      .title {
        height: 43px;
        width: 100%;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        color: rgba(156, 250, 252, 1);
        line-height: 43px;
      }

      .chemistrys {
        padding: 15px;
        display: flex;
        justify-content: space-around;
        border-bottom: 2px dashed #35727d;
        box-shadow: 0px 1px 0px 0px transparent inset,
          -10px 0px 0px 0px transparent, 10px 0px 0px 0px transparent,
          0px -1px 2px 0px #35727d inset;

        .chemistrypub(@background-image: url('../assets/homePage/implement/chemistry-bg.png'),@color: #7efafc) {
          cursor: pointer;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          .chemistry {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background-image: @background-image;
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          span {
            margin-top: 5px;
            color: @color;
            font-size: 14px;
            font-weight: 400;
          }
        }

        .chemistrycell-active {
          .chemistrypub(
            @background-image:
              url('../assets/homePage/implement/chemistry-act.png'),
            @color: #7efafc
          );
        }
        .chemistrycell {
          .chemistrypub(
            @background-image:
              url('../assets/homePage/implement/chemistry-bg.png'),
            @color: #fff
          );
        }
      }

      .btns {
        display: flex;
        justify-content: space-around;
        padding: 10px 50px;
        height: 45px;
        .btndefault(@color:#66cfd4, @background-color: #042233) {
          cursor: pointer;
          width: 50px;
          height: 25px;
          background-color: @background-color;
          color: @color;
          font-size: 12px;
          border: 1px solid #023646;
          line-height: 25px;
          text-align: center;
        }
        .btn {
          .btndefault(@color: #66cfd4);
        }
        .btn-active {
          .btndefault(@color:#153444, @background-color:#7EFAFC);
        }
      }

      .charts {
        width: 100%;
        height: calc(100% - 224px);
      }
    }
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
