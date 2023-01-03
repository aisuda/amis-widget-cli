/**
 * @file 展示页面 & 小程序 页面编辑器
 */
import React from 'react';
import APEditor from 'aipage-editor';
import { Renderer } from 'aipage-editor/dist/renderer';
import 'aipage-editor/dist/index.css';

import './custom-form-item'; // 用于覆盖图片资源管理器: 使用默认的图片上传组件

export default class APditor extends React.Component {
  rt = null;

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  componentWillUnmount() {
    this.rt?.();
    this.rt = null;
  }

  render() {
    const {
      fetcher,
      store,
      value,
      preview,
      deviceType,
      getShareKeyPath,
      onChange,
      onPreview,
      onSave,
      onUnDo,
      onReDo,
      ctx
    } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <div className="max-h-48 overflow-y-auto text-danger p-sm">
          <h3 className="m-b-none text-danger">
            编辑器发生了一些错误，请保存刷新：{error.toString()}
          </h3>
        </div>
      );
    }

    return (
      <APEditor
        preview={preview}
        deviceType={deviceType}
        value={value}
        onChange={onChange}
        onUnDo={onUnDo}
        onReDo={onReDo}
        onSave={onSave}
        onPreview={onPreview}
        amisEnv={{
          fetcher: fetcher
        }}
        ctx={ctx}
        renderer={Renderer}
      />
    );
  }
}
