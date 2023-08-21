import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Button = styled.button`
  max-width: 100px;
  height: auto;
  margin: 0 auto;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  transition: all 300ms linear;
  &:hover {
    scale: 1.1;
    background-color: #649eff;
  }
`;
