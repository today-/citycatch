import {createEvent} from 'effector';
import {fetchSearch} from '~/api/search';
import {createServiceEffect, createServiceStore} from '~/stores';
import {debounce} from '~/utils/debounce';

export const getSearch = createServiceEffect(fetchSearch, 'Fetch search results');

export const getDebouncedSearch = debounce(getSearch, 300);

export const resetSearch = createEvent<void>('Clear search suggestions');

export const search = createServiceStore(getSearch, [])
  .reset(resetSearch);
