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
        loop: true,
      },
      carouselArr: [
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
              margin: 18,
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
                position: 'insideTopLeft',
                formatter: (data) => {
                  if (data.dataIndex === 3) {
                    return `${data.value}套`
                  } else {
                    return `${data.value}台`
                  }
                },

                // distance: 0,
                offset: [17, -28],
                color: '#fff',
                fontSize: 16,
                padding: [5, 5, 10, 5],
                backgroundColor: {
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkY4MTEyODhENDBBMTFFQUIwMDJGNTIwN0I5Q0I1QjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZGODEyQzRENDY2MTFFQUIwMDJGNTIwN0I5Q0I1QjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRjgxMTI4NkQ0MEExMUVBQjAwMkY1MjA3QjlDQjVCMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRjgxMTI4N0Q0MEExMUVBQjAwMkY1MjA3QjlDQjVCMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqQ0x8kAAAGfSURBVHja1Jm9SsNgFIZPYrWLvzVDLYJgddAWHHSsQ67C4uIl6OKViNegXkUHcZF2UGxdqsXFH6iCuFh/qu/BLxKDMYk0zXdeeKYk9CGk3/nyxqDoscAimANTYBKkQSrgujfQAffgBjRBA7Sj/LgR8jwTLAMbzEa4Ligf4BJUQA10eyG8AMogS/HmFuyD8/8KD4I1sEr9zSE4AK+/HRzwuWgEbIEl6n9m1H/kBLyEEWbZbTBNyWVc3ayqV9orPAQ2E5Z1MgzmwTF49xNeT+gx8MsEGAWn7uXKvRqUSL+UlNsPYUOtCLqm7Lg6witqaumarBpc38I26R/bEbbUuNU97GixcKGHe4M4w44FFs6TnORZOCdIOMfCGUHCGVNtvqUkbYZ4U9AqJslKR5rwgzTha2nCF5KE+Q27LkmY64C2JOGKpGWNO4uaJGEuWLpShI/I1QbpLtxSd1fEaL4Du+QpUnTd+FyBHfDkPaCj8J9lYEqzR2CPAupWFn4EYwlPMB4KVQpZaBfBBn11WHGGC71n3iKqQcCfDM4o4ieDTwEGAKH/Q1nEEMQcAAAAAElFTkSuQmCC',
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
  padding: 0 41px;

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
      margin-top: 30px;
      text-align: center;
      height: 250px;
      overflow: hidden;
      .img {
        margin: 10px auto;
        width: 290px;
        height: 290px;
        background: url('../../../assets/pollutionPrevent/rice.png') no-repeat;
        background-size: 100% 100%;
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
