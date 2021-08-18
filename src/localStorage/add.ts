export function setLsItem(key: string, value: string):void {
  return localStorage.setItem(key,JSON.stringify(value));
}

interface lsItem{
  key: string;
  value: string;
}

export function setLsItems(items:Array<lsItem>):void{
  items.forEach(item=>{
    localStorage.setItem(item.key,JSON.stringify(item.value));
  })
}
