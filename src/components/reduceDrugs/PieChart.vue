<template>
  <v-chart :options="option" :autoresize="true"></v-chart>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      option: {},
    }
  },
  mounted() {
    let data = [
      {
        name: '稻纵卷叶螟诱捕器4000套',
        value: 4000,
      },
      {
        name: '大螟诱捕器4000套',
        value: 4000,
      },
    ]
    this.option = {
      graphic: [
        {
          //环形图中间添加文字
          type: 'text', //通过不同top值可以设置上下显示
          left: '15%', // 文字位置调整
          top: '35%', // 文字位置调整
          style: {
            text: '8000套', // 文字内容
            textAlign: 'center',
            fill: '#70E2E6', //文字的颜色
            width: 50,
            height: 50,
            fontSize: 20,
            fontFamily: 'Microsoft YaHei',
          },
        },
        {
          //环形图中间添加文字
          type: 'text', //通过不同top值可以设置上下显示
          left: '45%', // 文字位置调整
          top: '35%', // 文字位置调整
          style: {
            text: '2000套', // 文字内容
            textAlign: 'center',
            fill: '#70E2E6', //文字的颜色
            width: 50,
            height: 50,
            fontSize: 20,
            fontFamily: 'Microsoft YaHei',
          },
        },
        {
          //环形图中间添加文字
          type: 'text', //通过不同top值可以设置上下显示
          left: '77%', // 文字位置调整
          top: '35%', // 文字位置调整
          style: {
            text: '15亩', // 文字内容
            textAlign: 'center',
            fill: '#70E2E6', //文字的颜色
            width: 50,
            height: 50,
            fontSize: 20,
            fontFamily: 'Microsoft YaHei',
          },
        },
      ],
      legend: [
        {
          type: 'plain',
          orient: 'vertical',
          left: '10%',
          top: '70%',
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
            return name
          },
        },
        {
          type: 'plain',
          orient: 'vertical',
          left: '40%',
          top: '70%',
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
          data: ['二化螟诱捕器2000套'],
          formatter: function(name) {
            return name
          },
        },
        {
          type: 'plain',
          orient: 'vertical',
          left: '70%',
          top: '70%',
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
          data: ['驱诱植物香根草15亩'],
          formatter: function(name) {
            return name
          },
        },
      ],
      series: [
        {
          color: ['#FF226C', '#FF9E5C'],
          name: '数量',
          type: 'pie',
          radius: ['40%', '55%'],
          center: ['20%', '40%'],
          data: data,
          labelLine: {
            // length: 20,
            // length2: 150,
          },
          label: {
            normal: {
              show: false,
              position: 'outside',
              formatter: function({ name }) {
                let str = ''
                if (name === '稻纵卷叶螟诱捕器4000套') {
                  str += name
                }
                // console.log('mounted -> str', str)
                return str
              },
              padding: [0, -100],
              height: 185,
              // rich: {
              // b: {
              //   lineHeight: 5,
              //   // align: 'top',
              //   // verticalAlign: 'middle',
              //   fontSize: 20,
              // },
              // hr: {
              //   // borderWidth: 1,
              //   // width: '100%',
              //   // height: 10,
              //   // borderColor: ' ',
              // },
              // },
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '12',
              },
            },
          },
        },
        {
          color: ['#19DB95'],
          name: '数量',
          type: 'pie',
          radius: ['40%', '55%'],
          center: ['50%', '40%'],
          data: [
            {
              name: '二化螟诱捕器2000套',
              value: 2000,
            },
          ],
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
              show: false,
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
        {
          color: ['#00C5FC'],
          name: '数量',
          type: 'pie',
          radius: ['40%', '55%'],
          center: ['80%', '40%'],
          data: [
            {
              name: '驱诱植物香根草15亩',
              value: 15,
            },
          ],
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
              show: false,
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
  },
}
</script>
<style lang="less" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
