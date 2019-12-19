import {combine, createEvent} from 'effector';
import {createServiceEffect, createServiceStore} from '~/stores';
import {getCurrentParticipant} from '~/utils/game-reducers';
import {getFirst, getLast} from '~/utils/get';
import {userId} from '~/stores/user';
import {fetchGame} from '~/api/game';
import {t} from '~/i18n';

export const resetCurrentGame = createEvent('Clear current game');

export const getGame = createServiceEffect(fetchGame, 'Get game by id');

export const game = createServiceStore(getGame)
  .reset(resetCurrentGame);

export const currentActiveParticipant = game.map(
  ({result}) => result && result.isActive && getCurrentParticipant(result)
);

export const isMyTurn = combine(currentActiveParticipant, userId,
  (current, userId) =>
    Boolean(current && current.user && current.user.id === userId)
);

export const gameItems = game.map(
  ({result}) => result && result.items || []
);

export const gameTitle = combine(gameItems, isMyTurn,
  (items, isMyTurn) => {
    const first = getFirst(items);
    const last = items.length > 1 ? getLast(items) : null;

    if (isMyTurn && last) {
      const letter = String(getLast(last.city.name)).toUpperCase();
      return t('game-title-your-turn', {letter});
    }

    return [first, last].filter(i => i).map(i => i.city.name).join(' ... ');
  }
);
