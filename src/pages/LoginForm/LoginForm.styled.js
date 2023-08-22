import { styled } from 'styled-components';
import { Container } from 'styles/Container';

export const Input = styled.input`
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  border: none;
  outline: 1px solid #baaaaa;
  border-radius: 3px;
`;

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 60vh;
`;
export const StyledLink = styled.a`
  padding: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #00cbff;

  transition: all 300ms ease-in-out;
  &:hover {
    color: #7d23d3;
  }
`;
