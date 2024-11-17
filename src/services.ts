export const getData = (key: string) => {
  let initial;
  const data = window.localStorage.getItem(`${key}`);
  if (data) {
    initial = JSON.parse(data);
  }
  return initial;
};

export const saveData = (content: string, key: string) => {
  window.localStorage.setItem(key, content);
};
