import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../actions/contacts';

export class Form extends Component {
  state = {
    name: '',
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const contact = { name };
    this.props.addContact(contact);
    this.setState({
      name: '',
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Contact</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addContact })(Form);
