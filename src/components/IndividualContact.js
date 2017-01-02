import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeContact, editName} from '../actions/actions';

class IndividualContact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    removeContact: PropTypes.func,
    editName: PropTypes.func
  }

  state = {
    editing: false,
    newName: this.props.contact.name
  }

  handleRemove() {
    let toRemove = this.props.contact.name;
    this.props.removeContact(toRemove);
  }

  makeEditable() {
    this.setState({ editing: true });
  }

  handleUpdateName(eventObject) {
    let newName = eventObject.target.value;
    this.setState({ newName: newName });
  }

  handleEdit(eventObject) {
    eventObject.preventDefault();
    this.props.editName(this.props.contact.name, this.state.newName);
    this.setState({ newName: '' });
    this.setState({ editing: false });
  }

  passContactToList() {
    this.props.toList(this.props.contact);
  }

  render() {
    let element;
    if(this.state.editing) {
      element = (
        <div>
          <form onSubmit={this.handleEdit.bind(this)} className="form-inline">
            <div className="form-group">
              <input
                onChange={this.handleUpdateName.bind(this)}
                value={this.state.newName}
                type="text"
                className="form-control"
                placeholder="Enter Name">
              </input>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      );
    } else {
      element = (<li className="list-group-item" style={{height: '65px'}}>
        <span onClick={this.passContactToList.bind(this)}>{this.props.contact.name}</span>
        <button onClick={this.handleRemove.bind(this)} className="btn btn-danger" style={{float: 'right'}}>
          Delete: Filter NoDeletables from State
        </button>
        <button onClick={this.makeEditable.bind(this)} className="btn btn-primary" style={{float: 'right', marginRight: '10px'}}>
          Edit: Map through State & Update the one Matching
        </button>
      </li>);
    }

    return (
      <div>
        {element}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeContact: removeContact, editName: editName }, dispatch);
}

export default connect(null, mapDispatchToProps)(IndividualContact);
