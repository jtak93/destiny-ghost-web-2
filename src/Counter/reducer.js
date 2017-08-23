import { fromJS } from 'immutable';

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  counter: 0,
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      // increment counter
      return state
        .set('counter', state.get('counter') + 1);
    case DECREMENT_COUNTER:
      return state
        .set('counter', state.get('counter') - 1);
    default:
      return state;
  }
}

export default counterReducer;
