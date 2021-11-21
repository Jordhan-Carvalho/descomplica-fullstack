import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useMutation } from '@apollo/client';

import { CREATE_STUDENT, GET_STUDENTS } from "../../utils/queries";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { cpfMask } from "../../utils/masks";


export default function Form() {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();
  // Using update to update the cache when the mutation is done
  const [createStudent, { data, loading, error }] = useMutation(CREATE_STUDENT, {
    onCompleted: () => {
      history.push("/students");
    },
    update(cache, { data })  {
      const queryData = cache.readQuery({ query: GET_STUDENTS, variables: { name: true, CPF: true, email: true } });
      // If you access the create page before the first query it will return null
      if (queryData) {
        cache.writeQuery({
          query: GET_STUDENTS,
          variables: { name: true, CPF: true, email: true },
          data: { students: [...queryData.students, data.student] },
        });
      }
    }
  });



  const submitStudent = async (e) => {
    e.preventDefault();
    try {
      const studentInfo = {
        CPF: cpf,
        name,
        email,
      };
      await createStudent({ variables: { input: studentInfo } });

    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <Spinner />;
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
        <Button disable={loading} form="add-form" type="submit">
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
