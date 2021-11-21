import { gql } from '@apollo/client';

// https://graphql.org/learn/queries/#directives
export const GET_STUDENTS = gql`
  query GetStudents($name: Boolean!, $CPF: Boolean! ,$email: Boolean!){
    students {
      id
      name @include(if: $name)
      CPF @include(if: $CPF)
      email @include(if: $email)
    }
  }
`;

export const CREATE_STUDENT = gql`
  mutation CreateStudent($input: CreateStudentInput) {
    student: createStudent(input: $input) {
      email
      name
      id
      CPF
    }
  }
`;