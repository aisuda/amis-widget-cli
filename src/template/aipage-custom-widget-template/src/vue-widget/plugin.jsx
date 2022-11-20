/**
 * @file 编辑器扩展, 增加自定义插件（组件物料面板展示需要）
 */
import { registerPlugin } from 'aipage-widget';

const InfoCardPlugin = {
  name: 'vue信息卡片',
  description: '信息展示卡片',
  componentId: 'vue-info-card',
  id: 'vue-info-card',
  tags: ['自定义组件'], // 组件分类
  pluginIcon: 'cards-plugin',
  order: 1, // 展示顺序（从小到大展示）
  type: 'element', // 渲染器类型
  device: ['pc', 'mobile'], // 设置类型，目前支持3种类型: pc、mobile、app
  docLink: '',
  demoProperties: {
    componentId: 'vue-info-card',
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
                label: '卡片title',
                value:
                  'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
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

registerPlugin(InfoCardPlugin);

export default InfoCardPlugin;
