import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

function createRandomPost() {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    published: faker.datatype.boolean(),
  };
}

function createRandomPostArray(length = 50)  {
  return [...Array(length)].map((_, i) => {
    return createRandomPost();
  });
}


async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'lisa@simpson.com',
      firstname: 'Lisa',
      lastname: 'Simpson',
      role: 'USER',
      posts: {
        create: createRandomPostArray(),
      },
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'bart@simpson.com',
      firstname: 'Bart',
      lastname: 'Simpson',
      role: 'ADMIN',
      posts: {
        create: createRandomPostArray(),
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
