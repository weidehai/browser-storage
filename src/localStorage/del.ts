export function delLsItem(key: string): void{
  return localStorage.removeItem(key)
}

export function delLs():void {
  localStorage.clear()
}
