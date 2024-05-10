export function getData(KEY: string) {
  try {
    const data = localStorage.getItem(KEY) ?? "[]";
    return JSON.parse(data);
  } catch (e) {
    console.warn(e);
  }
}

export function storeData(KEY: string, value: unknown) {
  try {
    const stringifiedData = JSON.stringify(value);
    localStorage.setItem(KEY, stringifiedData);
  } catch (e) {
    console.warn(e);
  }
}
