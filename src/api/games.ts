import {request} from './';
import {IGame} from './game';

export type FetchGamesRequest = {
  page?: number;
};

export function fetchGames(params?: FetchGamesRequest) {
  return request<IGame[]>({
    method: 'get',
    url: '/games',
    params
  });
}

export function fetchNewGame() {
  return request<IGame>({
    method: 'post',
    url: '/games',
  });
}
