import {LOAD_COMMENT} from '../actions/types';

export default (state=[], action) => {
  switch(action.type) {
  case LOAD_COMMENT:
    return action.payload;
  default:
    return state;
  }
};
