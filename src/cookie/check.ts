export function hasItem(name:string):boolean {
  return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(name).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
}
