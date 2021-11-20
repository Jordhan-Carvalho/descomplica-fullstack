import React from "react";
import styled from "styled-components";

export default function ContentBox({ children, ...rest }) {
  return <ContentContainer {...rest}>{children}</ContentContainer>;
}

const ContentContainer = styled.div`
  width: 100%;
  padding: 50px;
  border: 1px solid black;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
