import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NotFound = styled.h1`
  font-size: 4rem;
`;

export default () => {
  return (
    <ErrorWrapper>
      <NotFound>IT APPEARS THIS PAGE DOES NOT EXIST (404) 😒</NotFound>
    </ErrorWrapper>
  );
};
