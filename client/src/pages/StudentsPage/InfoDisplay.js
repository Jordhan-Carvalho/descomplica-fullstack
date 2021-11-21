import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function InfoDisplay({ data }) {
  const history = useHistory();

  return (
    <MainContainer>
      {data.length === 0 ? (
        <ItemContainer onClick={() => history.push("/student-upload")}>
          <p>Sem alunos, adicione o primeiro</p>
        </ItemContainer>
      ) : (
        data.map((student) => (
          <ItemContainer
            key={student.id}
            onClick={() => alert("Open edit/delete modal")}
          >
            <p>{student.name}</p>
            <p>{student.CPF}</p>
            <p>{student.email}</p>
          </ItemContainer>
        ))
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  border: 1px solid #acbb78;
  border-radius: 20px;
  padding: 30px 20px;
  margin: 0px 10px;
  flex-grow: 2;
  height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    background: rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #acbb78;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;
