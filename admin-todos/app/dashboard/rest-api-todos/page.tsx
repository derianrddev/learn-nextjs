import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrid } from "@/components/todos";

export default async function RestApiTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <>
      <div className="w-full pl-10 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
