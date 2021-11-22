import { gql } from "apollo-server-core"

export const typeDefs = gql`
  type Query {
    student: Student
    students: [Student]
  }

  type Mutation {
    createStudent(input: CreateStudentInput): Student
  }

  type Student @cacheControl(maxAge: 240) {
    id: ID!
    name: String @cacheControl(maxAge: 86400)
    email: String
    CPF: String @cacheControl(maxAge: 86400)
  }

  input CreateStudentInput {
    name: String
    email: String
    CPF: String
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`