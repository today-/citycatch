import {createServiceEffect, createServiceStore} from '~/stores';
import {fetchStats} from '~/api/stats';

export const getStats = createServiceEffect(fetchStats, 'Fetch stats');

export const stats = createServiceStore(getStats);
