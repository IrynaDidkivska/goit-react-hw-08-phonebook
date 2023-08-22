import { styled } from 'styled-components';

export const Title = styled.h3`
  margin-top: 5px;
  margin-bottom: 5px;
  color: #51565a;
  text-align: center;
  background: linear-gradient(
    289.17deg,
    #c8bdff -50.13%,
    #b5edff -5.03%,
    #00cbff 30.57%,
    #6721ff 73.85%,
    #c8bdff 112.65%
  );
  background-clip: text;
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const StyledHomeText = styled.p`
  padding: 10px;
  border: 1px solid black;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const WrapperHP = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;
