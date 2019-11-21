export const findAndReplace = (find: string, replace: string, text: string) => {
  const word = new RegExp(find, "");
  return text.replace(word, replace);
};
