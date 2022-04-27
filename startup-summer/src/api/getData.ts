export const getData = async (url: string) => {
  return await (await fetch(url)).json();
};
