<template>
  <div class="qui-flow">
    <div
      v-for="(item, index) in flowData"
      :class="['qui-flow-stack', index === 0 ? 'qui-flow-stack-first' : '']"
    >
      <div
        :class="['qui-flow-icon', item.highlight ? 'qui-flow-icon-active' : '']"
        :style="{
          backgroundColor: item.highlight ? highlightBackground : background,
          borderColor: item.highlight ? highlightBorder : border,
        }"
      ></div>
      <div
        class="qui-flow-line"
        v-if="index < flowLength - 1"
        :style="{ backgroundColor: line }"
      ></div>
      <div
        :class="[
          'qui-flow-item',
          index === flowLength - 1 ? 'qui-flow-item-last' : '',
        ]"
      >
        <div
          class="qui-flow-title"
          :style="{ color: item.highlight ? highlightTitle : '' }"
        >
          {{ item.title }}
        </div>
        <div class="qui-flow-desc" v-if="item.desc">{{ item.desc }}</div>
        <div class="qui-flow-time" v-if="item.time">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['componentProperties', 'id'],
  data() {
    return {
      defaultFlowData: [
        {
          time: '2017-05-24 21:10:29',
          desc: '',
          highlight: true,
          title: '方案已确认',
        },
        {
          highlight: true,
          title: '方案已更新',
        },
        {
          highlight: true,
          time: '2017-05-24 19:49:03',
          desc: '测试测试测试测试测试测试测试测试测试测试测试测试测试测',
          title: '测试标题测试标题测试标题',
        },
        {
          desc: '您以确定了方案',
          title: '方案已上传',
        },
        {
          time: '2017-05-24 19:49:03',
          desc: '商家会在2个工作小时内电话联系您',
          title: '商家已接单',
        },
      ],
      line: '#0f8de8',
      background: '#fff',
      border: '#0f8de8',
      highlightTitle: '#0f8de8',
      highlightBackground: '#fff',
      highlightBorder: '#0f8de8',
    };
  },
  computed: {
    flowData() {
      return (
        (this.componentProperties &&
          this.componentProperties.data &&
          this.componentProperties.data.flowData) ||
        this.defaultFlowData
      );
    },
    flowLength() {
      return this.flowData.length;
    },
  },
};
</script>

<style lang="scss">
.qui-flow {
  flex-direction: column;
}

.qui-flow-stack {
  position: relative;
  margin-top: -10px;
  min-height: 112px;
  padding-bottom: 82px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.qui-flow-stack-first {
  margin-top: 0;

  .qui-flow-line {
    top: 10px;
  }
}

.qui-flow-item {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
}

.qui-flow-item-last {
  padding-bottom: 0;
}

.qui-flow-line {
  position: absolute;
  left: 22px;
  top: 0;
  right: 0;
  bottom: 0;
  width: 2px;
  z-index: 1;
}

.qui-flow-icon {
  position: absolute;
  left: 17px;
  top: 10px;
  width: 12px;
  height: 12px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  z-index: 2;
}

.qui-flow-icon-active {
  position: absolute;
  left: 13px;
  top: 10px;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  border-width: 6px;
  border-style: solid;
  box-sizing: border-box;
  z-index: 2;
}

.qui-flow-title {
  color: #666;
  font-size: 22px;
  line-height: 30px;
  text-overflow: ellipsis;
}

.qui-flow-desc,
.qui-flow-time {
  margin-top: 15px;
  color: #aaa;
  font-size: 14px;
  line-height: 20px;
}
</style>
