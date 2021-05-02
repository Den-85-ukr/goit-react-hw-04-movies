import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesItem.module.css';

const MoviesItem = ({ movie, location }) => {
  return (
    <Link
      className={styles.Link}
      to={{
        pathname: `/movies/${movie.id}`,
        state: { from: location },
      }}
    >
      {movie.title}
    </Link>
  );
};

MoviesItem.propTypes = {
  movie: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesItem);