<template>
  <div class="content">
    <UniColumn />
    <UniMount />
    <UniLine />
    <UniArea />
    <UniPie />
    <UniRing />
  </div>
</template>

<script setup lang="ts">
import UniColumn from '../../components/uni-column-chart/uni-column-chart.vue'; // 导入组件
import UniMount from '../../components/uni-mount-chart/uni-mount-chart.vue';
import UniLine from '../../components/uni-line-chart/uni-line-chart.vue';
import UniArea from '../../components/uni-area-chart/uni-area-chart.vue';
import UniPie from '../../components/uni-pie-chart/uni-pie-chart.vue';
import UniRing from '../../components/uni-ring-chart/uni-ring-chart.vue';
// import { ref } from 'vue';
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
