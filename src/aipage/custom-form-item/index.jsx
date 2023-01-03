import React from 'react';
import { FormItem } from 'amis-core';
import ImageManager from './ImageManager';

// 图片选择器
export class ImageManagerModel extends React.Component {
  render() {
    return <ImageManager {...this.props} />;
  }
}

FormItem({ type: 'image-manager' })(ImageManagerModel);
