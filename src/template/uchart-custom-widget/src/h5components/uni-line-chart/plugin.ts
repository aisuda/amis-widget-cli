/**
 * @file 编辑器扩展, 增加自定义插件（组件物料面板展示需要）
 */
// @ts-ignore
import { registerPlugin } from 'vue3-aipage-widget';

const lineChartPlugin = {
  name: '折线图',
  description: '基本折线图',
  componentId: 'uni-line-chart',
  id: 'uni-line-chart',
  tags: ['图表组件', '跨端组件'], // 组件分类
  pluginIcon: 'chart-plugin',
  order: 1, // 展示顺序（从小到大展示）
  type: 'element', // 渲染器类型
  device: ['mobile', 'app'], // 设置类型，目前支持3种类型: pc、mobile、app
  docLink: '',
  demoProperties: {
    componentId: 'uni-line-chart',
    type: 'element',
    componentProperties: {
      data: {
        series: [
          {
            name: '成交量A',
            data: [35, 8, 25, 37, 4, 20],
          },
          {
            name: '成交量B',
            data: [70, 40, 65, 100, 44, 68],
          },
          {
            name: '成交量C',
            data: [100, 80, 95, 150, 112, 132],
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
            type: 'collapse',
            title: '数据',
            controls: [
              {
                name: 'data.series',
                type: 'setting-list',
                label: '饼图数据',
                setting: [
                  {
                    type: 'input-text',
                    name: 'name',
                    label: '指标',
                    placeholder: '请输入奖品名称',
                  },
                  {
                    type: 'input-array',
                    name: 'data',
                    label: '数值',
                    inline: true,
                    removable: true,
                    draggable: true,
                    items: {
                      type: 'input-number',
                    },
                  },
                ],
                enableDataBinding: true, // 有这个属性则组件会自动开启动态数据绑定
              },
            ],
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
registerPlugin(lineChartPlugin);

export default lineChartPlugin;
