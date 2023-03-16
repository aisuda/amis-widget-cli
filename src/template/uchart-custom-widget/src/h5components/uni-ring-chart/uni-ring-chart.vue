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
    this.drawCharts(this.chartId, {
      series: this.series,
    });
  },
  updated() {
    // 确保编辑器端，右侧属性配置面板调整后图表会及时更新
    this.drawCharts(this.chartId, {
      series: this.series,
    });
  },
  methods: {
    drawCharts(id, data) {
      const canvas = document.getElementById(id) || this.$refs.uchart;
      canvas.width = canvas.offsetWidth || '370';
      canvas.height = canvas.offsetHeight || '280';
      const ctx = canvas.getContext('2d');
      uChartsInstance[id] = new uCharts({
        type: 'ring',
        context: ctx,
        width: canvas.width,
        height: canvas.height,
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
            ringWidth: 60,
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
