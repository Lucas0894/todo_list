import { TodoItem } from "./TodoItem"

export const TodoList = ({taskList, onDelete, onEdit, onChecked})=>{
    return (
        <>
          <h2>Lista de Tareas</h2>
          <ul>
          {
            taskList.map((task)=>{
                return <TodoItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onChecked={onChecked} />
            })
          }
          </ul>
        </>
    )
}