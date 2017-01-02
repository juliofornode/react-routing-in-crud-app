import React, { Component } from 'react';
import CreateContact from './CreateContact';
import ContactList from './ContactList';
import Intro from './Intro';
import ContactDetail from './ContactDetail';

export default class App extends Component {
  state = {
    detail: false,
    contactDetail: ''
  }

  showDetail(selectedContact) {
    this.setState({
      detail: true,
      contactDetail: selectedContact
    });
  }

  setDetail(showDetail) {
    this.setState({ detail: showDetail });
  }

  render() {
    let element;
    if(this.state.detail) {
      element = <ContactDetail contact={this.state.contactDetail}/>;
    } else {
      element = '';
    }
    return (
      <div className="App">
        <Intro />
        <CreateContact />
        <ContactList toApp={this.showDetail.bind(this)} resetDetail={this.setDetail.bind(this)} />
        {element}
      </div>
    );
  }
}
