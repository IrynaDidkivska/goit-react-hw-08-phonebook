import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLogin } from 'redux/selectors';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectLogin);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
