import {request} from './';
import {ICity} from './city';

export type ISearchRequest = {
  id: number;
  q: string;
};

export function fetchSearch(params: ISearchRequest) {
  return request<ICity[]>({
    method: 'get',
    url: `/games/${params.id}/search`,
    params
  });
}
