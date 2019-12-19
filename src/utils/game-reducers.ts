import {IAddItemResponse} from '~/api/item';
import {toServer} from '~/utils/date';
import {IGame} from '~/api/game';

export const gameUpdatedReducer = (game: IGame, payload: IGame) => ({
  ...game,
  order: payload.order,
  participants: payload.participants,
  isParticipating: payload.isParticipating,
  canParticipate: payload.canParticipate
});

export const gameFinishedReducer = (game: IGame, payload: IGame) => ({
  ...game,
  isActive: false,
  canParticipate: false,
  finishedAt: payload.finishedAt || toServer()
});

export const itemAddedReducer = (game: IGame, payload: IAddItemResponse) => {
  const hasItem = game.items.some(i => i.id === payload.item.id);
  const items = hasItem ? game.items : [...game.items, payload.item];

  const participants = hasItem ? game.participants : game.participants.map(p =>
    (p.id === payload.item.participantId) ?
      ({...p, distance: p.distance + Number(payload.item.distance)}) : p
  );

  return {
    ...game,
    items,
    participants,
    order: payload.order,
    lastLetter: payload.lastLetter,
    itemsCount: payload.itemsCount
  };
};

export const getCurrentParticipant = (game: IGame) =>
  (game && game.participants) ?
    game.participants.find(p => p.order === game.order) : null;

export const calcGameDistance = (game: IGame) =>
  (game.participants || []).reduce((a, p) => a + Number(p.distance), 0);
