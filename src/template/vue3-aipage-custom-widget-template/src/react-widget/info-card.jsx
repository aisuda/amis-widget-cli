import * as React from 'react';
import cx from 'classnames';
import { getClasses } from 'vue3-aipage-widget';
import './style.scss'; // 组件内容样式

export default class InfoCard extends React.PureComponent {
  constructor() {
    super();
    this.agreeDataFormat = this.agreeDataFormat.bind(this);
  }
  agreeDataFormat(agreeData) {
    if (agreeData && agreeData <= 9999) {
      return agreeData;
    }
    if (agreeData && agreeData > 9999) {
      return `${Math.floor(agreeData / 1000) / 10}w`;
    }
  }
  render() {
    const { componentProperties, id } = this.props;
    const { data = {}, style = {} } = componentProperties || {};

    const classes = getClasses(this.props);
    const { title, backgroundImage, img_count, comment_count } = data || {};
    const curBackgroundImage =
      backgroundImage ||
      'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg';
    return (
      <div className={cx('news-card', classes)} data-component-id={id}>
        <div className="news-title">
          {title ||
            'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。'}
        </div>
        <div className="item-imgbox">
          <div
            className="news-img"
            style={{ backgroundImage: `url(${curBackgroundImage})` }}
          ></div>
          {img_count > 0 && <div className="img-count">{img_count}</div>}
        </div>
        <div className="news-info">
          <div className="left media-mark">爱速搭 · 低代码平台</div>
          <div className="cmt-num right">
            {this.agreeDataFormat(comment_count) || 0} 评
          </div>
        </div>
      </div>
    );
  }
}
