export function getLsItem(key: string):string {
  return JSON.parse(localStorage.getItem(key))
}
