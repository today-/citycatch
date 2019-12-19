import {request} from './';

export type IUser = {
  id: number;
  name: string;
  pic?: string;
};

export type IProfileRequest = {
  name: string;
  email?: string;
};

export function fetchUser() {
  return request<IUser>({
    method: 'get',
    url: '/user'
  });
}

export function fetchProfile(params: IProfileRequest) {
  return request<IUser>({
    method: 'patch',
    url: '/profile',
    data: params
  });
}
