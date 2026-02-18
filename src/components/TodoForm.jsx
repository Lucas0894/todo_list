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
              <form className="flex flex-col gap-3 justify-center items-center p-6 lg:flex-row" onSubmit={(e)=>handleSubmit(e)}>
                <div className=" w-full lg:flex-1 p-1 border border-gray-300">
                <input className="w-full h-6 p-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder-gray-400" value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="Agregar Tarea" />
                </div>
                <div className="w-full flex justify-center items-center lg:w-25">
                <button className="w-full lg:w-25 rounded bg-blue-700 cursor-pointer p-1 lg:ml-2 text-center text-white font-bold shadow-sm hover:shadow-md hover:bg-blue-800 active:scale-95 transition-all duration-200">Agregar</button>
                </div>
              </form>
           </div>
        </>
    )
}