<template>
  <div class="saving">
    <div class="saving-left">
      <div class="detail">
        <div class="detail-header">
          <img src="../../assets/pollutionPrevent/dot1.png" alt="" />
          <span>农田节水工程建设情况</span>
          <img src="../../assets/pollutionPrevent/dot2.png" alt="" />
        </div>
        <div class="detail-body">
          <div class="chart">
            <v-chart :aotoResize="true" :options="saveOption"></v-chart>
          </div>
          <div class="rounds">
            <div class="single">
              <div class="round1">
                <div class="value">1套</div>
              </div>
              <div class="desc">稻田节水智<br />能灌溉系统</div>
            </div>
            <div class="single">
              <div class="round2">
                <div class="value">1套</div>
              </div>
              <div class="desc">泵站</div>
            </div>
            <div class="single">
              <div class="round3">
                <div class="value">1座</div>
              </div>
              <div class="desc">配套闸桥</div>
            </div>
          </div>
        </div>
      </div>
      <div class="farmland">
        <div class="farmland-header">
          <img src="../../assets/pollutionPrevent/dot1.png" alt="" />
          <span>农田节水工程</span>
          <img src="../../assets/pollutionPrevent/dot2.png" alt="" />
        </div>

        <div class="farmland-body">
          <div class="word-left">
            农田节水智能灌溉系统项目根据项目区自然地貌情况及灌溉系统要求，建设1个泵站及灌溉系统，总面积100亩。包括节水灌溉系统、智能灌溉远程信息采集系统、智能灌溉远程控制系统、智能灌溉管理平台、系统安全体系五大部分。含小型泵站、智能控制平台（YJSAAS，远景）、供电系统、无线遥测田间水层雷达、土壤水分传感器、远程遥控排灌水闸门等。<br />
            灌溉系统布置1条干管，10条支管，2#灌溉系统布
          </div>
          <div class="word-right">
            置5条干管，14条支管。在支管上每40米距离设一个出水口，布置电动闸阀，每个出口设计流量60
            m³/h。灌溉系统采用轮灌方式运行，由干管轮流向支管供水，支管轮流向电动阀供水，每次至少运行两条支管，每个支管同时打开6-8个电动闸阀，可确保项目区整个范围需水季节能及时灌溉，同时极大地提高灌溉效率，节约用水约15-20%。节约用水的同时也能显著降低农田径流的排放，降低面源污染的产生。
          </div>
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
          img: require('../../assets/swiper/saving/1.jpg'),
          name: '控制设备安装在姚湾泵站',
        },
        {
          img: require('../../assets/swiper/saving/2.jpg'),
          name: '拉斐尔电磁阀',
        },
        {
          img: require('../../assets/swiper/saving/3.jpg'),
          name: '太阳能控制箱',
        },
        {
          img: require('../../assets/swiper/saving/4.jpg'),
          name: '物联网控制设备箱',
        },
        {
          img: require('../../assets/swiper/saving/5.jpg'),
          name: '智能灌溉1',
        },
        {
          img: require('../../assets/swiper/saving/6.jpg'),
          name: '智能灌溉2',
        },
        {
          img: require('../../assets/swiper/saving/7.jpg'),
          name: '主控制设备箱',
        },
      ],
      saveOption: {
        series: [
          {
            type: 'gauge',
            radius: 80,
            startAngle: 180,
            endAngle: 0,
            center: ['55%', '55%'],
            axisLine: {
              show: true,
              lineStyle: {
                width: 10,
                color: [
                  [0.23, '#23BBFF'],
                  [1, '#103646'],
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
              formatter: '15-{value}' + '%',
            },
            data: [
              {
                value: 20,
                name: '节约用水约',
              },
            ],
          },
        ],
      },
    }
  },
}
</script>

<style lang="less" scoped>
.saving {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 80px 94px;
  display: flex;
  justify-content: space-between;

  &-left {
    width: 866px;
    height: 650px;
    box-sizing: border-box;
    padding-left: 26px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;

    .detail {
      width: 100%;
      height: 49%;
      box-sizing: border-box;
      padding-bottom: 15px;
      background: url('../../assets/pollutionPrevent/bg1.png') no-repeat;
      background-size: 100% 100%;

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

      &-body {
        width: 100%;
        height: calc(100% - 80px);
        display: flex;

        .chart {
          width: 30%;
          height: 100%;
        }

        .rounds {
          width: 70%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0 50px;

          .round(@background-color:#40dfac) {
            width: 130px;
            height: 130px;
            box-sizing: border-box;
            padding: 15px;
            .value {
              width: 100%;
              height: 100%;
              background-color: @background-color;
              border-radius: 50%;
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;
              color: #fff;
              font-size: 36px;
            }
          }

          .single {
            .desc {
              width: 100%;
              text-align: center;
              font-size: 16px;
              color: #fff;
            }
            .round1 {
              display: flex;
              flex-flow: column;
              align-items: center;
              justify-content: center;
              .round();
            }

            .round2 {
              .round(@background-color:#FDA569);
            }

            .round3 {
              .round(@background-color:#C497FB);
            }
          }
        }
      }
    }

    .farmland {
      width: 100%;
      height: 49%;
      box-sizing: border-box;
      padding-bottom: 15px;
      background: url('../../assets/pollutionPrevent/bg1.png') no-repeat;
      background-size: 100% 100%;

      &-header {
        box-sizing: border-box;
        padding: 10px;
        height: 70px;
        width: 100%;
        text-align: center;
        font-size: 24px;
        color: rgba(112, 226, 230, 1);
        span {
          padding: 0 10px;
        }
      }
      &-body {
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        font-size: 16px;
        color: #fff;

        .word-left {
          text-indent: 2em;
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding: 0 15px 0 35px;
        }
        .word-right {
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding: 0 35px 0 15px;
        }
      }
    }
  }
  .swipercom {
    width: 840px;
    height: 650px;
    background: url('../../assets/pollutionPrevent/bg2.png') no-repeat;
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
      background: url('../../assets/pollutionPrevent/arrow-left.png') no-repeat;
      background-size: 100% 100%;
    }

    .swiper-button-next {
      right: 0px;
      width: 30px;
      height: 88px;
      background: url('../../assets/pollutionPrevent/arrow-right.png') no-repeat;
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
}

.echarts {
  width: 100%;
  height: 100%;
}
</style>
