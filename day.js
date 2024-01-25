import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getTodaysCreatedUsers() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to the beginning of the day

  try {
    const todaysUsers = await prisma.user.findMany({
      where: {
        createdAt: {
          gte: today,
        },
      },
    });

    return todaysUsers;
  } catch (error) {
    console.error('Error fetching today\'s created users:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Usage
getTodaysCreatedUsers().then((users) => {
  console.log('Today\'s created users:', users);
});