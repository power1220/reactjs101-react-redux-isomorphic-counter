import { createAction } from 'redux-actions';
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from './types';

export const incrementCount = createAction(INCREMENT_COUNT);
export const decrementCount = createAction(DECREMENT_COUNT);
