import React from 'react';
import { StyledFooter } from './Footer.styled';
import { RiCopyrightLine } from 'react-icons/ri';

export const Footer = () => {
  return (
    <StyledFooter>
      <RiCopyrightLine />
      <p>2023 GoIT. All rights reserved.</p>
    </StyledFooter>
  );
};
