import CryptoJS from 'crypto-js';

export const getEncryptedString = (str: string) => {
  if (!str) {
    return str;
  }
  const encJson = CryptoJS.AES.encrypt(
    JSON.stringify(str),
    process.env.NEXT_PUBLIC_CRYPTO_KEY
  ).toString();
  const encStr = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(encJson)
  );
  return encStr;
};

export const getDecryptedString = (encryptedStr: string) => {
  if (!encryptedStr) {
    return encryptedStr;
  }
  const decData = CryptoJS.enc.Base64.parse(encryptedStr).toString(
    CryptoJS.enc.Utf8
  );
  const bytes = CryptoJS.AES.decrypt(
    decData,
    process.env.NEXT_PUBLIC_CRYPTO_KEY
  ).toString(CryptoJS.enc.Utf8);
  const decStr = JSON.parse(bytes);
  return decStr;
};
