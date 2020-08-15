<template>
  <div class="preduce">
    <div class="preduce-top">
      <div class="usage">
        <div class="usage-header">
          <div class="usage-header-top">
            <img src="../../../assets/pollutionPrevent/dot1.png" alt="" />
            <span>水稻配方施肥与常规施肥</span>
            <img src="../../../assets/pollutionPrevent/dot2.png" alt="" />
          </div>
          <div class="usage-header-bot">
            的氮磷钾用量
          </div>
        </div>
        <div class="usage-chart">
          <v-chart :options="usageOption" :autoresize="true"></v-chart>
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
      <div class="effect">
        <div class="effect-header">
          <img src="../../../assets/pollutionPrevent/dot1.png" alt="" />
          <span>项目实施效果</span>
          <img src="../../../assets/pollutionPrevent/dot2.png" alt="" />
        </div>
        <div class="effect-body">
          <v-chart :options="barOption" :autoresize="true"></v-chart>
        </div>
      </div>
    </div>
    <div class="preduce-bot">
      <div class="compare-header">
        配方施肥比传统常规化肥处理
      </div>
      <div class="compare-body">
        <div class="compare1">
          <div class="arrowdown"></div>
          <div class="compare-right">
            <div class="value">2.6%</div>
            <div class="name">氮肥用量</div>
          </div>
        </div>
        <div class="compare2">
          <div class="arrowdown"></div>
          <div class="compare-right">
            <div class="value">46.7%</div>
            <div class="name">磷肥用量</div>
          </div>
        </div>
        <div class="compare3">
          <div class="arrowdown"></div>
          <div class="compare-right">
            <div class="value">7%</div>
            <div class="name">钾肥用量</div>
          </div>
        </div>
        <div class="compare4">
          <div class="arrowup"></div>
          <div class="compare-right">
            <div class="value">1.7%</div>
            <div class="name">水稻增产</div>
          </div>
        </div>
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
          img: require('../../../assets/swiper/fertilizerReduce/1.png'),
          name: '测土配方',
        },
        {
          img: require('../../../assets/swiper/fertilizerReduce/2.jpg'),
          name: '测土配方肥供应点',
        },
        {
          img: require('../../../assets/swiper/fertilizerReduce/3.jpg'),
          name: '插秧与肥料深施一体机',
        },
        {
          img: require('../../../assets/swiper/fertilizerReduce/4.jpg'),
          name: '秸秆粉碎还田机',
        },
        {
          img: require('../../../assets/swiper/fertilizerReduce/5.jpg'),
          name: '秸秆饲料粉碎机',
        },
        {
          img: require('../../../assets/swiper/fertilizerReduce/6.jpg'),
          name: '楼草机',
        },
      ],
      usageOption: {},
      barOption: {},
    }
  },
  methods: {
    setBar() {
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
        title: [
          {
            text: '配方施肥/常规施肥对籽粒影响',
            textStyle: {
              color: '#7EFAFC',
            },
            top: '30px',
            left: '10px',
          },
          {
            text: '配方施肥/常规施肥对茎叶影响',
            textStyle: {
              color: '#7EFAFC',
            },
            top: '250px',
            left: '10px',
          },
        ],
        grid: [
          {
            left: '3%',
            right: '8%',
            bottom: '3%',
            height: '40%',
            containLabel: true,
            top: '60px',
          },
          {
            left: '3%',
            right: '4%',
            bottom: '3%',
            height: '40%',
            top: '280px',
            containLabel: true,
          },
        ],
        legend: {
          data: ['常规施肥', '配方施肥'],
          top: '0',
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
            gridIndex: 0,
            type: 'category',
            data: ['钾', '磷', '氮'],
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
            gridIndex: 1,
            type: 'category',
            data: ['钾', '磷', '氮'],
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
            gridIndex: 0,
            offset: 10,
            gridIndex: 0,
            triggerEvent: true,
            show: true,
            inverse: true,
            data: [1.332, 1.333, 0.381, 0.35, 0.608, 0.61],
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
                return value + 'g/kg'
              },
            },
          },
          {
            gridIndex: 1,
            triggerEvent: true,
            show: true,
            inverse: true,
            data: [0.86, 0.92, 0.169, 0.16, 1.646, 1.681],
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
                return value + 'g/kg'
              },
            },
          },
        ],
        xAxis: [
          {
            show: false,
            gridIndex: 0,
          },
          {
            show: false,
            gridIndex: 1,
          },
          {
            show: false,
            gridIndex: 0,
          },
          {
            show: false,
            gridIndex: 1,
          },
        ],
        series: [
          {
            coordinateSystem: 'cartesian2d',
            name: '常规施肥',
            type: 'bar',
            barWidth: '10',
            barCateGoryGap: 5,
            data: [45, 22, 67],
            itemStyle: {
              barBorderRadius: 50,
              borderWidth: 0,
              color: function(params) {
                return colorList
              },
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
          },
          {
            coordinateSystem: 'cartesian2d',
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: '配方施肥',
            type: 'bar',
            barWidth: '10',
            barCateGoryGap: 5,
            data: [47, 20, 66],
            itemStyle: {
              barBorderRadius: 50,
              borderWidth: 0,
              color: function(params) {
                return colorList2
              },
            },
          },
          {
            coordinateSystem: 'cartesian2d',
            name: '常规施肥',
            type: 'bar',
            barWidth: '10',
            barCateGoryGap: '10',
            data: [80, 14, 40],
            itemStyle: {
              barBorderRadius: 50,
              borderWidth: 0,
              color: function(params) {
                return colorList
              },
            },
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
          {
            coordinateSystem: 'cartesian2d',
            name: '配方施肥',
            type: 'bar',
            barWidth: '10',
            barCateGoryGap: '10',
            data: [78, 12, 42],
            itemStyle: {
              barBorderRadius: 50,
              borderWidth: 0,
              color: function(params) {
                return colorList2
              },
            },
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
        ],
      }
    },
  },
  mounted() {
    let colorList = {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#F09E5C', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#FF9E5C', // 100% 处的颜色
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
          color: '#AE6FFA', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#A26FFA', // 100% 处的颜色
        },
      ],
    }

    let data1 = [21.35, 5.25, 5.25, 637.1, 601.1]
    let data2 = [20.8, 2.8, 4.9, 648.0, 611.3]
    this.usageOption = {
      color: ['#FF9E5C', '#A26FFA'],
      tooltip: {
        show: false,
      },
      title: [],
      grid: {
        top: '10%',
        left: '3%',
        right: '15%',
        bottom: '5%',
        containLabel: true,
      },
      legend: {
        data: ['常规施肥', '配方施肥'],
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
          data: ['籽粒产量', '秸秆', '钾', '磷', '氮'],
          axisPointer: {
            type: 'shadow',
          },
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
          type: 'category',
          data: ['籽粒产量', '秸秆', '钾', '磷', '氮'],
          axisPointer: {
            type: 'shadow',
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        // {
        //   triggerEvent: true,
        //   show: true,
        //   inverse: true,
        //   data: [21.35, 20.8, 5.25, 2.8, 5.25, 4.9, 637.1, 648.0, 601.1, 611.3],
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
        //       return value + 'kg/亩'
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
          data: [75, 75, 75, 75, 75, 75],
          zlevel: 1,
          itemStyle: {
            color: 'transparent',
          },
          label: {
            show: true,
            position: 'right',
            textStyle: {
              //数值样式
              color: '#7EFAFC',
              fontSize: 16,
            },
            formatter: function({ dataIndex }) {
              return `${data1.reverse()[dataIndex]}kg/亩`
            },
          },
        },
        {
          yAxisIndex: 1,
          zlevel: 1,
          type: 'bar',
          barGap: '100%',
          barWidth: '10',
          data: [75, 75, 75, 75, 75, 75],
          itemStyle: {
            color: 'transparent',
          },
          label: {
            show: true,
            position: 'right',
            textStyle: {
              //数值样式
              color: '#7EFAFC',
              fontSize: 16,
            },
            formatter: function({ dataIndex }) {
              return `${data2.reverse()[dataIndex]}kg/亩`
            },
          },
        },
        {
          zlevel: 2,
          name: '常规施肥',
          type: 'bar',
          barWidth: '10',
          data: [61.1, 67.1, 6.25, 5.25, 21.35],
          itemStyle: {
            barBorderRadius: 50,
            borderWidth: 0,
            color: function(params) {
              return colorList
            },
          },
        },
        {
          zlevel: 2,
          name: '配方施肥',
          type: 'bar',
          barWidth: '10',
          barGap: '100%',
          data: [61.3, 64.0, 4.9, 2.8, 20.8],
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

    this.setBar()
  },
}
</script>

<style lang="less" scoped>
.preduce {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  &-top {
    height: calc(100% - 170px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 42px;

    .usage {
      width: 452px;
      height: 100%;
      background: url('../../../assets/pollutionPrevent/bg1.png') no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 2px;
      &-header {
        box-sizing: border-box;
        padding: 10px;
        height: 80px;
        width: 100%;
        text-align: center;
        font-size: 24px;
        color: rgba(112, 226, 230, 1);
        span {
          padding: 0 10px;
        }
      }

      &-chart {
        width: 100%;
        height: calc(100% - 80px);
      }
    }
    .swipercom {
      width: 840px;
      height: 100%;
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
    .effect {
      width: 452px;
      height: 100%;
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
    height: 150px;
    width: 100%;

    .compare-header {
      height: 30px;
      text-align: center;
      font-size: 24px;
      font-family: PingFang-SC-Bold;
      line-height: 32px;
      color: rgba(112, 226, 230, 1);
    }

    .compare-body {
      width: 100%;
      height: calc(100% - 30px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 420px;

      .com(@background-color:#37affe) {
        width: 230px;
        height: 76px;
        background-color: @background-color;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .compare-right {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          line-height: 25px;
          color: rgba(255, 255, 255, 1);
          padding-left: 10px;
          .value {
            font-size: 30px;
          }
        }
      }
      .arrowup {
        width: 41px;
        height: 44px;
        background: url('../../../assets/pollutionPrevent/arrow-up.png')
          no-repeat;
        background-size: 100% 100%;
      }
      .arrowdown {
        width: 41px;
        height: 44px;
        background: url('../../../assets/pollutionPrevent/arrow-down.png')
          no-repeat;
        background-size: 100% 100%;
      }
      .compare1 {
        .com();
      }
      .compare2 {
        .com(@background-color:#FC5C9A);
      }
      .compare3 {
        .com(@background-color:#60DFB0);
      }
      .compare4 {
        .com(@background-color:#CB8CFB);
      }
    }
  }
}

.echarts {
  height: 100%;
  width: 100%;
}
</style>
