<template>
  <div class="news-card">
    <div class="news-title">{{ title }}</div>
    <div class="item-imgbox">
      <pre>{{ jsonData }}</pre>
    </div>
  </div>
</template>
<script>
export default {
  props: ['componentProperties', 'id'],
  data() {
    return {
      isAlive: true,
      isFirstVisit: true,
    };
  },
  computed: {
    title() {
      return (
        (this.componentProperties &&
          this.componentProperties.data &&
          this.componentProperties.data.title) ||
        'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。'
      );
    },
    jsonData() {
      return (
        (this.componentProperties &&
          this.componentProperties.data &&
          this.componentProperties.data.jsonData) ||
        '{ type: "h5-uni-info-card-v3" }'
      );
    },
  },
  mounted() {
    this.isFirstVisit = false;
  },
  activated() {
    this.isAlive = true;
  },
  deactivated() {
    this.isAlive = false;
  },
};
</script>
<style lang="scss" scoped>
.left {
  float: left;
}
.right {
  float: right;
}
.news-card {
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  margin: 0 12px;
  padding-bottom: 12px;

  .news-title {
    padding: 6px 0;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    line-height: 22px;
    color: #5f5e5e;
  }

  .item-imgbox {
    position: relative;
    height: 395px;
    background: #f0f0f0;
    cursor: pointer;
    box-sizing: border-box;
    text-align: left;
    overflow: auto;
  }
}
</style>
