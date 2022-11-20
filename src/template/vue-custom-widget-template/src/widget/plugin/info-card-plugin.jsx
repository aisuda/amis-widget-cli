/**
 * @file 编辑器扩展, 增加自定义组件
 */
// @ts-ignore
import { registerAmisEditorPlugin } from 'amis-widget';

export class InfoCardPlugin {
  rendererName = 'vue-info-card';
  $schema = '/schemas/UnkownSchema.json';
  name = 'vue-info-card';
  description = '信息展示卡片';
  tags = ['展示', '自定义'];
  icon = 'fa fa-file-code-o';
  scaffold = {
    type: 'vue-info-card',
    label: 'vue-info-card',
    name: 'vue-info-card',
  };
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

registerAmisEditorPlugin(InfoCardPlugin, {
  rendererName: 'vue-info-card',
  name: 'vue-info-card',
  // description: '信息展示卡片',
  // tags: ['展示', '自定义'],
  order: 99,
  // icon: 'fa fa-file-code-o',
  // panelTitle: '配置'
});

export default InfoCardPlugin;
