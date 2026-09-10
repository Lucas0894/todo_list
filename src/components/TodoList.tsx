import { TodoItem } from "./TodoItem"
import { Task } from "../types/task"

interface TodoListProps {
  taskList: Task[]
  onDelete: (id: number) => void
  onEdit: (id: number, text: string) => void
  onChangeStatus: (id: number, status: Task["status"]) => void
}

export const TodoList = ({ taskList, onDelete, onEdit, onChangeStatus }: TodoListProps) => {
  return (
    <>
      <h2 className="ml-5 text-lg font-semibold text-gray-700">Lista de Tareas</h2>
      <ul className="flex px-2 py-2 flex-col gap-4 w-full  overflow-x-hidden">
        {
          taskList.map((task) => {
            return <TodoItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onChangeStatus={onChangeStatus} />
          })
        }
      </ul>
    </>
  )
}