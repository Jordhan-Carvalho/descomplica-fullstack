import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <MainContainer>
      <Box to="/students">Consultar Alunos</Box>
      <Box to="/student-upload">Cadastrar Aluno</Box>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  padding-top: 250px;
  color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
  margin: auto;
`;

const Box = styled(Link)`
  border-radius: 5px;
  background: transparent;
  padding: 100px 20px;
  border: 1px solid black;
  font-family: var(--titleFont);
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
