import {createEvent} from 'effector';
import {gameFinishedReducer, gameUpdatedReducer} from '~/utils/game-reducers';
import {showNotification} from '~/stores/notifications';
import {game} from '~/stores/game';
import {IGame} from '~/api/game';
import {t} from '~/i18n';

export const currentGameFinished = createEvent<IGame>('Current game finished');

game.on(currentGameFinished, (state, payload) => ({
  ...state,
  result: gameFinishedReducer(state.result, payload)
}));

currentGameFinished.watch(() => {
  showNotification(t('game-finished'));
});

export const currentGameUpdated = createEvent<IGame>('Current game updated');

game.on(currentGameUpdated, (state, payload) => ({
  ...state,
  result: gameUpdatedReducer(state.result, payload)
}));
