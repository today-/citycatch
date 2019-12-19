import 'whatwg-fetch';
import {getCookie} from '~/utils/getCookie';

type RequestParams = {
  url: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  data?: {[k: string]: any};
  params?: {[k: string]: any};
}

export async function request<T = any>({url, method, params, data}: RequestParams): Promise<T> {
  let body;
  if (data) {
    body = JSON.stringify(data)
  }
  if (params) {
    url = url + '?' + new URLSearchParams(Object.entries(params)).toString()
  }

  const response = await window.fetch(`/api${url}`, {
    body,
    method: method.toUpperCase(),
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': getCookie('XSRF-TOKEN')
    },
  });

  const result = await response.json().catch(_ => ({}));

  if (!response.ok) {
    throw new Error(String(result.name || result.message || response.status));
  }

  return result;
}
