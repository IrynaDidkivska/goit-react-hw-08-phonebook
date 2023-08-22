import { styled } from 'styled-components';
import { Button } from 'styles/Button';

export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const LogoutButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
`;
export const LogoutText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
