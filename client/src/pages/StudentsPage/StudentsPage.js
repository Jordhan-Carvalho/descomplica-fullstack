import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from '@apollo/client';

import { GET_STUDENTS } from "../../utils/queries";
import searchSvg from "../../assets/search.svg";
import ContentBox from "../../components/ContentBox";
import Spinner from "../../components/Spinner";
import InfoDisplay from "./InfoDisplay";
import SearchMode from "./SearchMode";


export default function StudentsPage() {
  const [selected, setSelected] = useState({name: true, cpf: true, email: true});
  
  
  const { loading, error, data } = useQuery(GET_STUDENTS, {
    variables: {...selected, CPF: selected.cpf}
  });


  return (
    <MainContainer>
      <ContentBox>
        <SearchMode setSelected={setSelected} />
        { loading ? (
          <Spinner />
        ) : (
          <InfoDisplay data={data.students} />
        )}

        <SearchSvg src={searchSvg} />
      </ContentBox>
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
  width: 90%;
  margin: auto;
`;

const SearchSvg = styled.img`
flex-grow: 1;
  width: 10%;
`;
