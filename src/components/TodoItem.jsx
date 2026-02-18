import { useState } from "react"
import { Trash2, Pencil } from "lucide-react"

export const TodoItem = ({task, onDelete, onEdit, onChecked})=>{
    const [isEditing, setIsEditg ] = useState(false)
    const [text, setText] = useState("")
    function handleEdit(){
        if(text.length >0){
            onEdit(task.id, text)
            setIsEditg(false)
        }
    }
    return (
        <>
          <li className="w-full min-w-0 flex flex-col lg:flex-row lg:items-center gap-3 px-3 pb-4 border-b border-gray-300 ">
            <div className="flex flex-row flex-1 min-w-0">
            <div className="flex justify-center w-6">
            <input checked={task.complete} onChange={()=>{onChecked(task.id)}} type="checkbox" />
            </div>
            <div className="flex-1 m-0.5 min-w-0">
            {isEditing? 
            <input className="w-full border border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" value={text} onChange={(e)=>{setText(e.target.value)}} type="text" />
            : <span className={task.complete? "line-through block transition-all duration-300 break-all  text-gray-600": "font-semibold block transition-all duration-300  break-all"} title={task.name}>{task.name}</span>}
            </div>
            </div>
            <div className="flex flex-row justify-center gap-3 lg:shrink-0">
            <div className="w-20">
            <button className="flex items-center gap-1 text-red-600 border border-red-600 px-3 py-0.3 cursor-pointer rounded shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-gray-100 active:scale-95" onClick={()=>onDelete(task.id)}>
                <Trash2 size={18} />
                <span>
                Borrar
                </span>
            </button>
            </div>
            <div className="w-24 text-center">
            {
                isEditing?
                <div className="w-20">
                <button className="gap-1 flex mx-1 px-1 py-0.3 items-center border border-gray-400 cursor-pointer rounded hover:bg-gray-100 transition" onClick={handleEdit}>
                <Pencil size={18} />
                <span>
                Agregar
                </span>
                </button>
                </div>
                :
                <div className="w-20">
                <button className="flex gap-1 items-center mx-1 px-3 py-0.3 border border-gray-400 cursor-pointer rounded shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95 hover:bg-gray-100" onClick={()=>setIsEditg(true)}>
                <Pencil size={18} />
                <span>
                Editar
                </span>
                </button>
                </div>
            }
            </div>
            </div>
          </li>
        </>
    )
}