import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLogin } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectLogin);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};
