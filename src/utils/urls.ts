export const getFirstPathParam = (path: string): string => path.split('/').filter((pathParam) => !!pathParam)[0];

export const slugify = (path: string, searchValue: string, replaceValue: string): string =>
  path ? path.replaceAll(searchValue, replaceValue) : path;
