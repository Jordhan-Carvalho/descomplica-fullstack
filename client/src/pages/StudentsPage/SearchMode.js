import React from "react";
import styled from "styled-components";

export default function SearchMode({ setSelected }) {
  return (
    <SearchModeContainer>
      <Title>Consultar Alunos</Title>
      <SubTitle>Campo desejado:</SubTitle>

      <div>
        <input 
          type="checkbox" 
          id="name" 
          name="name"
          onChange={() => setSelected(prev => (
            { ...prev, name: !prev.name }
          ))}
          defaultChecked
          />
        <label htmlFor="name">Nome</label>
      </div>
      <div>
        <input 
          type="checkbox" 
          id="email" 
          name="email"
          onChange={() => setSelected(prev => (
            { ...prev, email: !prev.email }
          ))}
          defaultChecked
          />
        <label htmlFor="email">E-mail</label>
      </div>
      <div>
        <input 
          type="checkbox" 
          id="cpf" 
          name="cpf"
          onChange={() => setSelected(prev => (
            { ...prev, cpf: !prev.cpf }
          ))}
          defaultChecked
          />
        <label htmlFor="cpf">CPF</label>
      </div>
    </SearchModeContainer>
  );
}

const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 40px;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const SearchModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
`;
