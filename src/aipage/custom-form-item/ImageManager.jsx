/**
 * @file 图片选择器防止组件模板编辑器配置面板渲染异常
 */
import { observer } from 'mobx-react';
import { render } from 'amis';
import moment from 'moment';
import axios from 'axios';

function ImageManager({ onChange, name, value }) {
  let token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

  return render(
    {
      type: 'input-image',
      name,
      value: value,
      onChange: onChange,
      receiver: '/api/upload',
      maxSize: 1024 * 1024 * 5, // 最大1M
      desc: '支持 5M 以内的图片'
    },
    {},
    {
      session: 'inputImage',
      fetcher: ({ url, method, data, config, headers }) => {
        config = config || {};
        config.headers = config.headers || headers || {};
        config.withCredentials = true;
        config.headers['CSRF-Token'] = token;
        config.headers['X-ISUDA-Date'] = moment.utc().format('');

        if (method !== 'post' && method !== 'put' && method !== 'patch') {
          if (data) {
            config.params = data;
          }
          return axios[method](url, config);
        } else if (data && data instanceof FormData) {
          config.headers = config.headers || {};
          config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        } else if (
          data &&
          typeof data !== 'string' &&
          !(data instanceof Blob) &&
          !(data instanceof ArrayBuffer)
        ) {
          data = JSON.stringify(data);
          config.headers['Content-Type'] = 'application/json';
        }

        return axios[method](url, data, config);
      }
    }
  );
}

export default observer(ImageManager);
