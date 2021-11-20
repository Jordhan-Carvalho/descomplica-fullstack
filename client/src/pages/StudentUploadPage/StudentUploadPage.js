import React from "react";
import styled from "styled-components";

import uploadImage from "../../assets/upload.svg";
import ContentBox from "../../components/ContentBox";
import Form from "./Form";

export default function StudentUploadPage() {
  return (
    <MainContainer>
      <CustomBox>
        <Title>Adicionar Aluno ao Repositório</Title>
        <FormBox>
          <UploadSvg src={uploadImage} />
          <Form />
        </FormBox>
      </CustomBox>
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
  width: 70%;
  margin: auto;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 20px;
`;

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const CustomBox = styled(ContentBox)`
  flex-direction: column;
`;

const UploadSvg = styled.img`
  width: 30%;
`;
