import {ICity} from '~/api/city';

export type ICoords = {
  lat: number;
  lng: number;
};

export const getCoords = (city: ICity): ICoords => ({
  lat: Number(city.lat),
  lng: Number(city.lng)
});
