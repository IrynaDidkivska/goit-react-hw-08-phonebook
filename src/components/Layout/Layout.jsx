import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledOutlet } from './Layout.styled';
import { Navbar } from 'components/Navbar/Navbar';

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <StyledOutlet>
            <Outlet />
          </StyledOutlet>
        </Suspense>
      </main>
    </>
  );
};
