<template>
  <div class="preduce">
    <div class="preduce-top">
      <div class="usage">
        <div class="green">
          <div class="green-header">
            <div class="green-header-top">
              <img src="../../../assets/pollutionPrevent/dot1.png" alt="" />
              <span>绿肥轮作有机生产模式</span>
              <img src="../../../assets/pollutionPrevent/dot2.png" alt="" />
            </div>
          </div>
          <div class="green-chart">
            <div class="words">
              通过第三方监测，通过绿肥轮作，不仅冬季不施肥，而且绿肥还田后稻季化肥氮肥用量也可减少20-30%，示范区共减少化肥氮施用量约3.6吨。
            </div>
            <div class="chart">
              <v-chart :options="liquidfillOption" :autoresize="true"></v-chart>
            </div>
          </div>
        </div>
        <div class="ph">
          <div class="ph-header">
            冬季种植紫云英对稻田土壤有机质和pH值的影响
          </div>
          <div class="ph-btns">
            <div
              :class="effect === 'organic' ? 'btn btn-act' : 'btn'"
              @click="setEffect('organic')"
            >
              有机质
            </div>
            <div
              :class="effect === 'ph' ? 'btn btn-act' : 'btn'"
              @click="setEffect('ph')"
            >
              pH值
            </div>
            <div
              :class="effect === 'density' ? 'btn btn-act' : 'btn'"
              @click="setEffect('density')"
            >
              容重
            </div>
            <div
              :class="effect === 'porosity' ? 'btn btn-act' : 'btn'"
              @click="setEffect('porosity')"
            >
              总孔隙度
            </div>
          </div>
          <div class="ph-chart">
            <v-chart :options="phOption" :autoresize="true"></v-chart>
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
              <img :src="item.img" height="100%" />
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
        冬闲种植蚕豆对稻田土壤的影响
      </div>
      <div class="compare-body">
        <div class="compare1">
          <div class="arrowup"></div>
          <div class="compare-right">
            <div class="value">8.53%</div>
            <div class="name">土壤有机质</div>
          </div>
        </div>
        <div class="compare2">
          <div class="arrowup"></div>
          <div class="compare-right">
            <div class="value">9.06%</div>
            <div class="name">全氮含量</div>
          </div>
        </div>
        <div class="compare3">
          <div class="arrowup"></div>
          <div class="compare-right">
            <div class="value">20.18%</div>
            <div class="name">有效磷含量</div>
          </div>
        </div>
        <div class="compare4">
          <div class="arrowup"></div>
          <div class="compare-right">
            <div class="value">24.37%</div>
            <div class="name">速效钾含量</div>
          </div>
        </div>
        <div class="compare5">
          <div class="arrowdown"></div>
          <div class="compare-right">
            <div class="value">7.25%</div>
            <div class="name">土壤容重</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      effect: 'organic',
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
      liquidfillOption: {},
      barOption: {},
      phOption: {
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            let str = params[0].name + '<br/>'
            for (let i = 0; i < params.length; i++) {
              if (params[i].value > 0) {
                str += params[i].seriesName + params[i].value + 'g/kg<br/>'
              }
            }
            return str
          },
        },
        color: ['#FB884F', '#01C9FC', '#1CBF88'],
        legend: {
          data: ['试验前', '冬闲', '紫云烟'],
          show: true,
          // 修改legend的高度宽度
          itemHeight: 10,
          itemWidth: 10,
          textStyle: {
            color: '#B4B4B4',
          },
          top: '5%',
          right: '5%',
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['实验前', '2017', '2018'],
            boundaryGap: true,
            axisLabel: {
              show: true,
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              textStyle: {
                color: '#FFF',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
              },
              margin: 8,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#0B48B8',
                // opacity:0.2
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            max: 50,
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#0B48B8',
              },
            },
          },
        ],
        series: [
          {
            name: '试验前',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: '#FF9E5C',
                  },
                  {
                    offset: 1,
                    color: '#FFBB7C',
                  },
                ]),
              },
            },
            data: [32.56, 0, 0],
          },
          {
            name: '冬闲',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: '#0090D8',
                  },
                  {
                    offset: 1,
                    color: '#01C9FC',
                  },
                ]),
              },
            },
            data: [0, 32.56, 32.56],
          },
          {
            name: '紫云烟',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: '#1CBF88',
                  },
                  {
                    offset: 1,
                    color: '#1CBF99',
                  },
                ]),
              },
            },
            data: [0, 33.94, 33.94],
          },
        ],
      },
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
            color: '#FF9E5C', // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#FFBB7C', // 100% 处的颜色
          },
        ],
      }
      let colorList1 = {
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
        '1.205g/cm³',
        '53.77%',
        '8.07',
        '31.8g/kg',
        '0.86g/kg',
        '51.13mg/kg',
        '20.19mg/kg',
        '50.88mg/kg',
      ]
      let data2 = [
        '1.217g/cm³',
        '52.96%',
        '8.09',
        '31.89g/kg',
        '0.77g/kg',
        '63.33mg/kg',
        '13.56mg/kg',
        '25.93mg/kg',
      ]
      let data3 = [
        '1.17g/cm³',
        '59.12%',
        '8.06',
        '34.75g/kg',
        '0.82g/kg',
        '64.44mg/kg',
        '19.3mg/kg',
        '29.37mg/kg',
      ]
      this.barOption = {
        color: ['#FB884F', '#00C5FC', '#19DB95'],
        tooltip: {
          show: false,
        },
        title: [],
        grid: {
          top: '10%',
          left: '3%',
          right: '25%',
          bottom: '5%',
          containLabel: true,
        },
        legend: {
          data: ['试验前', '冬闲', '蚕豆'],
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
              '速效钾',
              '速效磷',
              '碱解氮',
              '全氮',
              '有机质含量',
              'pH',
              '总孔隙度',
              '容重',
            ],
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
                let num = value.length === 4 ? 2 : 3 //每行显示字数
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
              '速效钾',
              '速效磷',
              '碱解氮',
              '全氮',
              '有机质含量',
              'pH',
              '总孔隙度',
              '容重',
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
          //       if (index < 3) {
          //         return value + 'g/cm³'
          //       } else if (index < 6) {
          //         return value + '%'
          //       } else if (index < 9) {
          //         return value + ' '
          //       } else if (index < 15) {
          //         return value + 'g/kg'
          //       } else {
          //         return value + 'mg/kg'
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
        ],
        series: [
          {
            yAxisIndex: 1,
            type: 'bar',
            barWidth: '8',
            barGap: '100%',
            // barCategoryGap: '30%',
            data: [75, 75, 75, 75, 75, 75, 75, 75],
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
                let data = [...data1].reverse()
                return data[dataIndex]
              },
            },
          },
          {
            yAxisIndex: 1,
            zlevel: 1,
            type: 'bar',
            barGap: '100%',
            barWidth: '8',
            // barCategoryGap: '30%',
            data: [75, 75, 75, 75, 75, 75, 75, 75],
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
                let data = [...data2].reverse()
                return data[dataIndex]
              },
            },
          },
          {
            yAxisIndex: 1,
            zlevel: 1,
            type: 'bar',
            barGap: '100%',
            barWidth: '8',
            // barCategoryGap: '30%',
            data: [75, 75, 75, 75, 75, 75, 75, 75],
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
                let data = [...data3].reverse()
                return data[dataIndex]
              },
            },
          },
          {
            zlevel: 2,
            name: '试验前',
            type: 'bar',
            barWidth: '8',
            // barCategoryGap: '30%',
            data: [14, 43.77, 17, 31.8, 20, 51.13, 20.19, 50.88].reverse(),
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
            name: '冬闲',
            type: 'bar',
            barWidth: '8',
            barGap: '100%',
            // barCategoryGap: '30%',
            data: [15, 42.96, 19, 31.89, 26, 63.33, 13.56, 25.93].reverse(),
            itemStyle: {
              barBorderRadius: 50,
              borderWidth: 0,
              color: function(params) {
                return colorList1
              },
            },
          },
          {
            zlevel: 2,
            name: '蚕豆',
            type: 'bar',
            barGap: '100%',
            barWidth: '8',
            // barCategoryGap: '30%',
            data: [12, 49.12, 16, 34.75, 17, 64.44, 19.3, 29.37].reverse(),
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
    setEffect(effect) {
      this.effect = effect
    },
  },
  mounted() {
    this.liquidfillOption = {
      title: [
        {
          top: '70%',
          left: '8%',
          text: '城厢镇东林村',
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
          },
        },
        {
          top: '70%',
          left: '42%',
          text: '万丰村',
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
          },
        },
        {
          top: '70%',
          left: '73%',
          text: '沙溪镇',
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
          },
        },
      ],
      graphic: [
        {
          id: 'g1',
          type: 'group',
          top: '26%',
          left: '14%',
          children: [
            {
              type: 'text',
              z: 100,
              style: {
                fill: '#FF126A',
                text: '500亩',
                font: '16px Microsoft YaHei',
              },
            },
          ],
        },
        {
          id: 'g2',
          type: 'group',
          top: '26%',
          left: 'center',
          children: [
            {
              type: 'text',
              z: 100,
              style: {
                fill: '#FF9537',
                text: '600亩',
                font: '16px Microsoft YaHei',
              },
            },
          ],
        },
        {
          id: 'g3',
          type: 'group',
          top: '26%',
          left: '75%',
          children: [
            {
              type: 'text',
              z: 100,
              left: '8',
              style: {
                fill: '#2198FE',
                text: '300亩',
                font: '16px Microsoft YaHei',
              },
            },
          ],
        },
      ],
      series: [
        {
          type: 'liquidFill',
          name: 'series name', //series name
          radius: '50%',
          center: ['20%', '40%'],
          outline: {
            show: false,
          },
          data: [0.5, 0.4, 0.3],
          label: {
            normal: {
              formatter: '蚕豆',
              textStyle: {
                color: 'red', //波浪上文本颜色
                insideColor: 'yellow', //波浪内部字体颜色
                fontSize: 17,
              },
              position: ['50%', '70%'],
            },
          },
          color: ['#FF126A'],
          backgroundStyle: {
            color: '#061F32',
          },
        },
        {
          type: 'liquidFill',
          name: 'series name', //series name
          radius: '50%',
          center: ['50%', '40%'],
          outline: {
            show: false,
          },
          data: [0.5, 0.4, 0.3],
          label: {
            normal: {
              formatter: '紫云英',
              textStyle: {
                color: '#FF9537', //波浪上文本颜色
                insideColor: 'yellow', //波浪内部字体颜色
                fontSize: 16,
              },
              position: ['50%', '70%'],
            },
          },
          color: ['#FF9537'],
          backgroundStyle: {
            color: '#061F32',
          },
        },
        {
          type: 'liquidFill',
          name: 'series name', //series name
          radius: '50%',
          center: ['80%', '40%'],
          outline: {
            show: false,
          },
          data: [0.5, 0.4, 0.3],
          label: {
            normal: {
              formatter: '黄花苜蓿',
              textStyle: {
                color: '#2198FE', //波浪上文本颜色
                insideColor: 'yellow', //波浪内部字体颜色
                fontSize: 16,
              },
              position: ['50%', '70%'],
            },
          },
          color: ['#2198FE'],
          backgroundStyle: {
            color: '#061F32',
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
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      .green {
        width: 100%;
        height: 324px;
        background: url('../../../assets/pollutionPrevent/bg1.png') no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 2px;
        &-header {
          box-sizing: border-box;
          padding: 10px;
          height: 50px;
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
          height: calc(100% - 50px);

          .words {
            width: 100%;
            height: 100px;
            font-size: 16px;
            line-height: 26px;
            color: #fff;
            box-sizing: border-box;
            padding: 0 40px;
            text-indent: 2em;
            border-bottom: 2px dashed #35727d;
          }

          .chart {
            width: 100%;
            height: calc(100% - 100px);
          }
        }
      }

      .ph {
        width: 100%;
        height: calc(100% - 342px);
        background: url('../../../assets/pollutionPrevent/bg1.png') no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        padding: 2px;

        &-header {
          text-align: center;
          width: 100%;
          height: 32px;
          line-height: 32px;
          font-size: 18px;
          color: rgba(126, 250, 252, 1);
        }

        &-btns {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0 80px;
          border-bottom: 2px dashed #35727d;

          .btn {
            cursor: pointer;
            background-color: #042233;
            width: 60px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            color: #7efafc;
            font-size: 12px;
            border: 1px solid #014252;
          }

          .btn-act {
            background-color: #7efafc;
            border: 1px solid #7efafc;
            color: #051628;
          }
        }

        &-chart {
          width: 100%;
          height: calc(100% - 82px);
        }
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
        display: flex;
        justify-content: center;
        align-items: center;
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
      padding: 0 300px;

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
      .compare5 {
        .com(@background-color:#FDB37C);
      }
    }
  }
}

.echarts {
  height: 100%;
  width: 100%;
}
</style>
