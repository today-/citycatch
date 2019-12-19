import {createEvent} from 'effector';
import {fetchParticipateGame} from '~/api/game';
import {createServiceEffect, createServiceStore} from '~/stores';

export const resetParticipate = createEvent<any>('Clear participate error message');

export const postParticipateGame = createServiceEffect(fetchParticipateGame, 'Become a participant in game');

export const participateGame = createServiceStore(postParticipateGame)
  .reset(resetParticipate);
