import React, {Component, PropTypes} from 'react';

class ContactDetail extends Component {
  static propTypes = {
    contact: PropTypes.object
  }

  render() {
    let element;
    if(this.props.contact.children.length > 0) {
      element = (
        <div>
          <p><strong>Children:</strong></p>
          <ul>
            {this.props.contact.children.map( child => {
              return <li key={child.id}>{child.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      element = '';
    }
    return(
      <div style={{marginTop: '50px'}}>
        <h4>This is the contact detail component.</h4>
        <br/>
        <p><strong>Name: </strong>{this.props.contact.name}</p>
        <p><strong>Number of children: </strong>{this.props.contact.children.length}</p>
        {element}
      </div>
    );
  }
}

export default ContactDetail;
