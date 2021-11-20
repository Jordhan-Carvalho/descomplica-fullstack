import { gql } from "apollo-server-core"

export const typeDefs = gql`
  type Query {
    students: [Student]
  }

  type Student {
    id: ID!
    name: String
    email: String
    CPF: String
  }
`