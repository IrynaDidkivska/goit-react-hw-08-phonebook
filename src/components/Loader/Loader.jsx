import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { styled } from 'styled-components';
export const Loader = () => {
  return (
    <LoaderThumb>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#0b9106"
      />
    </LoaderThumb>
  );
};
export const LoaderThumb = styled.div`
  display: flex;

  margin: 0 auto;
`;
