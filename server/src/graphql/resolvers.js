import { prisma } from '../prisma.js';

const Query = {
  students: (root, args) => prisma.student.findMany(),
}

const Mutation = {
  createStudent: async (root, { input }) => {
    const student = await prisma.student.create({
      data: {
        name: input.name,
        email: input.email,
        CPF: input.CPF,
      },
    })

    return student
  }
}


export const resolvers = {
  Query,
  Mutation
}