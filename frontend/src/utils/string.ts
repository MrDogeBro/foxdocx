export const replaceMultiple = (str: string, map: Map<string, string>) => {
  let re = new RegExp(Array.from(map.keys()).join('|'), 'gi');

  return str.replace(re, (matched) => {
    return map.get(matched.toLowerCase());
  });
};
