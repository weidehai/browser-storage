import {hasItem} from './check'

export function rmCookie(name:string,domain:string,path:string):boolean{
    if (!name || !hasItem(name)) { return false; }
    document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( domain ? "; domain=" + domain : "") + ( path ? "; path=" + path : "");
    return true;
}
