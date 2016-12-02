import {expect} from '../test_helper';
import {LOAD_COMMENT} from '../../src/actions/types';
import {loadComment} from '../../src/actions/index';

describe('loadComment', () => {

  it('should have the right type', () => {
    const action = loadComment();
    expect(action.type).to.equal(LOAD_COMMENT);
  });

});
