import { Component } from 'react';
import PropTypes from 'prop-types';

import MoviesItem from '../MoviesItem';

class MoviesList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map(movie => (
          <MoviesItem key={movie.id} movie={movie} />
        ))}
      </ul>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;