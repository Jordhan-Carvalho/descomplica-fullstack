import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer to="/">
      <Title>AlunosRepo</Title>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Link)`
  position: fixed;
  top: 50px;
  left: 50%;
  margin-left: -200px; /* Negative half of width. */
  transform: rotate(10deg);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
  padding: 30px;
`;

const Title = styled.h1`
  font-family: var(--titleFont);
  color: black;
  font-size: 1.8rem;
`;
