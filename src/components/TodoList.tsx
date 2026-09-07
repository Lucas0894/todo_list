import { TodoItem } from "./TodoItem"
import { Task } from "../types/task"

interface TodoListProps {
  taskList: Task[]
  onDelete: (id: number) => void
  onEdit: (id:number, text: string) => void
  onChangeStatus: (id: number, status: Task["status"]) => void
}

export const TodoList = ({ taskList, onDelete, onEdit, onChangeStatus }: TodoListProps) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-600">Lista de Tareas</h2>
      <ul className="flex flex-col gap-4 w-full  overflow-x-hidden">
        {
          taskList.map((task) => {
            return <TodoItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onChangeStatus={onChangeStatus} />
          })
        }
      </ul>
    </>
  )
}