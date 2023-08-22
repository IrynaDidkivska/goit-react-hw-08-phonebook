import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(NavLink, Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;

  font-size: 18px;
  font-weight: 500;
  color: #000000;
  transition: all 300ms ease-in-out;
  &:hover {
    font-weight: 600;
    color: #ffffff;
  }
`;
