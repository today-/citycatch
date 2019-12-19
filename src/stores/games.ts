import {createEvent, createStore} from 'effector';
import {createServiceEffect} from '~/stores';
import {INormalizedGames} from '~/api/game';
import {fetchGames} from '~/api/games';

export const resetGames = createEvent('Clear games list');

export const getGames = createServiceEffect(fetchGames, 'Fetch all games');

export const games = createStore<INormalizedGames>({})
  .on(getGames.done, (state, {result, params}) => {
    const initial: INormalizedGames = (params && params.page > 1) ? {...state} : {};

    return result.reduce((accum, current) => {
      accum[current.id] = current;
      return accum;
    }, initial);
  })
  .reset(resetGames);

export const gamesError = createStore<string>(null)
  .on(getGames, () => null)
  .on(getGames.fail, (state, {error}: any) => typeof error === 'object' ? error.message : error)
  .reset(resetGames);

export const gamesIds = games.map(
  games => Object.values(games)
    .sort((a, b) => {
      const byIsActive = Number(b.isActive) - Number(a.isActive);
      const byIsParticipating = Number(b.isParticipating) - Number(a.isParticipating);

      return byIsActive || byIsParticipating || b.id - a.id;
    })
    .map(game => game.id)
);

export const hasActiveGames = games.map(
  games => Object.values(games).some(game => game.isActive && game.isParticipating)
);

export const hasMoreGames = createStore(true)
  .on(getGames, () => true)
  .on(getGames.done, (state, {result}) => result.length >= Number(process.env.PAGE_SIZE))
  .reset(resetGames);
