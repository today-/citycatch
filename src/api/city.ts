import {request} from './index';

export type ICity = {
  id: number;
  name: string;
  lat: string,
  lng: string,
  pic?: string;
  population?: number;
  desc?: string,
  url?: string;
  country?: ICountry;
  region?: IRegion;
};

export type ICountry = {
  id: number;
  name: string;
  pic?: string;
  desc?: string;
  url?: string;
};

export type IRegion = {
  id: number;
  name: string;
  pic?: string;
  desc?: string;
  url?: string;
};

export function fetchCity(id: number) {
  return request<ICity>({
    method: 'get',
    url: `/city/${id}`
  });
}
