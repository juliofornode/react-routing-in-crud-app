import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';
import Steps from './steps';

export default class App extends Component {
  render() {
    return (
      <div style={{marginTop: '100px'}}>
        <Steps />
        <div style={{marginTop: '100px'}}></div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
