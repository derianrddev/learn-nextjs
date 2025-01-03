import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import * as yup from 'yup';

interface Segments {
  params: {
    id: string;
  }
}

export async function GET(request: Request, { params }: Segments) {
  const { id } = params;
  const todo = await prisma.todo.findFirst({ where: { id } }); 

  if (!todo) {
    return NextResponse.json({ message: `TODO with id ${ id } not found` }, { status: 404 });
  }

  return NextResponse.json(todo);
}

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
})

export async function PUT(request: Request, { params }: Segments) {
  const { id } = params;
  const todo = await prisma.todo.findFirst({ where: { id } }); 

  if (!todo) {
    return NextResponse.json({ message: `TODO with id ${ id } not found` }, { status: 404 });
  }

  try {
    const { complete, description } =  await putSchema.validate( await request.json() );

    const updatedTodo = await prisma.todo.update({
      where: { id: params.id },
      data: { complete, description }
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}