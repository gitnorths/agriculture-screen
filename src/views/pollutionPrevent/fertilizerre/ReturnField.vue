<template>
  <div class="returnfield">
    <div class="desc">
      <div class="desc-header">
        <img src="../../../assets/pollutionPrevent/dot1.png" alt="" />
        <span>秸秆还田工程</span>
        <img src="../../../assets/pollutionPrevent/dot2.png" alt="" />
      </div>
      <div class="desc-detail">
        项目购置秸秆还田机6台，作业幅宽220cm，切碎长度10cm，配套动力65~100HP；作业效率13亩/小时；购买大型拖拉机6台；功率67kw，四轮驱动，外形尺寸4040x1845x2400mm，轴距2080mm，离地间隙350mm，与秸秆还田机配套使用。经调查和计算，6台秸秆还田机和拖拉机的工作效率为每天还田约624亩，按工作时长10天计算，基本实现了项目区秸秆全量还田。
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
        <br />
        <br />
        秸秆还田机作业效率为：13亩/小时
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
          top: '2%',
          left: '3%',
          right: '4%',
          // bottom: '5%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '秸秆还田机',
              '大型拖拉机',
              '秸秆粉碎机',
              '秸秆生态处理系统',
            ],
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
            max: 8,
            splitNumber: 8,
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
            name: '',
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
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                formatter: '{c}%',
                // distance: 0,
                // offset: [30, -50],
                color: '#fff',
                fontSize: 16,
                padding: [5, 15, 10, 15],
                backgroundColor: {
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA+CAYAAAD5wvNAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ3NTQ1RkVGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQ3NTQ1RkRGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvulhDwAAAQ3SURBVHja7J1JaBRBGIX/iZEQN1CjwVxUcL+4hUnUU8SDHjQiiqJR0EOCYMAtIG4HRQXBBUQkXgQxxoOieJZ4UzO4oAe3CKJoQI2IGhUTZHz/dI12mul090xcJvU+ePSkpqsTXr1Ud81Ud8UW1SZFYuJgtsn0z+Iqd+2TFPHWGY1tFVSJ96ZgOx5lo7AdDBX9OmbMczx3mas8076BZQUhfoe3ns+xve/7/X6JcpyIZRK17u+2+I7tF5S/w+vneP0YuoXX16G33mMk5kkkCiV7RkLroNXQbE/Tk39HkdEIaDK00JTr//kd6Dx0FnqfzcELsqgzBjoCvYCOQuUMS14QM22lbfYSOgGV/cnAaG/UAD2FtkKD2QZ5yyBoE/QkfkMaoIF9HZiJerqDDkND6He/YYhp0wRCM62vAlMN3YZm0t9+ywyoNX5TluYamFroEjSMnlrR21xEaGqzDcxGqBEaQC+tQdu6MX4r1faRArPEXEUTOzkRb01lIFRgpkJN7Fms72maEJqpQYHR4VUzR0LEZKA5nug55PYGZjM0nV4Rg2Zhi19g9FO/vfSIeNiDXqYsU2B28lREfE5Nu7yBKYE20Bviw3r0MiXuwNRAxfSF+FBsMtIjMIT0xpp0YEZDs+gHCWC2XvxqYOYL57OQYDQjVRqYCnpBQlKugZlCH0hIJmtgJtAHEpKJGphS+kBCUqqBGUofSEiGFtADEgUGhjAwhIEhDAzJQ7o0MJ/pAwnJZw3MG/pAQvJBA/OMPpCQtGlgHtMHEpInGphW+kBCckcDo08mStILEoBmpCV90XuXfpAA7ibi0p7+HOYc/SAB6KPOxB2Yb/SE+KDZOOsOTAd0hr4QH87gdNThDoxyAOqkN8RDp8mGeAPTDu2jP8TDfr3YzRQY5Th0jx4Rg2bhmLvAG5huaCX0iV5Zj34pvQq9S3dvgVHaoLXQD3pmLdr2NYmK1DOZJSgwylWonr5ZSz3CcjXTG71NoDoF1bGnsa5nqUtUptpeogZGOQ0t5zWNNcPnFYk5qTaXbAOjXBFnUQOOnvov96EKhOVy0I5h5/TqhXClOI+u4lcI/Qdty91QPDFXHoapEGUSeBd0UJyFKnRs/oV+5y1foZPQJATlANQVtmI2dw28Fmf5m3Fmq4s2cT7N/096gS1ts7HiLH/zKupBclmRrcP0NCq9ob9KnGfN6NOjnSX8nCcwDmRb/VW6zQWss4SfyCNxZlXqRLmcJ/wX9tEfqX/IBaN84RC0I8dj6Opm22xKo803sulziZtyqK91t9tmms2B0XO6Ppv4WhZ1W0zdJANjFzo6qJZod07o/Odlpq4wMHYOMRdLuBv6dB9d1vejrWYxMA46olhktrnsw8BYhPYeC3x6j84IvRADYxEPMlyfZHOdw8BYhHsElB5JtdAWh0JakBH9jGW4OJ9UN9GO3/wUYAAaXtVsjsG1HQAAAABJRU5ErkJggg==',
                },
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
      border-bottom: 2px dashed #35727d;
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
