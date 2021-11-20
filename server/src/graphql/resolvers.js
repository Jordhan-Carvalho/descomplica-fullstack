import { prisma } from '../prisma.js';

const Query = {
  students: (root, args) => prisma.student.findMany(),
}


export const resolvers = {
  Query,
}