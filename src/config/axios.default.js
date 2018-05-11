/**
 * 一些axios全局默认配置项
 */

import axios from 'axios';

export default function () {
  //axios.defaults.baseURL = 'http://api.coolbit.pro';
  axios.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
}
