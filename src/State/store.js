import { createStore } from 'redux';

const initialState = {
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return { ...state,message: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
