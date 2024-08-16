// store.js
import { createStore } from 'redux';

const initialState = {
  username: null,
  password: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      return { ...state, ...action.payload };
    case 'CLEAR_CREDENTIALS':
      return initialState;
    default:
      return state;
  }
}

const store = createStore(rootReducer);
export default store;