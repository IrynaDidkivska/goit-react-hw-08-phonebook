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
  background: linear-gradient(
    289.17deg,
    #c8bdff -50.13%,
    #b5edff -5.03%,
    #00cbff 30.57%,
    #6721ff 73.85%,
    #c8bdff 112.65%
  );
  transition: all 300ms ease-in-out;
  &:hover {
    font-weight: 600;
    color: #ffffff;
  }
`;
