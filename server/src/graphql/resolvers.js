import { prisma } from '../prisma.js';

const Query = {
  student: (root, args) => prisma.student.findUnique({
    where: {
      id: 99,
    },
  }),
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