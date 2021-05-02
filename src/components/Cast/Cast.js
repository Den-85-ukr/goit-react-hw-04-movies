import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import moviesApi from '../../components/services/movies-api';
import CastItem from '../CastItem';

class Cast extends Component {
  state = {
    actor: [],
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });

    moviesApi
      .fetchCredits(movieId)
      .then(cast => this.setState({ actor: cast }))
      .catch(error => this.setState(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { actor, error, isLoading } = this.state;

    return (
      <>
        {error && <p>Oops, something went wrong: {error.message}</p>}
        {isLoading ? (
          <Loader type="TailSpin" color="blue" height={80} width={80} />
        ) : actor.length > 0 ? (
          actor.map(({ name, profile_path, cast_id, character }) => {
            return (
              <CastItem
                key={cast_id}
                name={name}
                path={profile_path}
                character={character}
              />
            );
          })
        ) : (
          <span>No cast</span>
        )}
      </>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;