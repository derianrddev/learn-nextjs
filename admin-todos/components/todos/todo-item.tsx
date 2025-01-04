"use client";

import { startTransition, useOptimistic } from "react";
import { Todo } from "@prisma/client";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

import styles from "./todo-item.module.css";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo|void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [ todoOptimistic, toggleTodoOptimistic ] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean ) => ({ ...state, complete: newCompleteValue })
  );

  const onToggleTodo = async() => {
    try {
      startTransition( () => toggleTodoOptimistic( !todoOptimistic.complete ) );
      
      await toggleTodo( todoOptimistic.id, !todoOptimistic.complete );
    } catch (error) {
      startTransition( () => toggleTodoOptimistic( !todoOptimistic.complete ) );
    }
  }    

  return (
    <article className={ todoOptimistic.complete ? styles.todoDone : styles.todoPending }>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div 
          // onClick={ () => toggleTodo(todoOptimistic.id, !todoOptimistic.complete) }
          onClick={ onToggleTodo }
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${ todo.complete ? 'bg-blue-100' : 'bg-red-100' }`}
        >
          {
            todoOptimistic.complete
              ? <IoCheckboxOutline size={30} />
              : <IoSquareOutline size={30} />
          }
        </div>
        <p className="text-center sm:text-left">{ todoOptimistic.description }</p>
      </div>
    </article>
  )
}
