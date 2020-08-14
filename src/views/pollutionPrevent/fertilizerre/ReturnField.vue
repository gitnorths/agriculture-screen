<template>
  <div class="returnfield">
    <div class="desc">
      <div class="desc-header">
        <img src="../../../assets/pollutionPrevent/dot1.png" alt="" />
        <span>秸秆还田工程</span>
        <img src="../../../assets/pollutionPrevent/dot2.png" alt="" />
      </div>
      <div class="desc-detail">
        项目购置秸秆还田机6台，作业幅宽220cm，切碎长度10cm，配套动力65~100HP；作业效率13亩/小时；购买大型拖拉机6台；功率67kw，四轮驱动，外形尺寸404018452400mm，轴距2080mm，离地间隙350mm，与秸秆还田机配套使用。经调查和计算，6台秸秆还田机和拖拉机的工作效率为每天还田约624亩，按工作时长10天计算，基本实现了项目区秸秆全量还田。
      </div>
      <div class="desc-rice">
        <div class="img"></div>
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

    <div class="effect">
      <div class="effect-header">
        <img src="../../../assets/pollutionPrevent/dot1.png" alt="" />
        <span>项目实施效果</span>
        <img src="../../../assets/pollutionPrevent/dot2.png" alt="" />
      </div>
      <div class="effect-chart">
        <v-chart :options="barOption" :autoresize="true"></v-chart>
      </div>
      <div class="effect-desc">
        秸秆还田机作业效率为：13亩/小时
        <br />
        <br />
        <br />
        6台秸秆还田机和拖拉机的工作效率为: 每天还田约624亩
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
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
        loop: false,
      },
      carouselArr: [
        {
          img: require('../../../assets/pollutionPrevent/farmland.png'),
          name: '绿肥-苜蓿',
        },
      ],
      barOption: {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          show: false,
          // 修改legend的高度宽度
          itemHeight: 5,
          itemWidth: 24,
          data: [
            {
              name: '订单下载量',
              icon: 'rect',
            },
          ],
          textStyle: {
            color: '#B4B4B4',
          },
          top: '7%',
        },
        grid: {
          top: '1%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            // type:'category',
            data: [
              '秸秆还田机',
              '大型拖拉机',
              '秸秆粉碎机',
              '秸秆生态处理系统',
            ],
            boundaryGap: true,
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              //	margin:15,
              textStyle: {
                color: '#1B253A',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
              },
              //rotate:50,
            },
            axisTick: {
              //坐标轴刻度相关设置。
              show: false,
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: '#E5E9ED',
                // opacity:0.2
              },
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false,
              lineStyle: {
                color: '#f7f7f7',
                // 	opacity:0.1
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            max: 8,
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
                color: '#e6e6e6',
                // 	opacity:0.1
              },
            },
          },
        ],
        series: [
          {
            name: '订单下载量',
            type: 'bar',
            barWidth: 30,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: '#01C9FC',
                  },
                  {
                    offset: 1,
                    color: '#0090D8',
                  },
                ]),
                //柱状图圆角
                // barBorderRadius: [30,30,0,0],
              },
            },

            data: [6, 6, 1, 2],
          },
        ],
      },
    }
  },
}
</script>
<style lang="less" scoped>
.returnfield {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  .desc {
    overflow: hidden;
    width: 452px;
    height: 622px;
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

    &-detail {
      box-sizing: border-box;
      padding: 0 43px;
      text-indent: 2em;
      font-size: 16px;
      line-height: 32px;
      color: rgba(225, 244, 243, 1);
    }

    &-rice {
      text-align: center;
      .img {
        margin: 0 auto;
        width: 300px;
        height: 300px;
        background: url('../../../assets/pollutionPrevent/rice.png');
      }
    }
  }

  .swipercom {
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

  .effect {
    width: 452px;
    height: 622px;
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

    &-chart {
      width: 100%;
      height: calc(100% - 294px);
    }

    &-desc {
      width: 100%;
      height: 214px;
      font-size: 20px;
      line-height: 27px;
      color: rgba(126, 250, 252, 1);
      box-sizing: border-box;
      padding: 0 46px;
    }
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
