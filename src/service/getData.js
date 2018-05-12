/**
 * 项目中所有get方式获取数据的方法
 */

import axios from 'axios';
import Cookies from 'js-cookie';
import config from 'config/global.config';
import axiosDefault from 'config/axios.default';

axiosDefault();

export default function () {
  const method = 'get';
  const urls = config.urls;
  const getFunction = (url, params = {}, withToken = false) => {
    let headers;
    if (withToken) {
      headers = { xtoken: Cookies.get('xtoken') };
    }
    return axios({
      method,
      url,
      headers,
      params,
    })
      .then(res => res.data);
  };
  return {
    getProductInfo() {
      return getFunction(urls.productInfo);
    },
    getDefaultCountryCode() {
      return getFunction(urls.defaultCountryCode);
    },
    getCountryCodes() {
      return getFunction(urls.countryCodes);
    },
    getCart() {
      return getFunction(urls.getCart, {}, true);
    },
    getAddress() {
      return getFunction(urls.getAddress, {}, true);
    },
  }
}
