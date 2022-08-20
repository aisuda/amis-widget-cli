<template>
  <div class="u-charts-container">
    <canvas
      v-if="chartId"
      :canvas-id="chartId"
      :id="chartId"
      class="u-charts"
      @touchend="tap"
      ref="uchart"
    ></canvas>
  </div>
</template>
<script>
import uCharts from '@qiun/ucharts';
// 图表详细配置说明请见：https://www.ucharts.cn/v2/#/guide/index
var uChartsInstance = {};
export default {
  props: ['componentProperties', 'id'],
  data() {
    return {
      defaultChartData: {
        series: [
          {
            name: '成交量A',
            data: [35, 8, 25, 37, 4, 20],
          },
          {
            name: '成交量B',
            data: [70, 40, 65, 100, 44, 68],
          },
          {
            name: '成交量C',
            data: [100, 80, 95, 150, 112, 132],
          },
        ],
      },
    };
  },
  computed: {
    chartId() {
      return this.id || 'line-uChart';
    },
    categories() {
      return (
        (this.componentProperties &&
          this.componentProperties.data &&
          this.componentProperties.data.categories) ||
        this.defaultChartData.categories
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
    this.drawCharts(this.chartId, {
      categories: this.categories,
      series: this.series,
    });
  },
  methods: {
    drawCharts(id, data) {
      const canvas = document.getElementById(id) || this.$refs.uchart;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext('2d');
      uChartsInstance[id] = new uCharts({
        type: 'line',
        context: ctx,
        width: canvas.width,
        height: canvas.height,
        categories: data.categories,
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
          line: {
            type: 'straight',
            width: 2,
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

<style scoped lang="scss">
.u-charts-container {
  display: flex;
  align-items: center;
  justify-content: center;

  .u-charts {
    margin: 10px auto;
    width: 370px;
    height: 280px;
  }
}
</style>
