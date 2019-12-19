import {createEvent, createStore} from 'effector';
import {navigate} from 'svelte-routing';

export const setError = createEvent<string>('Set global app error');

export const clearError = () => {
  setError(null);
  navigate('/');
};

export const error = createStore<string>(null)
  .on(setError, (state, text) => text);
