import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server'

export async function GET() {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: 'Collect Infinity Stones', complete: true },
      { description: 'Write documentation for the project' },
      { description: 'Fix the login page bug' },
      { description: 'Prepare presentation slides' },
      { description: 'Learn GraphQL basics' },
      { description: 'Fetch water from the river', complete: true },
      { description: 'Build a house in Minecraft' },
      { description: 'Learn TypeScript', complete: true },
      { description: 'Finish work project' },
      { description: 'Exercise in the morning' },
      { description: 'Read a book on productivity', complete: true },
      { description: 'Organize the desk', complete: true },
      { description: 'Practice design patterns' },
      { description: 'Write in my journal' },
      { description: 'Update portfolio', complete: true },
      { description: 'Cook a new recipe' },
      { description: 'Set up CI/CD for a project', complete: true },
      { description: 'Create an API with Prisma and Next.js' },
      { description: 'Explore new technologies' },
      { description: 'Review and close issues on GitHub', complete: true },
    ],
  });

  return NextResponse.json({ message: 'Seed Executed!' });
}