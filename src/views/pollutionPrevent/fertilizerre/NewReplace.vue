<template>
  <div class="newreplace">
    <div class="newreplace-left">
      <div class="tecnog">
        <div class="tecnog-header">
          <img src="../../../assets/pollutionPrevent/dot1.png" alt="" />
          <span>缓控释肥一次性施肥技术</span>
          <img src="../../../assets/pollutionPrevent/dot2.png" alt="" />
        </div>
        <div class="tecnog-body">
          与常规分次施肥相比，缓控释肥一次性施肥可以省去至少3次追肥人工，加上3次追肥肥料运输、人工施肥往返等中间环节，按平均1人/亩追肥需1小时，人工费用每人100元/天核算，每亩地可节省人工成本为：（100元/天÷8小时/天）x3次=37.5元。
        </div>
      </div>
      <div class="chart">
        <v-chart :options="option" :autoresize="true"></v-chart>
      </div>
    </div>
    <div class="newreplace-mid">
      <swiper :options="swiperOption">
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in carouselArr"
          :key="index"
        >
          <div class="img-border">
            <img :src="item.img" width="100%" height="100%" />
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
        <v-chart :options="barOption" :autoresize="true"></v-chart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        loop: true,
      },
      carouselArr: [
        {
          img: require('../../../assets/swiper/fertilizerReduce/7.jpg'),
          name: '绿肥-蚕豆',
        },
        {
          img: require('../../../assets/swiper/fertilizerReduce/8.png'),
          name: '绿肥-苜蓿',
        },
        {
          img: require('../../../assets/swiper/fertilizerReduce/9.png'),
          name: '绿肥-紫云英',
        },
      ],
      option: {},
      barOption: {},
    }
  },
  mounted() {
    this.option = {
      series: [
        {
          type: 'gauge',
          radius: '70%',
          center: ['75%', '65%'],
          splitNumber: 0, //刻度数量
          startAngle: 180,
          endAngle: 0,
          axisLine: {
            show: true,
            lineStyle: {
              width: 15,
              color: [
                // 有数值的部分
                [0.5, '#FF8E52'],
                // 底色
                [1, '#00323C'],
              ],
            },
            radius: 8,
          },
          //分隔线样式。
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          pointer: {
            show: false,
          },
          title: {
            show: true,
            offsetCenter: [0, 10], // x, y，单位px
            textStyle: {
              color: '#fff',
              fontSize: 16,
            },
          },
          //仪表盘详情，用于显示数据。
          detail: {
            show: true,
            offsetCenter: [0, -20],
            color: '#FF8E52',
            size: 20,
            formatter: function(params) {
              return params + '%'
            },
            textStyle: {
              fontSize: 30,
            },
          },
          data: [
            {
              value: 50,
              name: '节约氮肥',
            },
          ],
        },
        {
          type: 'gauge',
          radius: '70%',
          center: ['25%', '65%'],
          splitNumber: 0, //刻度数量
          startAngle: 180,
          endAngle: 0,

          axisLine: {
            show: true,

            lineStyle: {
              width: 15,
              color: [
                // 有数值的部分
                [0.3, '#23BBFF'],
                // 底色
                [1, '#00323C'],
              ],
            },
            radius: 8,
          },
          //分隔线样式。
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          pointer: {
            show: false,
          },
          title: {
            show: true,
            offsetCenter: [0, 10], // x, y，单位px
            textStyle: {
              color: '#fff',
              fontSize: 16,
            },
          },
          //仪表盘详情，用于显示数据。
          detail: {
            show: true,
            offsetCenter: [0, -20],
            color: '#23BBFF',
            size: 20,
            formatter: function(params) {
              return params + '%'
            },
            textStyle: {
              fontSize: 30,
            },
          },
          data: [
            {
              value: 30,
              name: '节约氮肥',
            },
          ],
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
          color: '#0069BF', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#01C9FC', // 100% 处的颜色
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

          color: '#1CBF88', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#1CE3AA', // 100% 处的颜色
        },
      ],
    }

    let data1 = [
      '20kg/亩',
      '80cm',
      '22.5万/亩',
      '123.6粒/穗',
      '87%',
      '27g',
      '653.26kg/亩',
    ]

    let data2 = [
      '14kg/亩',
      '78cm',
      '23.6万/亩',
      '118.0粒/穗',
      '87%',
      '27g',
      '654.15kg/亩',
    ]
    this.barOption = {
      color: ['#00C5FC', '#19DB95'],
      tooltip: {
        show: false,
      },
      title: [],
      grid: {
        top: '10%',
        left: '3%',
        right: '20%',
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
            '理论亩产',
            '千粒重',
            '结实率',
            '粒数',
            '穗数',
            '株高',
            '总施氮量',
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
              let num = value.length > 3 ? 2 : 3 //每行显示字数
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
          type: 'category',
          data: [
            '理论亩产',
            '千粒重',
            '结实率',
            '粒数',
            '穗数',
            '株高',
            '总施氮量',
          ],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        // {
        //   triggerEvent: true,
        //   show: true,
        //   inverse: true,
        //   data: [
        //     20,
        //     14,
        //     80,
        //     78,
        //     22.5,
        //     23.6,
        //     123.6,
        //     118.0,
        //     87,
        //     87,
        //     27,
        //     27,
        //     653.26,
        //     654.15,
        //   ],
        //   // data: getArrByKey(data, 'name'),
        //   axisLine: {
        //     show: false,
        //   },
        //   splitLine: {
        //     show: false,
        //   },
        //   axisTick: {
        //     show: false,
        //   },
        //   axisLabel: {
        //     interval: 0,
        //     color: '#7EFAFC',
        //     align: 'left',
        //     fontSize: 13,
        //     formatter: function(value, index) {
        //       if (index < 2) {
        //         return value + 'kg/亩'
        //       } else if (index < 4) {
        //         return value + 'cm'
        //       } else if (index < 6) {
        //         return value + '万/亩'
        //       } else if (index < 8) {
        //         return value + '粒/穗'
        //       } else if (index < 10) {
        //         return value + '%'
        //       } else if (index < 12) {
        //         return value + 'g'
        //       } else {
        //         return value + 'kg/亩'
        //       }
        //     },
        //   },
        // },
      ],
      xAxis: [
        {
          show: false,
          type: 'value',
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
            show: false,
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
          },
        },
      ],
      series: [
        {
          yAxisIndex: 1,
          type: 'bar',
          barWidth: '10',
          barGap: '100%',
          data: [130, 130, 130, 130, 130, 130, 130],
          zlevel: 1,
          itemStyle: {
            color: 'transparent',
          },
          label: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#7EFAFC',
              fontSize: 16,
            },
            formatter: function({ dataIndex }) {
              return data1.reverse()[dataIndex]
            },
          },
        },
        {
          yAxisIndex: 1,
          zlevel: 1,
          type: 'bar',
          barGap: '100%',
          barWidth: '10',
          data: [130, 130, 130, 130, 130, 130, 130],
          itemStyle: {
            color: 'transparent',
          },
          label: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#7EFAFC',
              fontSize: 16,
            },
            formatter: function({ dataIndex }) {
              return data2.reverse()[dataIndex]
            },
          },
        },
        {
          name: '有机无机配施',
          type: 'bar',
          barWidth: '10',
          data: [93.26, 57, 97, 96.6, 112.5, 70, 50],
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
          barGap: '100%',
          data: [95.15, 57, 97, 88, 123.6, 68, 44],
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
.newreplace {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 41px;

  &-left {
    width: 452px;
    height: 622px;

    .tecnog {
      width: 100%;
      height: 330px;
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
      margin-top: 31px;
      width: 100%;
      height: 260px;
      background: url('../../../assets/pollutionPrevent/bg1.png') no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 2px;
    }
  }

  &-mid {
    width: 840px;
    height: 620px;
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

    .swiper-pagination {
      display: none;
    }
  }

  .barchart {
    width: 452px;
    height: 620px;
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
.echarts {
  width: 100%;
  height: 100%;
}
</style>
