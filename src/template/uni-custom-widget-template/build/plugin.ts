/**
 * @file 编辑器扩展, 增加自定义插件（组件物料面板展示需要）
 */
// @ts-ignore
import { registerPlugin } from 'vue3-aipage-widget';

const InfoCardPlugin = {
  name: '信息卡片',
  description: 'uniapp版信息展示卡片',
  componentId: 'uni-info-card',
  id: 'uni-info-card',
  tags: ['跨端组件'], // 组件分类
  pluginIcon: 'cards-plugin',
  order: 1, // 展示顺序（从小到大展示）
  type: 'element', // 渲染器类型
  device: ['mobile', 'app'], // 设置类型，目前支持3种类型: pc、mobile、app
  docLink: '',
  demoProperties: {
    componentId: 'uni-info-card',
    type: 'element',
    componentProperties: {
      data: {},
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
                label: 'uni卡片title',
                value:
                  'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                enableDataBinding: true, // 有这个属性则组件会自动开启动态数据绑定
              },
              {
                type: 'text',
                name: 'data.backgroundImage',
                label: '展示图片',
                value:
                  'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
              },
              {
                type: 'input-number',
                name: 'data.img_count',
                label: '图片数量',
                value: 3,
              },
              {
                type: 'input-number',
                name: 'data.comment_count',
                label: '评论数',
                value: 2021,
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
registerPlugin(InfoCardPlugin);

export default InfoCardPlugin;
