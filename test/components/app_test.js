import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('Testing the App Component', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('includes the CommentBox component', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('includes the CommentList component', () => {
    expect(component.find('.comment-list')).to.exist;
  });


});
