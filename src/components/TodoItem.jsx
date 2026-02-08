import { useState } from "react"

export const TodoItem = ({task, onDelete, onEdit, onChecked})=>{
    const [isEditing, setIsEditg ] = useState(false)
    const [text, setText] = useState("")
    function handleEdit(){
        onEdit(task.id, text)
        setIsEditg(false)
    }
    return (
        <>
          <li>
            <input checked={task.complete} onChange={()=>{onChecked(task.id)}} type="checkbox" />
            {isEditing? 
            <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" />
            : <span>{task.name}</span>}
            <button onClick={()=>onDelete(task.id)}>Borrar</button>
            {
                isEditing?
                <button onClick={handleEdit}>Agregar</button>
                : <button onClick={()=>setIsEditg(true)}>Editar</button>
            }
          </li>
        </>
    )
}