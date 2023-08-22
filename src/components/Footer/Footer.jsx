import React from 'react';
import { StyledFooter } from './Footer.styled';
import { LiaCopyrightSolid } from 'react-icons/lia';

const Footer = () => {
  return (
    <StyledFooter>
      <LiaCopyrightSolid />
      <p>2023 Contactville. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
