export const loadingReducer = <S>(state: S): S => ({
  ...state,
  loading: true,
  error: null
});

export const successReducer = <S, R>(state: S, {result}: { result: R }): S => ({
  ...state,
  loading: false,
  error: null,
  result
});

export const errorReducer = <S, E>(state: S, {error}: { error: E | any }): S => ({
  ...state,
  loading: false,
  error: typeof error === 'object' ? error.message : error
});

export const mergeReducer = <S>(state: S, newState: Partial<S>): S => ({
  ...state, ...newState
});
