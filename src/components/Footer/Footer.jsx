import React from 'react';
import { StyledFooter } from './Footer.styled';
import { RiCopyrightLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <StyledFooter>
      <RiCopyrightLine />
      <p>2023 Contactville. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
