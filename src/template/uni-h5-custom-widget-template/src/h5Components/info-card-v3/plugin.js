/**
 * @file 编辑器扩展, 增加自定义插件（组件物料面板展示需要）
 */
import { registerPlugin } from 'vue3-aipage-widget';

const InfoCardPlugin = {
  name: 'JSON数据卡片',
  description: 'JSON数据卡片',
  componentId: 'h5-uni-info-card-v3',
  id: 'h5-uni-info-card-v3',
  tags: ['自定义组件', '跨端组件'], // 组件分类
  pluginIcon: 'cards-plugin',
  order: 1, // 展示顺序（从小到大展示）
  type: 'element', // 渲染器类型
  device: ['mobile', 'app', 'quickapp', 'quickapp-card'], // 设置类型，目前支持3种类型: pc、mobile、app、quickapp、quickapp-card
  docLink: '',
  demoProperties: {
    componentId: 'h5-uni-info-card-v3',
    type: 'element',
    componentProperties: {
      data: {
        jsonData: {
          componentId: 'h5-uni-info-card-v3',
          type: 'element',
          componentProperties: {
            data: {},
            style: {},
          },
        },
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
                type: 'textarea',
                name: 'data.title',
                label: '卡片title',
              },
              {
                type: 'json',
                name: 'data.jsonData',
                label: 'JSON数据',
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

registerPlugin(InfoCardPlugin);

export default InfoCardPlugin;
