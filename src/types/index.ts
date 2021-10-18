export type ListRequestParams = {
  limit?: number;
};

export type VariadicTuple<T extends unknown[], U extends unknown[]> = [
  ...T,
  ...U
];

export type Theme = 'dark' | 'light';
