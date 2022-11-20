import * as React from 'react';
import { Empty } from 'antd';
import './style.scss'; // 组件内容样式

interface InfoCardProps {
  title: string;
  backgroundImage: string;
  img_count: number;
  comment_count: number;
}

export default class InfoCard extends React.PureComponent<InfoCardProps> {
  constructor(props: InfoCardProps) {
    super(props);
    this.agreeDataFormat = this.agreeDataFormat.bind(this);
  }

  agreeDataFormat(agreeData: number) {
    if (agreeData && agreeData <= 9999) {
      return agreeData;
    } else if (agreeData && agreeData > 9999) {
      return `${Math.floor(agreeData / 1000) / 10}w`;
    }
    return '';
  }
  render() {
    const { title, backgroundImage, img_count, comment_count } = this.props;
    const curBackgroundImage =
      backgroundImage ||
      'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg';
    return (
      <div className="news-card">
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
          {comment_count && comment_count > 0 && (
            <div className="cmt-num right">
              {this.agreeDataFormat(comment_count)}评
            </div>
          )}
        </div>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<>暂无内容</>}
        />
      </div>
    );
  }
}
