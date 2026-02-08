import { useState, useEffect } from "react"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"


function App() {
  const [taskList, setTaskList] = useState([])

   useEffect(()=>{
    const save = localStorage.getItem("tasks")
    setTaskList(JSON.parse(save))
   },[])

   useEffect(()=>{
    if(taskList.length > 0){
      localStorage.setItem("tasks", JSON.stringify(taskList))
    }
   }, [taskList])

  console.log(taskList)

   function onAddTask(text){
    setTaskList([...taskList,
      {id:Date.now(), name: text, complete: false}
    ])
   } 

   function onDelete(id){
    const newList = taskList.filter((task)=> task.id !== id)
    setTaskList(newList)
   }

   function onEdit(id, text){
    console.log(id, text)
    const newList = taskList.map((task)=>{
      return task.id === id? 
      {...task, name: text}: task
    })
    setTaskList(newList)
   }

   function onChecked(id){
    const newList = taskList.map((task)=>{
      return task.id === id? 
      {...task, complete: !task.complete}: task}
     )
     setTaskList(newList)
   }


  return (
    <>
     <h1>Todo App</h1>
     <TodoForm onAddTask={onAddTask}/>
     <TodoList taskList={taskList} onDelete={onDelete} onEdit={onEdit} onChecked={onChecked} />
    </>
  )
}

export default App
