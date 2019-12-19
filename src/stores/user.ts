import {createEvent} from 'effector';
import {fetchProfile, fetchUser} from '~/api/user';
import {createServiceEffect, createServiceStore} from './';
import {successReducer} from '~/utils/reducers';
import {showNotification} from "~/stores/notifications";
import {t} from "~/i18n";

export const updateUser = createEvent('Merge data to current user');

export const getUser = createServiceEffect(fetchUser, 'Fetch current user');

export const probeUser = () => getUser().catch(() => {});

export const postProfile = createServiceEffect(fetchProfile, 'Update profile');

postProfile.done.watch(() => showNotification(t('profile-updated')));

export const user = createServiceStore(getUser)
  .on(updateUser, (state, result) => successReducer(state, {result}))
  .on(postProfile.done, successReducer);

export const userId = user.map(({result}) => result && result.id);

export const profileUpdating = createServiceStore(postProfile);

