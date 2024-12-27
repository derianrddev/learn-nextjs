import prisma from "@/app/lib/prisma";
import { TodosGrid } from "@/components/todos";

export default async function RestApiTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <div>
      <h1>Page Rest API TODOs</h1>
      <TodosGrid todos={todos} />
    </div>
  );
}