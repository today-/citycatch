import {request} from './';
import {IUser} from './user';
import {IGameItem} from './item';

export type IGame = {
  id: number;
  isActive?: boolean;
  isParticipating?: boolean;
  canParticipate?: boolean;
  startedAt?: string;
  finishedAt?: string;
  distance?: number;
  participants?: IParticipant[];
  items?: IGameItem[];
  itemsCount?: number;
  order: number;
  lastLetter?: string;
};

export type IParticipant = {
  id: number;
  order: number;
  distance?: number;
  createdAt: string;
  user: IUser;
};

export type INormalizedGames = {[key: number]: IGame};

export function fetchGame(id: number) {
  return request<IGame>({
    method: 'get',
    url: `/games/${id}`
  });
}

export function fetchParticipateGame(id: number) {
  return request<IGame>({
    method: 'post',
    url: `/games/${id}`
  });
}
