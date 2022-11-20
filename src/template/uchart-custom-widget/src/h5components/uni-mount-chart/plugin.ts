/**
 * @file 编辑器扩展, 增加自定义插件（组件物料面板展示需要）
 */
// @ts-ignore
import { registerPlugin } from 'vue3-aipage-widget/dist/index.umd';

const mountChartPlugin = {
  name: '山峰图',
  description: '圆角山峰图',
  componentId: 'uni-mount-chart',
  id: 'uni-mount-chart',
  tags: ['图表组件', '跨端组件'], // 组件分类
  pluginIcon: 'chart-plugin',
  order: 1, // 展示顺序（从小到大展示）
  type: 'element', // 渲染器类型
  device: ['mobile', 'app'], // 设置类型，目前支持3种类型: pc、mobile、app
  docLink: '',
  demoProperties: {
    componentId: 'uni-mount-chart',
    type: 'element',
    componentProperties: {
      data: {
        series: [
          {
            data: [
              { name: '一班', value: 82 },
              { name: '二班', value: 63 },
              { name: '三班', value: 86 },
              { name: '四班', value: 65 },
              { name: '五班', value: 79 },
            ],
          },
        ],
      },
      style: {},
    },
  },
  panelControls: {
    type: 'tabs',
    tabs: [
      {
        title: '属性',
        controls: [
          {
            type: 'setting-list',
            name: 'data.series[0].data',
            label: '图表数据',
            mode: 'normal',
            fullSize: true,
            setting: [
              {
                type: 'input-text',
                name: 'name',
                label: '指标',
                placeholder: '请输入奖品名称',
              },
              {
                type: 'input-number',
                name: 'value',
                label: '数值',
              },
            ],
            enableDataBinding: true, // 有这个属性则组件会自动开启动态数据绑定
          },
        ],
      },
      {
        title: '外观',
        controls: [
          {
            title: '布局',
            type: 'collapse',
            controls: [
              {
                type: 'button-icon-group',
                name: 'style.display',
                label: '显示',
                value: 'block',
                options: [
                  {
                    label: '块级(block)',
                    icon: 'block',
                    value: 'block',
                  },
                  {
                    label: '行内区块(inline-block)',
                    icon: 'inlineBlock',
                    value: 'inline-block',
                  },
                  {
                    label: '行内元素(inline)',
                    icon: 'inline',
                    value: 'inline',
                  },
                ],
              },
              {
                name: 'style',
                type: 'whSet',
                label: '宽度',
                options: [
                  {
                    label: '',
                    value: 'width',
                  },
                ],
              },
            ],
          },
          {
            type: 'collapse',
            title: '边距',
            controls: {
              name: 'style.box',
              type: 'boxModel',
              label: false,
            },
          },
        ],
      },
    ],
  },
};

// 注册自定义插件（aipage-editor组件物料面板需要）
registerPlugin(mountChartPlugin);

export default mountChartPlugin;
