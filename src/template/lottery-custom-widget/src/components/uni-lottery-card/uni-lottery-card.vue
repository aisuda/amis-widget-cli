<template>
  <div class="content">
    <div class="sm">
      <LotteryMachine ref="LotteryMachine"></LotteryMachine>
    </div>
    <div class="start" @tap.stop="startLottery">
      <text class="start-text">抽奖</text>
    </div>
  </div>
</template>
<script>
import LotteryMachine from './LotteryMachine.vue'; // 导入组件
export default {
  props: ['componentProperties'],
  data() {
    return {
      defaultPrizeList: [
        {
          name: 'iPhone13',
          value: 'iPhone',
          img: 'https://user-images.githubusercontent.com/11958920/184317722-f7a110f8-0084-4b6b-b49d-309ede05b14a.png',
        },
        {
          name: 'airPods3',
          value: 'airPods',
          img: 'https://user-images.githubusercontent.com/11958920/184317817-0d64d28d-20cf-4975-9a07-7a16e70f85bf.png',
        },
        {
          name: '行李箱',
          value: 'luggage',
          img: 'https://user-images.githubusercontent.com/11958920/184317875-20c2df50-6901-4364-b3c7-e086bb717a72.png',
        },
        {
          name: '风筒',
          value: 'dryer',
          img: 'https://user-images.githubusercontent.com/11958920/184317938-03c2cc33-948d-45e6-8eba-1b473966ea1e.png',
        },
        {
          name: '平行车',
          value: 'balanceCar',
          img: 'https://user-images.githubusercontent.com/11958920/184317959-9a38abd1-12da-43fa-b93a-eb3e0fbc1ed1.png',
        },
        {
          name: 'iPad5',
          value: 'iPad',
          img: 'https://user-images.githubusercontent.com/11958920/184317974-d0f9d220-b0eb-4596-9e9b-84767dee8b8c.png',
        },
      ],
    };
  },
  computed: {
    prizeList() {
      return (
        (this.componentProperties &&
          this.componentProperties.data &&
          this.componentProperties.data.prizeList) ||
        this.defaultPrizeList
      );
    },
    prizeResult() {
      return (
        this.componentProperties &&
        this.componentProperties.data &&
        this.componentProperties.data.prizeResult
      );
    },
  },
  components: {
    // 注册组件
    LotteryMachine,
  },
  mounted() {
    // init(options)初始化抽奖组件
    // options参数说明
    // prizeList 奖品列表，结构看上面
    // defaultResults 默认显示奖品 初始化完成默认显示的奖品
    // duration 总抽奖时长 毫秒
    // direction 滚动方向 up|down
    this.$refs.LotteryMachine.init({
      prizeList: this.prizeList,
      defaultResults: ['iPhone', 'airPods', 'luggage'],
      duration: 4000,
      direction: 'up',
    });
  },
  methods: {
    startLottery() {
      // roll(options)开始摇奖
      // 参数说明
      // results 开奖结果，结构[value,value,value] value为奖品数据的value值
      // success 开奖回调 e={results} results为开奖结果数据
      const curResult = this.prizeResult || this.getResults(); // 设置抽奖结果
      console.log('当前奖品结果：', curResult);
      this.$refs.LotteryMachine.roll({
        results: curResult,
        success: (e) => {
          console.log('success e: ', e);
        },
      });
    },
    getResults() {
      // 生成随机的抽奖结果 实际应用应该ajax请求后台，让后台返回开奖结果
      let max = this.prizeList.length - 1;
      let arr = [
        Math.floor(Math.random() * (max - 1 + 1) + 1),
        Math.floor(Math.random() * (max - 1 + 1) + 1),
        Math.floor(Math.random() * (max - 1 + 1) + 1),
      ];
      return [
        this.prizeList[arr[0]].value,
        this.prizeList[arr[1]].value,
        this.prizeList[arr[2]].value,
      ];
    },
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .sm {
    margin-top: 80rpx;
  }
  .start {
    width: 70%;
    height: 80rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f29c11;
    border-radius: 40rpx;
    margin-top: 30rpx;
    box-shadow: 0 1px 2px rgba($color: #51279a, $alpha: 1);
    border-bottom: solid 3px #8d5805;
    box-sizing: border-box;
    cursor: pointer;

    .start-text {
      font-size: 20px;
      font-weight: bold;
      color: #b51c06;
      text-shadow: 1px 1px 1px #f2e811;
    }
  }
}
</style>
