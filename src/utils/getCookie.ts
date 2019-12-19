export function getCookie(name: string) {
  if (!document.cookie) {
    return null;
  }

  const xsrfCookies = document.cookie.split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith(name + '='));

  if (xsrfCookies.length === 0) {
    return null;
  }

  return decodeURIComponent(xsrfCookies[0].split('=')[1]);
}

export function setCookie(name: string, value: string) {
  const options: {[k: string]: any} = {path: '/'};

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    updatedCookie += "=" + options[optionKey];
  }
  document.cookie = updatedCookie;
}
