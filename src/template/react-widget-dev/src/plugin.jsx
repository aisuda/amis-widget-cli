/**
 * @file 编辑器扩展, 增加自定义组件
 */
import { registerAmisEditorPlugin } from 'amis-widget';
import InfoCardPlugin from './plugins/infoCardPlugin'

registerAmisEditorPlugin(InfoCardPlugin, {
    rendererName: 'react-info-card',
    name: 'react-info-card',
    // description: '信息展示卡片',
    // tags: ['展示'],
    order: 99,
    // icon: 'fa fa-file-code-o',
    // panelTitle: '配置'
});