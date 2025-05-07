import { PrismaClient } from '@/lib/generated/prisma';
import sampleData from '../db/data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });

  console.log('Database seeded successfully!');
}

main()
  .then(() => {
    console.log('Database seeded successfully!');
  })
  .catch((err) => {
    console.error(err);
  });
