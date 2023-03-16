/**
 * @file 编辑器扩展, 增加自定义组件
 */
// @ts-ignore
import { registerAmisEditorPlugin } from 'amis-widget';

export class InfoCardPlugin {
  rendererName = 'vue-info-card';
  $schema = '/schemas/UnkownSchema.json';
  name = 'vue组件';
  description = '信息展示卡片';
  tags = ['自定义'];
  icon = 'fa fa-file-code-o';
  /* scaffold 放单个plugin
  scaffold = {
    type: 'vue-info-card',
    label: 'vue组件1',
    name: 'info-card1'
  }
  */
  // scaffolds 中可以放置多个plugin信息
  scaffolds = [
    {
      type: 'vue-info-card',
      label: 'vue组件1',
      name: 'info-card1',
      scaffold: {
        type: 'vue-info-card',
        label: 'vue组件1',
        title:
          'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
        backgroundImage:
          'https://suda.cdn.bcebos.com/widget-tpl/%E6%99%BA%E8%83%BD%E7%94%9F%E6%80%81.png',
        img_count: 5,
        comment_count: 2021,
      },
    },
    {
      type: 'vue-info-card',
      label: 'vue组件2',
      name: 'info-card2',
      tags: ['自定义2'],
      description: '信息展示卡片2',
      scaffold: {
        type: 'vue-info-card',
        label: 'vue组件2',
        title:
          '爱速搭是百度智能云推出的低代码开发平台，它灵活性强，对开发者友好，在百度内部大规模使用，有超过 4w 内部页面是基于它制作的，是百度内部中台系统的核心基础设施。',
        backgroundImage:
          'https://suda.cdn.bcebos.com/widget-tpl/%E4%BA%92%E9%80%9A%E4%BA%92%E8%81%94.png',
        img_count: 3,
        comment_count: 2022,
      },
    },
  ];
  previewSchema = {
    type: 'vue-info-card',
    label: 'vue-info-card',
  };

  panelTitle = '配置';

  panelControls = [
    {
      type: 'textarea',
      name: 'title',
      label: '卡片title',
      value:
        'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
    },
    {
      type: 'text',
      name: 'backgroundImage',
      label: '展示图片',
      value:
        'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
    },
    {
      type: 'input-number',
      name: 'img_count',
      label: '图片数量',
      value: 3,
    },
    {
      type: 'input-number',
      name: 'comment_count',
      label: '评论数',
      value: 2021,
    },
  ];
}

registerAmisEditorPlugin(InfoCardPlugin);

export default InfoCardPlugin;
