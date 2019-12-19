import {createEffect, createStore, Effect} from 'effector';
import {errorReducer, loadingReducer, successReducer} from '~/utils/reducers';

export type IServiceState<T> = {
  loading: boolean;
  result: T;
  error: string;
};

export const initialServiceState: IServiceState<any> = {
  loading: false,
  result: null,
  error: null
};

export const createServiceStore = <TResult, Params>(
  effect: Effect<Params, TResult, string>,
  initialResult: TResult = null,
  onSuccessCallback: (
    state: IServiceState<TResult>,
    payload: {params: Params; result: TResult}
  ) => IServiceState<TResult> = successReducer
) =>
  createStore<IServiceState<TResult>>({...initialServiceState, result: initialResult})
    .on(effect, loadingReducer)
    .on(effect.done, onSuccessCallback)
    .on(effect.fail, errorReducer);

export const createServiceEffect = <Params = void, Done = any>(
  asyncFn: (() => Promise<Done>) | ((p: Params) => Promise<Done>),
  name?: string
) =>
  createEffect<Params, Done, string>({name, handler: asyncFn});
