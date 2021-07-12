export const getQueryString = (queryParameter: Record<string, any>) =>
  Object.entries(queryParameter).reduce((acc, curr, i) => {
    const [key, value] = curr;
    return acc.concat(`${i ? '&' : '?'}${key}=${value}`);
  }, '');
