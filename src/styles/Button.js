import { styled } from 'styled-components';

export const Button = styled.button`
  height: auto;
  margin: 0px auto;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  transition: all 300ms linear 0s;

  &:hover {
    scale: 1.1;
    background: linear-gradient(
      289.17deg,
      #c8bdff -50.13%,
      #b5edff -5.03%,
      #00cbff 30.57%,
      #6721ff 73.85%,
      #c8bdff 112.65%
    );
  }
`;
