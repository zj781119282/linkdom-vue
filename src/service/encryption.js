/**
 * 使用Crypto-js对进行AES加密的服务
 */

import Crypto from 'crypto-js';

const key = Crypto.enc.Utf8.parse('y2W89L6BkRAFljhN');
const iv = Crypto.enc.Utf8.parse('dMitHORyqbeYVE0o');
const mode = Crypto.mode.CBC;
//const padding = Crypto.pad.Pcks7;

export const encode = (data) => {
  const encrypted = Crypto.AES.encrypt(data, key, {
    iv,
    mode,
    //padding,
  });
  return encrypted.toString();
};

export const decode = (encrypted) => {
  const decrypted = Crypto.AES.decrypt(encrypted, key, {
    iv,
    mode,
    //padding,
  });
  return decrypted.toString(Crypto.enc.Utf8);
};
