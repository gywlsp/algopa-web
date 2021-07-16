import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';

export const getEncryptedString = (str: string) => {
  if (!str) {
    return str;
  }
  const encrypted = CryptoAES.encrypt(str, process.env.NEXT_PUBLIC_CRYPTO_KEY);
  return encrypted.toString();
};

export const getDecryptedString = (encryptedStr: string) => {
  if (!encryptedStr) {
    return encryptedStr;
  }
  const decrypted = CryptoAES.decrypt(
    encryptedStr,
    process.env.NEXT_PUBLIC_CRYPTO_KEY
  );
  return decrypted.toString(CryptoENC);
};
