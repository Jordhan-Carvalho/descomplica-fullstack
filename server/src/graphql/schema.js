import { gql } from "apollo-server-core"

export const typeDefs = gql`
  type Query {
    students: [Student]
  }

  type Mutation {
    createStudent(input: CreateStudentInput): Student
  }

  type Student {
    id: ID!
    name: String
    email: String
    CPF: String
  }

  input CreateStudentInput {
    name: String
    email: String
    CPF: String
  }
`