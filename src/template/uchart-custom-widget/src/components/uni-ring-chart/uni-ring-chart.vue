<template>
  <view>
    <canvas
      v-if="chartId"
      :canvas-id="chartId"
      :id="chartId"
      class="charts"
      @touchend="tap"
    ></canvas>
  </view>
</template>
<script>
import uCharts from '@qiun/ucharts';
// 图表详细配置说明请见：https://www.ucharts.cn/v2/#/guide/index
var uChartsInstance = {};
export default {
  props: ['componentProperties', 'id'],
  data() {
    return {
      cWidth: 750,
      cHeight: 500,
      defaultChartData: {
        series: [
          {
            data: [
              { name: '一班', value: 50 },
              { name: '二班', value: 30 },
              { name: '三班', value: 20 },
              { name: '四班', value: 18 },
              { name: '五班', value: 8 },
            ],
          },
        ],
      },
    };
  },
  computed: {
    chartId() {
      return this.id || 'ring-uChart';
    },
    title() {
      return (
        (this.componentProperties &&
          this.componentProperties.data &&
          this.componentProperties.data.title) ||
        '收益率'
      );
    },
    subTitle() {
      return (
        (this.componentProperties &&
          this.componentProperties.data &&
          this.componentProperties.data.subTitle) ||
        '70%'
      );
    },
    series() {
      return (
        (this.componentProperties &&
          this.componentProperties.data &&
          this.componentProperties.data.series) ||
        this.defaultChartData.series
      );
    },
  },
  mounted() {
    //这里的 750 对应 css .charts 的 width
    this.cWidth = uni.upx2px(750);
    console.log('750 this.cWidth:', this.cWidth);
    //这里的 500 对应 css .charts 的 height
    this.cHeight = uni.upx2px(500);
    this.drawCharts(this.chartId, {
      series: this.series,
    });
  },
  methods: {
    drawCharts(id, data) {
      const ctx = uni.createCanvasContext(id, this);
      uChartsInstance[id] = new uCharts({
        type: 'ring',
        context: ctx,
        width: this.cWidth,
        height: this.cHeight,
        series: data.series,
        animation: true,
        background: '#ffffff',
        rotate: false,
        rotateLock: false,
        color: [
          '#1890FF',
          '#91CB74',
          '#FAC858',
          '#EE6666',
          '#73C0DE',
          '#3CA272',
          '#FC8452',
          '#9A60B4',
          '#ea7ccc',
        ],
        padding: [5, 5, 5, 5],
        dataLabel: true,
        legend: {
          show: true,
          position: 'right',
          lineHeight: 25,
        },
        title: {
          name: this.title,
          fontSize: 13,
          color: '#666666',
        },
        subtitle: {
          name: this.subTitle,
          fontSize: 20,
          color: '#7cb5ec',
        },
        extra: {
          ring: {
            ringWidth: uni.upx2px(60),
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: false,
            borderWidth: 3,
            borderColor: '#FFFFFF',
          },
        },
      });
    },
    tap(e) {
      uChartsInstance[e.target.id].touchLegend(e);
      uChartsInstance[e.target.id].showToolTip(e);
    },
  },
};
</script>

<style scoped>
.charts {
  width: 750rpx;
  height: 500rpx;
}
</style>
