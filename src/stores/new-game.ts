import {createEvent} from 'effector';
import {navigate} from 'svelte-routing';
import {fetchNewGame} from '~/api/games';
import {createServiceEffect, createServiceStore} from '~/stores';

export const resetNewGame = createEvent<any>('Clear new game error message');

export const postNewGame = createServiceEffect(fetchNewGame, 'Create new game');

postNewGame.done.watch(({result}) => {
  if (result && result.id) {
    navigate(`/game/${result.id}`);
  }
});

export const newGame = createServiceStore(postNewGame)
  .reset(resetNewGame);
