import {fetchAddedItemDetails, fetchAddItem} from '~/api/item';
import {itemAddedReducer} from '~/utils/game-reducers';
import {createServiceEffect} from '~/stores';
import {games} from '~/stores/games';
import {game} from '~/stores/game';

export const itemAdded = createServiceEffect(fetchAddedItemDetails, 'New item added to game in list');

games.on(itemAdded.done,
  (state, {result}) => (state[result.id]) ? ({
    ...state,
    [result.id]: itemAddedReducer(state[result.id], result)
  }) : state
);

export const addItem = createServiceEffect(fetchAddItem, 'Add item to game');

export const currentGameItemAdded = createServiceEffect(fetchAddedItemDetails, 'New item added to current game');

addItem.done.watch(({result}) => currentGameItemAdded(result));

game.on(currentGameItemAdded.done,
  (state, {result}) => ({
    ...state,
    result: itemAddedReducer(state.result, result)
  })
);
