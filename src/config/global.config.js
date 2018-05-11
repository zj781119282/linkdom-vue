const host = 'http://linkdam.com';

export default {
  host,
  urls: {
    productInfo: '/product/info', // 产品信息
    login: '/user/login', // 登录
    register: '/user/register', // 注册
    registerVerifyCode: '/user/get_register_verify_code', // 获取注册验证码
    verify: '/user/verify', // 校验验证码
    defaultCountryCode: '/commons/verify_code/get_default_country_code', // 获取默认国家区号
    countryCodes: '/commons/verify_code/get_country_codes', // 获取国家区号
  },
}
