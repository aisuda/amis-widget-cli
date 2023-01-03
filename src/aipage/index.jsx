/**
 * @file 页面编辑器外围, 内部基于 amis-editor
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'amis';
import { getFetcher } from './helper';
import Header from './header/index';
import APEditor from './apEditor';

// import styles
import 'amis-ui/lib/themes/default.css';
import 'amis-ui/lib/themes/cxd.css';
import './fontawesome-free/all.min.css';
import './fontawesome-free/v4-shims.css';
import './style.scss'; // demo样式文件

// 默认schema数据（aipage-editor专用）
const aipageEditorDefaultSchema = {
  id: '20230103',
  title: 'aipage-editor',
  url: '',
  seo: {
    title: '',
    description: '',
    keywords: ''
  },
  structor: {
    id: 'root',
    type: 'root',
    componentId: 'page',
    children: [],
    componentProperties: {
      base: {},
      data: {},
      style: {}
    }
  }
};

class AipageEditorDemo extends React.Component {
  state = {
    theme: 'cxd',
    preview: false,
    mobile: false,
    deviceType: 'pc',
    isLoading: false,
    schema: this.getSchema()
  };

  constructor(props) {
    super(props);
    this.getSchema = this.getSchema.bind(this);
    this.setDeviceType = this.setDeviceType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.handlePreviewChange = this.handlePreviewChange.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);
  }

  getSchema() {
    const curSchemaStr = localStorage.getItem('aipage_editor_schema');
    const curSchema = curSchemaStr ? JSON.parse(curSchemaStr) : aipageEditorDefaultSchema;
    return curSchema;
  }

  setDeviceType(device) {
    this.setState({
      deviceType: device
    });
  }

  handleChange = (value) => {
    this.setState({
      schema: value
    });
  };

  onSave = () => {
    const curSchema = this.state.schema || {};
    localStorage.setItem('aipage_editor_schema', JSON.stringify(curSchema));
    alert('保存成功！');
  };

  handlePreviewChange = (preview) => {
    this.setState({
      preview: !!preview
    });
  };

  togglePreview = () => {
    this.handlePreviewChange(!this.state.preview);
  };

  handleMobileChange = (isMobile) => {
    this.setState({
      isMobile: !!isMobile
    });
  };

  /**
   * 组件模板类型：amis组件、门户组件、跨端组件、快应用、快应用卡片。
   * 说明：
   * 0. 「amis组件」组件模板类型支持 pc/h5，在amis-editor中编辑和使用，但仅限于amis编辑器搭建的页面中使用；
   * 1. 「门户组件」组件模板类型支持 pc/h5，在aipage-editor门户编辑器中编辑和使用，仅PC和H5模式（device=pc 或 device=h5）下可见，如果需要在展示页面中使用，请选「门户组件」；
   * 2. 「跨端组件」组件模板类型支持 h5/小程序/app，在aipage-editor小程序编辑器中编辑和使用，仅移动应用页面（device=app）中可见；
   * 3. 「快应用」组件模板类型支持快应用，在aipage-editor快应用编辑器中编辑和使用，仅快应用页面（device=quickapp）中可见；
   * 4. 「快应用卡片」组件模板类型支持快应用卡片，在aipage-editor快应用编辑器中编辑和使用，仅快应用卡片（device=quickapp-card）中可见；
   */

  render() {
    const { store, match, history, location, ...rest } = this.props;
    const { theme, preview, mobile, schema, deviceType, isLoading } = this.state;

    const devices = {
      1: 'pc', // 默认应用
      2: 'app', // 移动应用
      3: 'quickapp', // 快应用
      4: 'quickapp-card' // 快应用卡片
    };

    const curContext = {
      amisUser: {
        name: '用户名test',
        emai: 'test@baidu.com',
        id: '用户名ID',
        avatar: 'https://xx',
        nickName: '用户名昵称'
      },
      amisApp: {
        id: '01',
        key: 'test',
        env: 'dev'
      },
      amisCompany: {
        id: '02',
        key: 'aipage'
      },
      showWidgetTemplates: false, // 用于显示组件模板
      disabledGlobalComponent: true, // 用于隐藏公共组件
      disabledDatabase: true, // 用于隐藏数据源
      disabledPlugins: ['todo', 'form-entity', 'user-select', 'department-select']
    };

    return (
      <>
        <Header
          deviceType={deviceType}
          pageName={'aipage编辑器'}
          savePage={this.onSave}
          setDeviceType={this.setDeviceType}
          togglePreview={this.togglePreview}
        />
        <div className="editor-body">
          <APEditor
            preview={preview}
            deviceType={deviceType}
            value={schema}
            onChange={this.handleChange}
            onSave={this.onSave}
            fetcher={getFetcher()}
            ctx={{
              ...curContext,
              amisStore: store
            }}
          />
        </div>
      </>
    );
  }
}

ReactDOM.render(<AipageEditorDemo />, document.getElementById('root'));
