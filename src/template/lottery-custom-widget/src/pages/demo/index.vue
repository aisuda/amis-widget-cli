<template>
  <div class="content">
    <UniLotteryCard></UniLotteryCard>
  </div>
</template>

<script setup lang="ts">
import UniLotteryCard from '../../components/uni-lottery-card/uni-lottery-card.vue'; // 导入组件
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
