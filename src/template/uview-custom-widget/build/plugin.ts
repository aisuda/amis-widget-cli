/**
 * @file 编辑器扩展, 增加自定义插件（组件物料面板展示需要）
 */
// @ts-ignore
import { registerPlugin } from 'vue3-aipage-widget';

const InfoCardPlugin = {
  name: '物流节点',
  description: 'uview版TimeLine组件示例',
  componentId: 'uni-time-line',
  id: 'uni-time-line',
  tags: ['uview组件'], // 组件分类
  pluginIcon: 'cards-plugin',
  order: 1, // 展示顺序（从小到大展示）
  type: 'element', // 渲染器类型
  device: ['mobile', 'app'], // 设置类型，目前支持3种类型: pc、mobile、app
  docLink: '',
  demoProperties: {
    componentId: 'uni-time-line',
    type: 'element',
    componentProperties: {
      data: {
        timeLine: [
          {
            status: '待取件',
            desc: '[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。',
            time: '2019-05-12 12:12',
          },
          {
            status: '运输中',
            desc: '【深圳市】日照香炉生紫烟，遥看瀑布挂前川，飞流直下三千尺，疑是银河落九天。',
            time: '2019-05-10 12:12',
          },
          {
            status: '运输中',
            desc: '【深圳市】日照香炉生紫烟，遥看瀑布挂前川，飞流直下三千尺，疑是银河落九天。',
            time: '2019-05-08 12:12',
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
                name: 'data.timeLine',
                type: 'setting-list',
                label: '物流节点',
                setting: [
                  {
                    type: 'input-text',
                    name: 'status',
                    label: '状态',
                  },
                  {
                    type: 'textarea',
                    name: 'desc',
                    label: '详细',
                  },
                  {
                    type: 'input-date',
                    name: 'time',
                    label: '时间',
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
registerPlugin(InfoCardPlugin);

export default InfoCardPlugin;
