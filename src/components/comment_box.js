import React, {Component} from 'react';

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }


  handleChange(eventObject) {
    this.setState({ comment: eventObject.target.value });
  }

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    this.setState({ comment: '' });
    eventObject.target.value = '';
  }

  render() {
    return(
      <div className="comment-box">
        <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
          <div className="form-group">
            <textarea
              className="form-control"
              rows="6"
              value = {this.state.comment}
              onChange={this.handleChange.bind(this)}
              />
          </div>
          <button action="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentBox;
