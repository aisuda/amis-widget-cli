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
              { name: '一班', value: 82 },
              { name: '二班', value: 63 },
              { name: '三班', value: 86 },
              { name: '四班', value: 65 },
              { name: '五班', value: 79 },
            ],
          },
        ],
      },
    };
  },
  computed: {
    chartId() {
      return this.id || 'mount-uChart';
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
        type: 'mount',
        context: ctx,
        width: this.cWidth,
        height: this.cHeight,
        series: data.series,
        animation: true,
        background: '#ffffff',
        padding: [15, 15, 0, 5],
        xAxis: {
          disableGrid: true,
        },
        yAxis: {
          data: [{ min: 0 }],
        },
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
        legend: {},
        extra: {
          mount: {
            type: 'mount',
            widthRatio: 1.5,
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
