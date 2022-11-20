<template>
  <div class="shell">
    <div class="l">
      <!-- 小灯列表 -->
      <div
        class="lamp"
        v-for="(item, index) in lamps"
        :key="item.color"
        :style="{
          'background-color': item.color,
          'box-shadow': '0 0 5px ' + item.color,
        }"
      ></div>
    </div>
    <div class="c">
      <div class="HMSM">
        <!-- 背景 -->
        <div class="HMSM-display-bg">
          <div
            v-for="(shaft, index) in shaftList"
            :key="index"
            class="box"
          ></div>
        </div>
        <!-- 奖品列表 -->
        <div class="HMSM-display">
          <div
            v-for="(shaft, index) in shaftList"
            :key="index"
            class="HMSM-shaft"
            :style="{
              transform: 'translate3d(0, ' + translateY[index] + '%, 0)',
              'transition-duration': duration + 'ms',
            }"
            :class="{ roll_animation: rollState == 'start' }"
          >
            <view
              class="img-view"
              v-for="(item, shaftIndex) in shaft"
              :key="item.HMSM_id"
            >
              <img class="image" :src="item.img" />
            </view>
          </div>
        </div>
      </div>
    </div>
    <div class="r">
      <!-- 小灯列表 -->
      <div
        class="lamp"
        v-for="(item, index) in lamps"
        :key="item.color"
        :style="{
          'background-color': item.color,
          'box-shadow': '0 0 5px ' + item.color,
        }"
      ></div>
    </div>
  </div>
</template>
<script>
// 实现原理
// 就是一个长列表，做一个translateY的位移，然后加上延迟
// 只要这个列表足够长，设置好动画曲线，就能实现效果了

export default {
  name: 'LotteryMachine',
  data() {
    return {
      // 低二/三列开始滚动的延迟
      delay: 0,
      // 总的摇奖时间 单位毫秒
      duration: 0,
      // 摇奖方向 可选 up down
      direction: 'up',
      // 摇奖状态
      rollState: 'stop',
      // 奖品列表
      prizeList: [],
      // 位置
      translateY: [0, 0, 0],
      // 滚动列表
      shaftList: [],
      // 控制小灯切换的定时器
      lampTimer: false,
      // 小灯颜色
      lamps: [
        { color: '#97eefb' },
        { color: '#fecc6a' },
        { color: '#fb7c84' },
        { color: '#a097ff' },
        { color: '#fd0100' },
      ],
    };
  },
  // #ifdef VUE3
  emits: ['init', 'roll'],
  // #endif
  methods: {
    // 初始化
    init({
      // 奖品列表
      prizeList,
      // 默认显示奖品
      defaultResults = [],
      // 滚动延迟 默认200ms
      delay = 200,
      // 滚动时间 从开始滚动到所有滚动结束 默认4000ms
      duration = 4000,
      // 滚动方向
      direction = 'up',
    }) {
      // 校验传入参数
      if (typeof delay !== 'number') {
        console.warn('delay参数应该传入整型');
        delay = parseInt(delay);
        delay = isNaN(delay) ? 200 : delay;
      }
      if (typeof duration !== 'number') {
        console.warn('duration参数应该传入整型');
        duration = parseInt(duration);
        duration = isNaN(duration) ? 4000 : duration;
      }
      if (typeof prizeList !== 'object') {
        return console.error('prizeList参数应该传入数组对象');
      }
      if (typeof defaultResults !== 'object') {
        return console.error('defaultResults参数应该传入数组');
      }
      if (direction != 'up' && direction != 'down') {
        return console.error('direction参数应该传入"up"或者"down"');
      }
      // 校验完毕

      this.direction = direction;
      // 最低4秒
      if (duration < 4000) {
        duration = 4000;
      }
      // 总时长要扣除延迟滚动那一部分时间
      duration = duration - delay * 2;

      this.prizeList = prizeList;
      let shaftList = [];
      shaftList.length = 3;
      for (let i = 0; i < 3; i++) {
        // 打乱顺序和扩充列表
        shaftList[i] = this.shuffle(prizeList);
        for (let j = 0, len = shaftList[i].length; j < len; j++) {
          shaftList[i][j].HMSM_id = 'id_' + i + '_' + j;
        }
      }
      this.shaftList = shaftList;
      if (defaultResults.length == 3) {
        this.setTranslateY(defaultResults);
        setTimeout(() => {
          this.stop();
        }, 50);
      }
      {
        if (this.direction == 'down') {
          // 如果是向下滚动，则定位到最底部
          let topY = (this.shaftList[1].length - 1) * -100;
          this.translateY.splice(0, 3, topY, topY, topY);
        }
      }
      this.duration = duration;
      this.delay = delay;
    },
    // 摇奖
    roll({
      // 开奖结果
      results = null,
      // 开奖回调
      success = null,
    }) {
      if (this.rollState == 'start') {
        return console.warn('正在抽奖哦！');
      }
      if (typeof results != 'object') {
        return console.error('请传入正确的开奖结果参数results');
      }
      this.rollState = 'start';
      // 滚动位置
      let res = this.setTranslateY(results);
      this.lampTimer && clearInterval(this.lampTimer);
      // 切换灯光
      this.startSwitchLamp();
      setTimeout(() => {
        typeof success == 'function' && success(res);
        this.stop();
      }, this.duration + 1000);
    },
    // 设定位置
    setTranslateY(results) {
      let res = {
        results: [],
      };
      for (let i = 0, len = results.length; i < len; i++) {
        if (this.direction == 'up') {
          // 倒序遍历奖品列表，找出开奖结果的最靠后的下标
          for (let k = this.shaftList[i].length - 1; k >= 0; k--) {
            if (this.shaftList[i][k].value == results[i]) {
              res.results.push(
                JSON.parse(JSON.stringify(this.shaftList[i][k])),
              );
              // 延迟滚动
              setTimeout(() => {
                this.translateY.splice(i, 1, k * -100);
              }, i * this.delay);
              break;
            }
          }
        } else {
          // 顺序遍历奖品列表，找出开奖结果的最靠前的下标
          for (let k = 0, len = this.shaftList[i].length; k < len; k++) {
            if (this.shaftList[i][k].value == results[i]) {
              res.results.push(
                JSON.parse(JSON.stringify(this.shaftList[i][k])),
              );
              // 延迟滚动
              setTimeout(() => {
                this.translateY.splice(i, 1, k * -100);
              }, i * this.delay);
              break;
            }
          }
        }
      }
      return res;
    },
    // 摇奖停止
    stop() {
      this.rollState = 'stop';
      this.lampTimer && clearInterval(this.lampTimer);
      this.$nextTick(function () {
        let tolerance =
          (this.shaftList[0].length / this.prizeList.length - 1) *
          this.prizeList.length *
          100; //公差
        tolerance = (this.direction == 'up' && tolerance) || -tolerance;
        // 停止滚动之后，位移到 最前面/最后面 对应位置，为下一次摇奖留下滚动空间，实现多次摇奖无缝滚动效果
        for (let i = 0, len = this.translateY.length; i < len; i++) {
          let topY = this.translateY[i] + tolerance;
          this.translateY.splice(i, 1, topY);
        }
      });
    },
    // 两边的小灯切换
    startSwitchLamp() {
      this.lampTimer = setInterval(() => {
        if (this.rollState != 'stop') {
          // #ifndef APP-PLUS
          if (this.direction == 'up') {
            this.lamps.push(this.lamps.shift());
          } else {
            this.lamps.unshift(this.lamps.pop());
          }
          // #endif

          // #ifdef APP-PLUS
          if (this.direction == 'up') {
            const tmp = this.lamps[0];
            [this.lamps[0], this.lamps[1], this.lamps[2], this.lamps[3]] = [
              this.lamps[1],
              this.lamps[2],
              this.lamps[3],
              this.lamps[4],
            ];
            this.$nextTick(function () {
              this.lamps[4] = tmp;
            });
          } else {
            const tmp = this.lamps[4];
            [this.lamps[1], this.lamps[2], this.lamps[3], this.lamps[4]] = [
              this.lamps[0],
              this.lamps[1],
              this.lamps[2],
              this.lamps[3],
            ];
            this.$nextTick(function () {
              this.lamps[0] = tmp;
            });
          }
          // #endif
        }
      }, 50);
    },
    // 打乱顺序
    shuffle(arr) {
      let tmpArr = JSON.parse(JSON.stringify(arr));
      for (let i = 1; i < tmpArr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [tmpArr[i], tmpArr[random]] = [tmpArr[random], tmpArr[i]];
      }
      // 保证最低有40个奖品列表，保证滚动摇奖时候效果
      // 如果抽奖总时长比较长时候，请适当调大40
      let len = Math.ceil(40 / arr.length); //倍数
      let tmpShaft = [];
      while (len > 0) {
        tmpShaft.push(...tmpArr);
        len--;
      }
      return JSON.parse(JSON.stringify(tmpShaft));
    },
  },
};
</script>
<style lang="scss" scoped>
.shell {
  width: 630rpx;
  height: 352rpx;
  background-image: linear-gradient(to right, #6543bc, #754eae);
  border-radius: 50rpx;
  display: flex;
  align-items: center;
  .l,
  .r {
    flex: 0 0 auto;
    width: 36rpx;
    height: 260rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .lamp {
      width: 14rpx;
      height: 14rpx;
      // box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.5);

      border-radius: 50%;
    }
  }
  .l {
    padding-left: 10rpx;
  }
  .r {
    padding-right: 10rpx;
  }
  .c {
    flex: 1 1 auto;
    width: 540rpx;
    height: 270rpx;
    background-color: #8461e9;
    border: solid 1rpx #6443b6;
    // box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.2);
    border-radius: 30rpx;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .HMSM {
      width: 510rpx;
      height: 240rpx;
      position: relative;
      .HMSM-display-bg {
        width: 100%;
        height: 240rpx;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .box {
          width: 160rpx;
          height: 240rpx;
          // background-color: #fff;
          background-image: linear-gradient(
            to top,
            #e4defc,
            rgba(255, 255, 255, 0)
          );
          box-shadow: 0 0 2px rgba($color: #fff, $alpha: 1);
          border: solid 1px #9d82ea;
          box-sizing: border-box;
          &:first-child {
            border-radius: 20rpx 0 0 20rpx;
          }
          &:last-child {
            border-radius: 0 20rpx 20rpx 0;
          }
        }
      }
      .HMSM-display {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
        width: 100%;
        height: 240rpx;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 20rpx;
        .HMSM-shaft {
          width: 160rpx;
          transition-property: none;
          transition-duration: 0s;

          &.roll_animation {
            transition-property: transform;
            transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
          }
          > .img-view {
            width: 160rpx;
            height: 240rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background-color: #fff;

            .image {
              width: 160rpx;
              height: 240rpx;
            }
          }
        }
      }
    }
  }
}
</style>
