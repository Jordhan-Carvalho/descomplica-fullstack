// import { PrismaClient } from '@prisma/client'
import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

const studentData = [
  {
    name: 'Alice',
    email: 'alice@descomplica.com.br',
    CPF: '56936585236',
  },
  {
    name: 'Nilu',
    email: 'nilu@descomplica.com.br',
    CPF: '13936585236',
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@descomplica.com.br',
    CPF: '85436585236',
  },
  {
    name: 'Jordhan',
    email: 'jordhan@descomplica.com.br',
    CPF: '85436565236',
  },
  {
    name: 'Bianca',
    email: 'bianca@descomplica.com.br',
    CPF: '85486585236',
  },
  {
    name: 'Henry',
    email: 'henry@descomplica.com.br',
    CPF: '86636585236',
  },
  {
    name: 'Dota',
    email: 'dota@descomplica.com.br',
    CPF: '57836585236',
  },
  {
    name: 'Hfn k3',
    email: 'hfn@descomplica.com.br',
    CPF: '57836585236',
  },
  {
    name: 'Star Citizen',
    email: 'starcitizen@descomplica.com.br',
    CPF: '13936534236',
  },
  {
    name: 'Biruleibes',
    email: 'biruleibes@descomplica.com.br',
    CPF: '54436585236',
  },
  {
    name: 'Pofeides',
    email: 'pofeides@descomplica.com.br',
    CPF: '13936947236',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const s of studentData) {
    const student = await prisma.student.create({
      data: s,
    })
    console.log(`Created student with id: ${student.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })