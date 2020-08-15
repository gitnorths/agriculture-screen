<template>
  <v-chart :options="barOption" :autoresize="true"></v-chart>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      barOption: {},
    }
  },
  mounted() {
    let colorList1 = ['#0069BF', '#1CBF88', '#FF9E5C', '#A26FFA', '#FF126A']
    let colorList2 = ['#01C9FC', '#1CE3AA', '#FFBB7C', '#D283F8', '#FF5683']

    this.barOption = {
      // color: ['#00C5FC', '#19DB95'],
      tooltip: {
        show: false,
      },
      grid: [
        {
          left: '1%',
          right: '2%',
          bottom: '10%',
          containLabel: true,
          top: '6%',
        },
      ],
      xAxis: [
        {
          type: 'category',
          data: [
            '太阳能杀虫灯（盏）',
            '频振式杀虫灯（盏）',
            '诱虫黄板（个）',
            '减少农药使用量（kg）',
            '田间线路铺设（m）',
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
              fontSize: 16,
              color: '#FFF',
            },
            formatter: function(value) {
              let str = ''
              let num = value.length === 6 ? 6 : value.length > 8 ? 6 : 4 //每行显示字数
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
      ],
      yAxis: [
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
          barWidth: '20',
          barCateGoryGap: '10%',
          data: [150, 170, 150, 150, 150],
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
          label: {
            show: true,
            fontSize: 20,
            color: '#7EFAFC',
            position: 'top',
            formatter: function({ dataIndex }) {
              if (dataIndex === 0) {
                return 100
              } else if (dataIndex === 1 || dataIndex === 3) {
                return 150
              } else if (dataIndex === 2) {
                return 56000
              } else {
                return 10000
              }
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
