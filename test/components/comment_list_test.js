import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(CommentList);
  });

  it('has a comment-list class', () => {
    expect(component).has.class('comment-list');
  });
});
