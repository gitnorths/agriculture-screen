<template>
  <div class="fertilizepro">
    <div class="fertilizepro-top">
      <div class="charts">
        <div class="charts-header">
          有机无机配施工程
        </div>
        <div class="charts-body">
          <div class="chart-top">
            <v-chart :options="topOption"></v-chart>
          </div>
          <div class="chart-bot">
            <v-chart :options="botOption"></v-chart>
          </div>
        </div>
      </div>
      <div class="swiper"></div>
      <div class="barchart">
        <v-chart :options="barOption"></v-chart>
      </div>
    </div>
    <div class="fertilizepro-bot">
      222
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topOption: {},
      botOption: {},
      barOption: {},
    }
  },
  mounted() {
    let data = [
      {
        name: '城厢镇东林村',
        value: 3,
      },
      {
        name: '城厢镇沙溪镇',
        value: 3,
      },
    ]
    this.topOption = {
      color: ['#FF226C', '#FF9E5C'],
      title: {
        text: '{header1| 有机肥施肥机}',
        textAlign: 'left',
        left: '49%',
        top: '25%',
        textStyle: {
          color: '#7EFAFC',
          rich: {
            header1: {
              width: 130,
              fontSize: 15,
            },
          },
        },
      },
      graphic: [
        {
          //环形图中间添加文字
          type: 'text', //通过不同top值可以设置上下显示
          left: '20%', // 文字位置调整
          top: '45%', // 文字位置调整
          style: {
            text: '共6台', // 文字内容
            textAlign: 'center',
            fill: '#70E2E6', //文字的颜色
            width: 50,
            height: 50,
            fontSize: 20,
            fontFamily: 'Microsoft YaHei',
          },
        },
      ],
      legend: {
        // selectedMode: false, // 取消图例上的点击事件
        type: 'plain',
        orient: 'vertical',
        left: '50%',
        top: '40%',
        align: 'left',
        itemGap: 15,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        symbolKeepAspect: false,
        textStyle: {
          color: '#FFF',
          rich: {
            name: {
              verticalAlign: 'right',
              align: 'left',
              width: 75,
              fontSize: 12,
            },
            value: {
              align: 'left',
              width: 60,
              fontSize: 12,
            },
          },
        },
        data: data.map((item) => item.name),
        formatter: function(name) {
          if (data && data.length) {
            for (var i = 0; i < data.length; i++) {
              if (name === data[i].name) {
                return (
                  '{name| ' + name + '}' + '{value| ' + data[i].value + '台}'
                )
              }
            }
          }
        },
      },
      series: [
        {
          name: '数量',
          type: 'pie',
          radius: ['40%', '55%'],
          center: ['25%', '50%'],
          data: data,
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{text|{c}}\n{b}',
              rich: {
                text: {
                  align: 'center',
                  verticalAlign: 'middle',
                  padding: 8,
                  fontSize: 30,
                },
                value: {
                  align: 'center',
                  verticalAlign: 'middle',
                  fontSize: 20,
                },
              },
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '12',
              },
            },
          },
          labelLine: {
            normal: {
              show: true,
            },
          },
        },
      ],
    }

    let botData = [
      {
        name: '城厢镇',
        value: 1,
      },
    ]
    this.botOption = {
      color: ['#19DB95', '#FF9E5C'],
      title: {
        text: '{header1| 插秧与肥料深施一体机}',
        textAlign: 'left',
        left: '49%',
        top: '25%',
        textStyle: {
          color: '#7EFAFC',
          rich: {
            header1: {
              width: 130,
              fontSize: 15,
            },
          },
        },
      },
      legend: {
        // selectedMode: false, // 取消图例上的点击事件
        type: 'plain',
        orient: 'vertical',
        left: '50%',
        top: '40%',
        align: 'left',
        itemGap: 15,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        symbolKeepAspect: false,
        textStyle: {
          color: '#FFF',
          rich: {
            name: {
              verticalAlign: 'right',
              align: 'left',
              width: 75,
              fontSize: 12,
            },
            value: {
              align: 'left',
              width: 60,
              fontSize: 12,
            },
          },
        },
        data: botData.map((item) => item.name),
        formatter: function(name) {
          if (botData && botData.length) {
            for (var i = 0; i < botData.length; i++) {
              if (name === botData[i].name) {
                return (
                  '{name| ' + name + '}' + '{value| ' + botData[i].value + '台}'
                )
              }
            }
          }
        },
      },
      graphic: [
        {
          //环形图中间添加文字
          type: 'text', //通过不同top值可以设置上下显示
          left: '20%', // 文字位置调整
          top: '45%', // 文字位置调整
          style: {
            text: '共1台', // 文字内容
            textAlign: 'center',
            fill: '#70E2E6', //文字的颜色
            width: 50,
            height: 50,
            fontSize: 20,
            fontFamily: 'Microsoft YaHei',
          },
        },
      ],
      series: [
        {
          name: '数量',
          type: 'pie',
          radius: ['40%', '55%'],
          center: ['25%', '50%'],
          data: botData,
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: '{text|{c}}\n{b}',
              rich: {
                text: {
                  align: 'center',
                  verticalAlign: 'middle',
                  padding: 8,
                  fontSize: 30,
                },
                value: {
                  align: 'center',
                  verticalAlign: 'middle',
                  fontSize: 20,
                },
              },
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '12',
              },
            },
          },
          labelLine: {
            normal: {
              show: true,
            },
          },
        },
      ],
    }
    let colorList = {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#229dfb', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#00C5FC', // 100% 处的颜色
        },
      ],
    }
    let colorList2 = {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,

          color: '#44f6f6', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#19DB95', // 100% 处的颜色
        },
      ],
    }
    this.barOption = {
      color: ['#00C5FC', '#19DB95'],
      tooltip: {
        show: false,
      },
      title: [],
      legend: {
        data: ['有机无机配施', '传统化肥配施'],
        top: '6%',
        right: 'center',

        textStyle: {
          fontSize: 16,
          color: '#8597c1',
        },
      },
      yAxis: [
        {
          type: 'category',
          data: [
            '株高',
            '有效穗数',
            '结实率',
            '千粒重',
            '理论产量',
            '实际产量',
          ],
          axisPointer: {
            type: 'shadow',
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#8597c1',
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            margin: 30,
            interval: '0',
            textStyle: {
              fontSize: 18,
              color: '#99c3fd',
            },
          },
        },
      ],
      xAxis: [
        {
          show: false,
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#99c3fd',
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            interval: '0',
            textStyle: {
              fontSize: 16,
              color: '#99c3fd',
            },
          },
        },
        {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#99c3fd',
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            formatter: '{value} %',
            interval: '0',
            textStyle: {
              fontSize: 16,
              color: '#8597c1',
            },
          },
        },
      ],
      series: [
        {
          name: '有机无机配施',
          type: 'bar',
          barWidth: '20%',
          data: [100, 52, 56, 80, 45, 99],
          itemStyle: {
            barBorderRadius: 50,
            borderWidth: 0,
            color: function(params) {
              return colorList
            },
          },
        },
        {
          name: '传统化肥配施',
          type: 'bar',
          barWidth: '20%',
          data: [100, 52, 56, 80, 45, 99],
          itemStyle: {
            barBorderRadius: 50,
            borderWidth: 0,
            color: function(params) {
              return colorList2
            },
          },
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.fertilizepro {
  width: 100%;
  height: 100%;

  &-top {
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 50px;

    .charts {
      width: 452px;
      height: 552px;
      background: url('../../../assets/pollutionPrevent/bg1.png') no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 2px;

      &-header {
        height: 80px;
        width: 100%;
        line-height: 70px;
        text-align: center;
        font-size: 24px;
        color: rgba(112, 226, 230, 1);
      }

      &-body {
        height: calc(100% - 80px);
        width: 100%;

        .chart-top {
          width: 100%;
          height: 50%;
          border-bottom: 1px dashed #35727d;
        }
        .chart-bot {
          width: 100%;
          height: 50%;
        }
      }
    }
    .swiper {
      width: 840px;
      height: 550px;
      background: url('../../../assets/pollutionPrevent/bg2.png') no-repeat;
      background-size: 100% 100%;
    }
    .barchart {
      width: 452px;
      height: 552px;
      background: url('../../../assets/pollutionPrevent/bg1.png') no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 2px;
    }
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
