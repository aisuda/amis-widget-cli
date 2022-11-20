/**
 * @file 编辑器扩展, 增加自定义组件
 */
import { registerAmisEditorPlugin } from 'amis-widget';

export class InfoCardPlugin {
  rendererName = 'react-info-card-container';
  $schema = '/schemas/UnkownSchema.json';
  name = 'react-info-card-container';
  description = '卡片容器';
  tags = ['自定义', '容器'];
  icon = 'fa fa-file-code-o';
  scaffold = {
    type: 'react-info-card-container',
    label: 'react-info-card-container',
    name: 'react-info-card-container',
    body: [
      // 容器类字段
      {
        type: 'container',
        body: [
          {
            type: 'tpl',
            tpl: '自定义容器区',
            inline: false,
          },
        ],
      },
    ],
  };
  previewSchema = {
    type: 'react-info-card-container',
    label: 'react-info-card-container',
    body: '内容',
  };

  // 容器类组件必需字段
  regions = [
    {
      key: 'body',
      label: '内容区',
    },
  ];

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
  rendererName: 'react-info-card-container',
  name: 'react-info-card-container',
  // description: '信息展示卡片',
  // tags: ['展示'],
  order: 99,
  // icon: 'fa fa-file-code-o',
  // panelTitle: '配置'
});

export default InfoCardPlugin;
