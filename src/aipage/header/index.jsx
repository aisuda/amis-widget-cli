/**
 * @file 小程序编辑器头部
 */

import React from 'react';
import cx from 'classnames';
import { ICONS } from './icons';
import './index.less';

function Header({ pageName, deviceType, setDeviceType, togglePreview, savePage }) {
  return (
    <div className="ap-EditorHeader">
      {pageName && (
        <div className="ap-EditorHeader-navigation">
          <span className="page-navigation-name">{pageName || '页面编辑器'}</span>
          <i className="fa fa-angle-down"></i>
        </div>
      )}

      <div className="ap-EditorHeader-buttons ap-EditorHeader-devices">
        {['pc', 'mobile', 'app', 'quickapp', 'quickapp-card'].map((device) => {
          return (
            <span
              key={device}
              title={device}
              className={cx('control-button ap-EditorHeader-device', {
                active: device === deviceType
              })}
              onClick={() => {
                setDeviceType(device);
              }}
            >
              {ICONS[device]}
            </span>
          );
        })}
      </div>

      {/* 操作按钮  */}
      <div className="ap-EditorHeader-buttons">
        <div className="control-button group">
          <div className="control-button" onClick={togglePreview}>
            预览
          </div>
          <div className="control-button" onClick={savePage}>
            保存
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
