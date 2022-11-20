<template>
  <view class="content">
    <image class="logo" src="./logo.png" />
    <UniTimeLine />
  </view>
</template>

<script setup lang="ts">
import UniTimeLine from '../../components/uni-time-line/uni-time-line.vue';
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
