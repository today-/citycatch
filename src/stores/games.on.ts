import {createEvent} from 'effector';
import {IGame} from '~/api/game';
import {games} from '~/stores/games';
import {gameFinishedReducer, gameUpdatedReducer} from '~/utils/game-reducers';

export const gameCreated = createEvent<IGame>('New game created in list');

games.on(gameCreated, (state, payload) => ({
  ...state,
  [payload.id]: payload
}));

export const gameUpdated = createEvent<IGame>('Game in list updated ');

games.on(gameUpdated,
  (state, payload) => (state[payload.id]) ? ({
    ...state,
    [payload.id]: gameUpdatedReducer(state[payload.id], payload)
  }) : state
);

export const gameFinished = createEvent<IGame>('Game in list finished');

games.on(gameFinished,
  (state, payload) => (state[payload.id]) ? ({
    ...state,
    [payload.id]: gameFinishedReducer(state[payload.id], payload)
  }) : state
);
