import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { StyledLink } from 'styles/Link';
import { StyledNotFoundBox } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <StyledNotFoundBox>
        <StyledLink to="/">
          Home
          <BiHomeAlt2 />
        </StyledLink>
      </StyledNotFoundBox>

      <img
        src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
        alt="Error 404 page"
        loading="lazy"
      />
    </>
  );
};
export default NotFound;
