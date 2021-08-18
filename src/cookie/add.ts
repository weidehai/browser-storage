export function setCookie(
  key: string,
  value: string|undefined|null,
  options: cookieProps
): boolean {
  document.cookie = generator(key, value, options);
  return true;
}

export function generator(
  key: string,
  value: string|undefined|null,
  options: cookieProps = {}
) {
  if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
    return "";
  }
  let end = options.end ?? "";
  let expires = "";
  if (end) {
    expires = parseExpires(end);
  }
  let domain = options.domain ?? "";
  let path = options.path ?? "";
  let secure = options.secure ?? "";
  return `${encodeURIComponent(key)}=${value?encodeURIComponent(value):""}${expires}${
    domain ? ";domain=" + domain : ""
  }${path ? ";path=" + path : ""}${secure ? "secure" : ""}`;
}

function parseExpires(end: string | number | Date): string {
  let expires = "";
  switch (end.constructor) {
    case Number:
      expires =
        end === Infinity
          ? ";expires=Fri, 31 Dec 9999 23:59:59 GMT"
          : ";max-age=" + end;
      break;
    case String:
      expires = ";expires=" + end;
      break;
    case Date:
      expires = ";expires=" + (end as Date).toUTCString();
      break;
  }
  return expires;
}
