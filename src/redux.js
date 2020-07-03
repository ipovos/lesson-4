export const configureStore = (reducer) => {
  const listeners = [];
  const middlares = [];

  let state = reducer(undefined, {
    type: '@@init',
  });

  const thunk = (productId) => (dispatch, getState) => {
    api
      .getProduct(productId)
      .then((product) => dispatch(addProduct(product)))
      .catch((error) => dispatch(productError(error)));
  };

  const dispatch = (action) => {
    state = reducer(action);
    listeners.forEach((func) => func(getState()));
    listeners.forEach((func) => func(action));
  };

  const getState = () => ({ ...state });

  const subscribe = (func) => {
    listeners.push(func);

    return () => {
      listeners = listeners.filter(
        (existingFunc) => existingFunc !== func,
      );
    };
  };

  return {
    dispatch,
    getState,
    subscribe,
  };
};
