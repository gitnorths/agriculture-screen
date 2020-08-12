<template>
  <div class="fertilizepro">
    <div class="fertilizepro-top">
      <div class="charts">
        <div class="charts-header">
          <img src="../../../assets/pollutionPrevent/dot1.png" alt="" />
          <span>有机无机配施工程</span>
          <img src="../../../assets/pollutionPrevent/dot2.png" alt="" />
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
      <div class="swipercom">
        <swiper :options="swiperOption">
          <swiper-slide
            class="swiper-slide"
            v-for="(item, index) in carouselArr"
            :key="index"
          >
            <div class="img-border">
              <img :src="item.img" width="100%" />
            </div>
            <div class="img-name">
              {{ item.name }}
            </div>
          </swiper-slide>
          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 左右箭头 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="barchart">
        <div class="barchart-header">
          <img src="../../../assets/pollutionPrevent/dot1.png" alt="" />
          <span>项目实施效果</span>
          <img src="../../../assets/pollutionPrevent/dot2.png" alt="" />
        </div>
        <div class="barchart-body">
          <v-chart :options="barOption"></v-chart>
        </div>
      </div>
    </div>
    <div class="fertilizepro-bot">
      <div class="round1">
        <div class="arrowdown"></div>
        <div class="value">
          28.1%
        </div>
        <div class="name">化学氮肥<br />用量减少</div>
      </div>
      <div class="round2">
        <div class="arrowup"></div>
        <div class="value">
          26.6 kg
        </div>
        <div class="name">小麦平均亩产量</div>
      </div>
      <div class="round3">
        <div class="arrowup"></div>
        <div class="value">
          8.81%
        </div>
        <div class="name">小麦增产率</div>
      </div>
      <div class="round4">
        <div class="arrowdown"></div>
        <div class="value">
          53%
        </div>
        <div class="name">折纯氮35kg/ha<br />径流环境氮排放</div>
      </div>
      <div class="round5">
        <div class="arrowdown"></div>
        <div class="value">
          2.85吨
        </div>
        <div class="name">
          有机无机配施<br />
          共减少氮排放
        </div>
      </div>
      <div class="round6">
        <div class="arrowup"></div>
        <div class="value">13.1%</div>
        <div class="name">
          土壤有机质含量
        </div>
      </div>
      <div class="round7">
        <div class="arrowup"></div>
        <div class="value">5.3%</div>
        <div class="name">全氮含量</div>
      </div>
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
      swiperOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: false,
      },

      carouselArr: [
        {
          img: require('../../../assets/pollutionPrevent/farmland.png'),
          name: '绿肥-苜蓿',
        },
      ],
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
      grid: {
        top: '10%',
        left: '3%',
        right: '3%',
        bottom: '5%',
        containLabel: true,
      },
      legend: {
        data: ['有机无机配施', '传统化肥配施'],
        top: '1%',
        orient: 'horizontal',
        itemGap: 15,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        textStyle: {
          fontSize: 16,
          color: '#8597c1',
        },
      },
      yAxis: [
        {
          type: 'category',
          data: [
            '实际产量',
            '理论产量',
            '千粒重',
            '结实率',
            '有效穗数',
            '株高',
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
            margin: 10,
            interval: '0',
            textStyle: {
              fontSize: 18,
              color: '#99c3fd',
            },
            formatter: function(value) {
              let str = ''
              let num = 2 //每行显示字数
              let valLength = value.length //该项x轴字数
              let rowNum = Math.ceil(valLength / num) // 行数

              if (rowNum > 1) {
                for (let i = 0; i < rowNum; i++) {
                  let temp = ''
                  let start = i * num
                  let end = start + num

                  temp = value.substring(start, end) + '\n'
                  str += temp
                }
                return str
              } else {
                return value
              }
            },
          },
        },
        {
          triggerEvent: true,
          show: true,
          inverse: true,
          data: [
            97.7,
            92.5,
            25.1,
            23.1,
            82.9,
            95.5,
            27,
            25,
            11172,
            10655,
            10875,
            10650,
          ],
          // data: getArrByKey(data, 'name'),
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            color: '#7EFAFC',
            align: 'left',
            fontSize: 13,
            formatter: function(value, index) {
              if (index < 2) {
                return value + 'cm'
              } else if (index < 4) {
                return value + '个'
              } else if (index < 6) {
                return value + '%'
              } else if (index < 8) {
                return value + 'g'
              } else {
                return value + 'kg/hm2'
              }
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
          barWidth: '10',
          barCateGoryGap: '10',
          data: [10, 52, 56, 80, 45, 99],
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
          barWidth: '10',
          barCateGoryGap: '10',
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
    .swipercom {
      width: 840px;
      height: 550px;
      background: url('../../../assets/pollutionPrevent/bg2.png') no-repeat;
      background-size: 100% 100%;
      display: flex;

      align-items: center;

      .swiper-slide {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      }

      .img-border {
        width: 780px;
        height: 440px;
      }
      .img-name {
        margin-top: 10px;
        font-size: 24px;
        line-height: 28px;
        color: rgba(255, 255, 255, 1);
      }
      // .swiper-container {
      //   overflow: auto;
      // }
      .swiper-button-prev {
        left: 0px;
        width: 30px;
        height: 88px;
        background: url('../../../assets/pollutionPrevent/arrow-left.png')
          no-repeat;
        background-size: 100% 100%;
      }

      .swiper-button-next {
        right: 0px;
        width: 30px;
        height: 88px;
        background: url('../../../assets/pollutionPrevent/arrow-right.png')
          no-repeat;
        background-size: 100% 100%;
      }
      .swiper-button-next::after,
      .swiper-button-prev::after {
        display: none !important;
      }
    }
    .barchart {
      width: 452px;
      height: 552px;
      background: url('../../../assets/pollutionPrevent/bg1.png') no-repeat;
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
        height: calc(100% - 80px);
        width: 100%;
      }
    }
  }

  &-bot {
    width: 100%;
    height: calc(100% - 624px);
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 120px;

    .round(@background-color:#0c88fc) {
      width: 160px;
      height: 160px;
      background-color: @background-color;
      border-radius: 50%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      .name {
        font-size: 16px;
      }
    }

    .arrowup {
      width: 41px;
      height: 44px;
      background: url('../../../assets/pollutionPrevent/arrow-up.png') no-repeat;
      background-size: 100% 100%;
    }
    .arrowdown {
      width: 41px;
      height: 44px;
      background: url('../../../assets/pollutionPrevent/arrow-down.png')
        no-repeat;
      background-size: 100% 100%;
    }
    .round1 {
      .round();
    }
    .round2 {
      .round(@background-color:#64FFCF);
    }
    .round3 {
      .round(@background-color:#FFC183);
    }
    .round4 {
      .round(@background-color:#FF9CB8);
    }
    .round5 {
      .round(@background-color:#E08F00);
    }
    .round6 {
      .round(@background-color:#E3BBFF);
    }
    .round7 {
      .round(@background-color:#99FF64);
    }
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
