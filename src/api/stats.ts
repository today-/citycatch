import {request} from './';
import {IUser} from './user';
import {IGame} from './game';
import {IGameItem} from './item';

export type ITopUser = IUser & {
  distance?: number;
  gamesCount?: number;
  winsCount?: number;
  winsPercent?: number;
};

export type ITopCategory = {
  games: number;
  items: number;
  wins?: number;
  winsPercent?: number;
  users?: number;
};

type IStatsPair = {
  from: IGameItem;
  to: IGameItem;
  gameId: number;
};

export type IStats = {
  total: ITopCategory;
  user: ITopCategory;
  top: {
    byDistance: ITopUser[],
    byGames: ITopUser[],
    byWins: ITopUser[],
  };
  games: {
    byDistance: IGame[];
    byItems: IGame[];
  };
  pairs: {
    far: IStatsPair;
    short: IStatsPair;
  }
};

export function fetchStats() {
  return request<IStats>({
    method: 'get',
    url: `/stats`,
  });
}
