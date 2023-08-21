import { styled } from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (min-width: 428px) {
    .container {
      width: 428px;
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      width: 768px;
    }
  }
  @media screen and (min-width: 1158px) {
    .container {
      width: 1158px;
    }
  }
`;
