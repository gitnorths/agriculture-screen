<template>
  <div class="reuse">
    <div class="reuse-left">
      <div class="header">
        <img src="../../assets/pollutionPrevent/dot1.png" alt="" />
        <span>农业废弃物利用工程</span>
        <img src="../../assets/pollutionPrevent/dot2.png" alt="" />
      </div>
      <div class="words">
        建设废弃物收集池6个，规格8m×5m×2.5m，共600m³，基本实现示范区内农药废弃包装物的全部回收和安全处置。建设农田废弃物收贮堆沤池9个，规格5m×5m×2m，共450m³，共可一次性收集和处理农业废弃物约4.2吨。购买秸秆打捆机械1套，包括TR90摊草机，404Pro捡拾压捆机，每套配80及120拖拉机各一台。建设秸秆堆场2个，面积5000
        ㎡，实现了项目区稻草的快速打捆-储存与离田化资源化再利用。
        购买树木枝条粉碎机1台和炭化炉1台。项目区废弃的树木枝条经粉碎后炭化加工成生物炭，直接回田或者作为农田排水中氮磷的吸附材料放置在项目区的生物强化反应器中，经吸附饱和后的生物炭还田，基本实现了项目区枝条等废弃物的资源化利用。
        项目实施后，项目区的秸秆、蔬菜残体与废弃枝条等农田有机废弃物资源化利用率达95%以上，不仅有效降低了对环境的污染，而且通过资源化利用提高了废弃物的附加值（加工成有机肥和羊饲料），增加了利润。
      </div>
    </div>
    <div class="reuse-mid">
      <swiper
        class="swiper gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
      >
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
      </swiper>
      <swiper
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide v-for="(item, index) in carouselArr" :key="index + 'a'">
          <div class="slidethumb">
            <img :src="item.img" width="100%" height="100%" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="reuse-right">
      <div class="header">
        <img src="../../assets/pollutionPrevent/dot1.png" alt="" />
        <span>项目实施效果</span>
        <img src="../../assets/pollutionPrevent/dot2.png" alt="" />
      </div>
      <div class="chart-g">
        <v-chart :aotoResize="true" :options="saveOption"></v-chart>
      </div>
      <div class="chart-b">
        <v-chart :options="barOption"></v-chart>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      isInit: 1,
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      carouselArr: [
        {
          img: require('../../assets/swiper/reuse/a.jpg'),
          name: '废弃物收集池',
        },
        {
          img: require('../../assets/swiper/reuse/b.jpg'),
          name: '废弃物收集池2',
        },
        {
          img: require('../../assets/swiper/reuse/c.jpg'),
          name: '捡拾压捆机',
        },
        {
          img: require('../../assets/swiper/reuse/d.jpg'),
          name: '秸秆打捆机',
        },
        {
          img: require('../../assets/swiper/reuse/e.jpg'),
          name: '秸秆堆场',
        },
        {
          img: require('../../assets/swiper/reuse/f.jpg'),
          name: '树木枝条粉碎机',
        },
        {
          img: require('../../assets/swiper/reuse/g.jpg'),
          name: '有机废弃物碳化设备',
        },
      ],
      saveOption: {
        series: [
          {
            type: 'gauge',
            radius: 90,
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '60%'],
            axisLine: {
              show: true,
              lineStyle: {
                width: 10,
                color: [
                  [0.95, '#19DB95'],
                  [1, '#092434'],
                ],
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
            pointer: {
              show: false,
              length: '90%',
              width: 0,
            },
            title: {
              show: true,
              offsetCenter: [0, '25%'], // x, y，单位px
              textStyle: {
                color: '#FFFFFF',
              },
            },

            detail: {
              show: true,
              offsetCenter: [0, '-25%'],
              formatter: '{value}' + '%',
            },
            data: [
              {
                value: 95,
                name: '废弃物资源化利用率',
              },
            ],
          },
        ],
      },
      barOption: {},
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiperTop.$swiper
    },
  },
  mounted() {
    let colorList1 = [
      '#483BBF',
      '#FF126A',
      '#A26FFA',
      '#FF9E5C',
      '#1CBF88',
      '#0069BF',
    ]
    let colorList2 = [
      '#6688FC',
      '#FF5683',
      '#D283F8',
      '#FFBB7C',
      '#1CE3AA',
      '#01C9FC',
    ]

    this.barOption = {
      color: ['#00C5FC', '#19DB95'],
      tooltip: {
        show: false,
      },
      grid: [
        {
          left: '4%',
          right: '4%',
          bottom: '1%',
          containLabel: true,
          top: '1%',
        },
      ],
      yAxis: [
        {
          gridIndex: 0,
          type: 'category',
          data: [
            '秸秆打捆机械',
            '有机废弃物碳化设备',
            '树木枝条粉碎机',
            '秸秆堆场',
            '田间废弃物收集池',
            '堆沤池',
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
              let num = value.length === 6 ? 3 : value.length > 8 ? 5 : 4 //每行显示字数
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
          data: [6, 9, 5000, 1, 1, 1],
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
                return value + '个'
              } else if (index < 3) {
                return value + '㎡'
              } else if (index < 4) {
                return value + '台'
              } else {
                return value + '套'
              }
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
      ],
      series: [
        {
          name: '常规施肥',
          type: 'bar',
          barWidth: '10',
          barCateGoryGap: 5,
          data: [4, 4, 4, 20, 10, 6],
          itemStyle: {
            barBorderRadius: 50,
            borderWidth: 0,
            color: function(params) {
              return new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: colorList1[params.dataIndex], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: colorList2[params.dataIndex], // 100% 处的颜色
                  },
                ],
                false
              )
            },
          },
        },
      ],
    }

    setTimeout(() => {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }, 100)
  },
}
</script>

<style lang="less" scoped>
.reuse {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 73px 41px;

  &-left {
    width: 450px;
    height: 700px;
    box-sizing: border-box;
    background: url('../../assets/pollutionPrevent/bg1.png') no-repeat;
    background-size: 100% 100%;
    .header {
      box-sizing: border-box;
      padding: 10px;
      height: 80px;
      line-height: 80px;
      width: 100%;
      text-align: center;
      font-size: 24px;
      color: rgba(112, 226, 230, 1);
      span {
        padding: 0 10px;
      }
    }

    .words {
      width: 100%;
      height: calc(100% - 80px);
      font-size: 16px;
      line-height: 30px;
      color: #fff;
      box-sizing: border-box;
      padding: 0 40px;
      text-indent: 2em;
    }
  }

  &-mid {
    width: calc(100% - 982px);
    height: 700px;
    background: url('../../assets/pollutionPrevent/bg2.png') no-repeat;
    background-size: 100% 100%;

    .img-border {
      width: 780px;
      height: 440px;
    }

    .slidethumb {
      width: 150px;
      height: 110px;
    }

    .gallery-top {
      .swiper-slide {
        top: 70px;
        left: 40px;
      }

      .swiper-slide-active {
        .img-border {
          border: 4px solid rgba(126, 250, 252, 1);
          border-radius: 12px;
        }
      }
    }
    .swiper {
      .img-name {
        text-align: center;
        margin-top: -40px;
        font-size: 24px;
        line-height: 28px;
        color: rgba(255, 255, 255, 1);
        z-index: 100;
      }

      .swiper-slide {
        background-size: cover;
        background-position: center;
      }
      &.gallery-top {
        height: 78%;
        width: 100%;
      }
      &.gallery-thumbs {
        top: -10px;
        height: 25%;
        box-sizing: border-box;
        overflow-y: auto;
        padding: 10px 0;
      }
      &.gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }
      &.gallery-thumbs .swiper-slide-active {
        .slidethumb {
          position: relative;
          border: 4px solid rgba(126, 250, 252, 1);
          border-radius: 8px;
          background-color: rgba(126, 250, 252, 1);
        }
        .slidethumb:after,
        .slidethumb:before {
          bottom: 100%;
          left: 50%;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }

        .slidethumb:after {
          border-color: rgba(136, 183, 213, 0);
          border-bottom-color: rgba(126, 250, 252, 1);
          border-width: 10px;
          margin-left: -10px;
        }
        .slidethumb:before {
          border-color: rgba(194, 225, 245, 0);
          border-bottom-color: #c2e1f5;
          border-width: 13px;
          margin-left: -13px;
        }
        opacity: 1;
      }
    }
  }
  &-right {
    width: 450px;
    height: 700px;
    box-sizing: border-box;
    background: url('../../assets/pollutionPrevent/bg1.png') no-repeat;
    background-size: 100% 100%;
    .header {
      box-sizing: border-box;
      padding: 10px;
      height: 80px;
      line-height: 80px;
      width: 100%;
      text-align: center;
      font-size: 24px;
      color: rgba(112, 226, 230, 1);
      span {
        padding: 0 10px;
      }
    }

    .chart-g {
      width: 100%;
      height: 30%;
      border-bottom: 2px dashed #35727d;
    }
    .chart-b {
      width: 100%;
      height: calc(70% - 80px);
    }
  }
}

.echarts {
  width: 100%;
  height: 100%;
}
</style>
