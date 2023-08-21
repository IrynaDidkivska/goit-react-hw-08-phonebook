import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsSlice/operations';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { NotFound } from 'pages/NotFound/NotFound';
import { Home } from 'pages/Home/Home';
import { LoginForm } from 'pages/LoginForm/LoginForm';
import { RegisterForm } from 'pages/RegisterForm/RegisterForm';
import { Contacts } from 'pages/Contacts/Contacts';
import { PrivateRoute } from 'HOC/PrivateRoute';
import { Footer } from 'components/Footer/Footer';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" elements={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="reg" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
