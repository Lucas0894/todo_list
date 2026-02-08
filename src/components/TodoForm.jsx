import { useState } from "react"

export const TodoForm = ({onAddTask})=>{
    const [text, setText] = useState("")

    function handleSubmit(e){
      e.preventDefault()
      if(text.length > 0){
        onAddTask(text)
        setText("")
      }
    }
    return (
        <>
           <div>
              <form onSubmit={(e)=>handleSubmit(e)}>
                <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="Agregar Tarea" />
                <button>Agregar a lista</button>
              </form>
           </div>
        </>
    )
}