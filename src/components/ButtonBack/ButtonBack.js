import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonBack = ({ history, location }) => {
  const handleGoBack = () => {
    history.push(location?.state?.from || '/');
  };
  return (
    <button type="button" onClick={handleGoBack}>
      Go back
    </button>
  );
};

ButtonBack.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(ButtonBack);