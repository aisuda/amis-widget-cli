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
  data() {
    return {
      categories: [],
      series: [],
      defaultChartData: {
        categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
        series: [
          {
            name: '成交量A',
            data: [35, 8, 25, 37, 4, 20]
          },
          {
            name: '成交量B',
            data: [70, 40, 65, 100, 44, 68]
          },
          {
            name: '成交量C',
            data: [100, 80, 95, 150, 112, 132]
          }
        ]
      }
    };
  },
  computed: {
    chartId() {
      return this.id || 'area-uChart';
    },
    thisCategories() {
      return this.categories && this.categories.length > 0
        ? this.categories
        : this.defaultChartData.categories;
    },
    thisSeries() {
      return this.series && this.series.length > 0 ? this.series : this.defaultChartData.series;
    }
  },
  mounted() {
    this.drawCharts(this.chartId, {
      categories: this.thisCategories,
      series: this.thisSeries
    });
  },
  updated() {
    // 确保编辑器端，右侧属性配置面板调整后图表会及时更新
    console.log('this.thisSeries:', this.thisSeries);
    this.drawCharts(this.chartId, {
      categories: this.thisCategories,
      series: this.thisSeries
    });
  },
  methods: {
    drawCharts(id, data) {
      const canvas = document.getElementById(id) || this.$refs.uchart;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext('2d');
      uChartsInstance[id] = new uCharts({
        type: 'area',
        context: ctx,
        width: canvas.width,
        height: canvas.height,
        categories: data.categories,
        series: data.series,
        animation: true,
        background: '#ffffff',
        padding: [15, 15, 0, 5],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          data: [{ min: 0 }]
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
          '#ea7ccc'
        ],
        legend: {},
        extra: {
          area: {
            type: 'straight',
            opacity: 0.2,
            addLine: true,
            width: 2,
            gradient: false
          }
        }
      });
    },
    tap(e) {
      uChartsInstance[e.target.id].touchLegend(e);
      uChartsInstance[e.target.id].showToolTip(e);
    }
  }
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
