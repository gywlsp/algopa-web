export const getQueryString = (queryParameter: Record<string, any> = {}) =>
  Object.entries(queryParameter).reduce((acc, curr, i) => {
    const [key, value] = curr;
    return acc.concat(`${i ? '&' : '?'}${key}=${value}`);
  }, '');

export const validateNicknameFormat = (nickname: string): boolean => {
  if (!nickname) {
    return true;
  }
  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  return regex.test(nickname);
};
