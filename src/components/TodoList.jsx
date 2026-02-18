import { TodoItem } from "./TodoItem"

export const TodoList = ({taskList, onDelete, onEdit, onChecked})=>{
    return (
        <>
          <h2 className="text-center text-2xl font-bold text-gray-600">Lista de Tareas</h2>
          <ul className="flex flex-col gap-4 w-full  overflow-x-hidden">
          {
            taskList.map((task)=>{
                return <TodoItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onChecked={onChecked} />
            })
          }
          </ul>
        </>
    )
}