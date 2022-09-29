// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget';
// @ts-ignore
import UniLotteryCard from '../src/components/uni-lottery-card/uni-lottery-card';

registerRenderer(UniLotteryCard, {
  type: 'uni-lottery-card',
  framework: 'vue3',
});
