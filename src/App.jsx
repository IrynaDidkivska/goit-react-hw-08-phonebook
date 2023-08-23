import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { refreshThunk } from 'redux/auth/operations';
import { selectRefresh } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';
import NotFound from 'pages/NotFound/NotFound';
import { LoaderThumb } from 'styles/App.styled';

const Home = lazy(() => import('pages/Home/Home'));
const LoginForm = lazy(() => import('pages/LoginForm/LoginForm'));
const RegisterForm = lazy(() => import('pages/RegisterForm/RegisterForm'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const PrivateRoute = lazy(() => import('HOC/PrivateRoute'));
const PublickRoute = lazy(() => import('HOC/PublickRoute'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <LoaderThumb>
      <Loader />
    </LoaderThumb>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="reg"
            element={
              <PublickRoute>
                <RegisterForm />
              </PublickRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublickRoute>
                <LoginForm />
              </PublickRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
