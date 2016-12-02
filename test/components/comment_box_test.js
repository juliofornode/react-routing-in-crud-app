import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a comment-box class', () => {
    expect(component).has.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('testing textarea behavior', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'sample text');
    });

    it('has the text we expect', () => {
      expect(component.find('textarea')).to.have.value('sample text');
    });

    it('clears after submission', () => {
      component.find('form').simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
