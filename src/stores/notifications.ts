import {createEvent, createStore} from 'effector';
import {NotificationsContext} from 'svelte-notifications';

const TIMEOUT = 3000;

export const setNotificationsContext = createEvent<NotificationsContext>();

export const notificationsContext = createStore<NotificationsContext>(null)
  .on(setNotificationsContext, (state, payload) => payload);

export const showNotification = (text: string, removeAfter = TIMEOUT) =>
  notificationsContext.getState().addNotification({
    position: 'bottom-center',
    text,
    removeAfter
  });

// export const showNotification = createEvent<{text: string, removeAfter?: number}>();
//
// sample({
//   source: notificationsContext,
//   clock: showNotification,
//   fn: (s, c) => ({...s, ...c})
// }).watch(({addNotification, text, removeAfter}) => addNotification({
//     position: 'bottom-center',
//     text,
//     removeAfter
//   })
// );

export const clearNotifications = () => notificationsContext.getState().clearNotifications();
