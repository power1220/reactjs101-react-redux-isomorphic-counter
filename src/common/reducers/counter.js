import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from '../actions/types';

const counterState = Immutable.fromJS({
  count: 0,
});

const counterReducers = handleActions({
  [INCREMENT_COUNT]: (state) => (
    state.set('count', state.get('count') + 1)
  ),
  [DECREMENT_COUNT]: (state) => (
    state.set('count', state.get('count') - 1)
  ),
}, counterState);

export default counterReducers;
