import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useMutation } from '@apollo/client';

import { CREATE_STUDENT } from "../../utils/queries";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { cpfMask } from "../../utils/masks";


export default function Form() {
  const [createStudent, { data, loading, error }] = useMutation(CREATE_STUDENT);


  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log(data);
  }, []);

  const submitStudent = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const studentInfo = {
        CPF: cpf,
        name,
        email,
      };
      createStudent({ variables: { input: studentInfo } });

      setIsLoading(false);
      history.push("/students");
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  if (isLoading || loading) return <Spinner />;
  if (error) return `Submission error! ${error.message}`;

  return (
    <FormContainer id="add-form" onSubmit={(e) => submitStudent(e)}>
      <h3>Preencha as informações corretamente</h3>
      <div className="smaller-input-container">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            id="name"
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            value={cpfMask(cpf)}
            onChange={(e) => setCpf(cpfMask(e.target.value))}
            required
            id="cpf"
          />
        </div>
      </div>

      <div id="email-input">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="email"
        />
      </div>
      <BtnContainer>
        <Button disable={isLoading} form="add-form" type="submit">
          Adicionar
        </Button>
      </BtnContainer>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  input,
  select {
    height: 2.2rem;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    outline: none;
    border: 0.5px solid var(--buttonColor);
    font-size: 0.9rem;
  }
  #email-input {
    display: flex;
    flex-direction: column;
    width: 99%;
  }
  .smaller-input-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    div {
      margin-right: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    input,
    select {
      width: 20rem;
    }
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  button {
    font-size: 1rem;
  }
`;
