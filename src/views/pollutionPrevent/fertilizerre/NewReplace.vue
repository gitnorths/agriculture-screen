<template>
  <div class="newreplace"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    var value = 30
    var colorRegionRate = (value / 100).toFixed(2)

    option = {
      backgroundColor: '#000',
      series: [
        {
          type: 'gauge',
          radius: '35%',
          center: ['50%', '50%'],
          splitNumber: 0, //刻度数量
          startAngle: 180,
          endAngle: 0,

          axisLine: {
            show: true,
            lineStyle: {
              width: 15,
              color: [
                // 有数值的部分
                [colorRegionRate, '#FF8E52'],
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
            offsetCenter: [0, '-30%'], // x, y，单位px
            textStyle: {
              color: '#fff',
              fontSize: 20,
            },
          },
          //仪表盘详情，用于显示数据。
          detail: {
            show: true,
            offsetCenter: [0, -40],
            color: '#fff',
            size: 20,
            formatter: function(params) {
              return params + '%'
            },
            textStyle: {
              fontSize: 42,
            },
          },
          data: [
            {
              value: 50,
            },
          ],
        },
        {
          type: 'gauge',
          radius: '35%',
          center: ['20%', '50%'],
          splitNumber: 0, //刻度数量
          startAngle: 180,
          endAngle: 0,

          axisLine: {
            show: true,

            lineStyle: {
              width: 15,
              color: [
                // 有数值的部分
                [colorRegionRate, '#23BBFF'],
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
            offsetCenter: [0, '-30%'], // x, y，单位px
            textStyle: {
              color: '#fff',
              fontSize: 20,
            },
          },
          //仪表盘详情，用于显示数据。
          detail: {
            show: true,
            offsetCenter: [0, -40],
            color: '#fff',
            size: 20,
            formatter: function(params) {
              return params + '%'
            },
            textStyle: {
              fontSize: 42,
            },
          },
          data: [
            {
              value: 30,
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped></style>
