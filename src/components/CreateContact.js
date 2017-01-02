import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addContact} from '../actions/actions';

class CreateContact extends Component {
  static propTypes = {
    addContact: PropTypes.func
  }

  state = {
    id: '',
    name: '',
    children: ''
  }

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    this.props.addContact(this.state);
    this.setState({ id: '' });
    this.setState({ name: '' });
    this.setState({ children: '' });
  }

  handleChangeName(eventObject) {
    let name = eventObject.target.value;
    this.setState({ name: name });
  }

  handleChangeId(eventObject) {
    let id = eventObject.target.value;
    this.setState({ id: id });
  }

  handleChangeChildren(eventObject) {
    let children = eventObject.target.value;
    this.setState({ children: children });
  }

  render() {
    return (
      <div className="CreateContact">
        <form onSubmit={this.handleSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <input
              onChange={this.handleChangeName.bind(this)}
              value={this.state.name}
              type="text"
              className="form-control"
              placeholder="Enter Name">
            </input>
            <input
              onChange={this.handleChangeId.bind(this)}
              value={this.state.id}
              type="text"
              className="form-control"
              placeholder="Id">
            </input>
            <input
              onChange={this.handleChangeChildren.bind(this)}
              value={this.state.children}
              type="text"
              className="form-control"
              placeholder="Number of Children">
            </input>
          </div>
          <button type="submit" className="btn btn-success">Create: Spread State + New</button>
        </form>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addContact: addContact }, dispatch);
}

export default connect(null, mapDispatchToProps)(CreateContact);
