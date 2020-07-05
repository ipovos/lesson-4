export const createStore = (reducer, enhancer) => {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let listeners = [];

  let state = reducer(undefined, {
    type: '@@init',
  });

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(getState(), action);
    listeners.forEach((func) => func(getState()));
  };

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

export const compose = (funcs) => (args) => {
  return funcs.reduce((acc, func) => func(acc), args);
};

export const applyMiddleware = (middlewares) => {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);

    let innerDispatch = () => {
      console.log(
        'Dispatching while constructing your middleware is not allowed.',
      );
    };

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => innerDispatch(action),
    };

    const chain = middlewares.map((middleware) =>
      middleware(middlewareAPI),
    );

    innerDispatch = compose(chain)(store.dispatch);

    return {
      ...store,
      dispatch: innerDispatch,
    };
  };
};
