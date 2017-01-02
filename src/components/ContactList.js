import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadContacts} from '../actions/actions';
import IndividualContact from './IndividualContact';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    loadContacts: PropTypes.func,
    toApp: PropTypes.func,
    resetDetail: PropTypes.func
  }

  state = {
    contacts: []
  }

  componentDidMount() {
    let currentContacts = this.props.loadContacts();
    this.setState({ contacts: currentContacts });
  }

  passToApp(contactToDetail) {
    this.props.toApp(contactToDetail);
  }

  passDetail() {
    let showDetail = false;
    this.props.resetDetail(showDetail);
  }

  render() {
    if(!this.props.contacts) {
      return <div>Enter a new contact.</div>;
    }
    return (
      <div className="ContactList">
        <button className="btn btn-warning" style={{marginBottom: '10px'}}>List: Load initial State in Action or Reducer</button>
        <div></div>
        <button className="btn btn-info" style={{marginBottom: '10px', marginRight: '10px'}}>Contact Detail: Click Contact Name</button>
        <button onClick={this.passDetail.bind(this)} className="btn btn-secondary" style={{marginBottom: '10px'}}>Reset</button>
        <ul className="list-group">
          {this.props.contacts.map(contact => {
            return (
              <IndividualContact key={contact.id} contact={contact} toList={this.passToApp.bind(this)}/>
            );
          })}

        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadContacts: loadContacts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
