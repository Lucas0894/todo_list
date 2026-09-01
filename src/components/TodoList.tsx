import { TodoItem } from "./TodoItem"
import { Task } from "../types/task"

interface TodoListProps {
  taskList: Task[]
  onDelete: (id: number) => void
  onEdit: (id:number, text: string) => void
  onChecked: (id: number) => void
}

export const TodoList = ({ taskList, onDelete, onEdit, onChecked }: TodoListProps) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-600">Lista de Tareas</h2>
      <ul className="flex flex-col gap-4 w-full  overflow-x-hidden">
        {
          taskList.map((task) => {
            return <TodoItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onChecked={onChecked} />
          })
        }
      </ul>
    </>
  )
}