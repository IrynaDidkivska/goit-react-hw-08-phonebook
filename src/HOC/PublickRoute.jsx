import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogin } from 'redux/selectors';
import PropTypes from 'prop-types';

const PublickRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLogin);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return children;
};

export default PublickRoute;
PublickRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
