import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { query } = this.state;
    const { onSubmit, history } = this.props;

    e.preventDefault();

    if (query) {
      onSubmit(query);
    } else {
      return alert('Please enter the name of the movie');
    }

    history.push({
      search: `query=${query}`,
    });

    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            value={this.state.query}
            type="text"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(SearchForm);