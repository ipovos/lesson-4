import { createStore, applyMiddleware } from './redux';
import { thunk } from './redux-thunk';

const initialState = {
  name: 'Daria',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      return {
        ...state,
        name: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    payload: name,
  };
};

export const store = createStore(
  reducer,
  applyMiddleware([thunk]),
);
