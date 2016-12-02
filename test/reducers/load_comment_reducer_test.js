import {expect} from '../test_helper';
import {LOAD_COMMENT} from '../../src/actions/types';
import loadCommentReducer from '../../src/reducers/load_comment_reducer';

describe('loadCommentReducer', () => {

  it('handles action of type LOAD_COMMENT', () => {
    const action = {type: LOAD_COMMENT, payload: 'comentario'};
    expect(loadCommentReducer([], action)).to.equal('comentario');
  });

});
