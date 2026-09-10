import { useState, useEffect } from "react"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"
import { Task } from "./types/task"
import { ClipboardList, Clock3, Check } from "lucide-react"


function App() {
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const save = localStorage.getItem("tasks")

    return save ? JSON.parse(save) : []
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList))
  }, [taskList])



  console.log(taskList)

  function onAddTask(text: string) {
    setTaskList([...taskList,
    { id: Date.now(), name: text, status: "pending" }
    ])
  }

  function onDelete(id: number) {
    const newList = taskList.filter((task) => task.id !== id)
    setTaskList(newList)
  }

  function onEdit(id: number, text: string) {
    console.log(id, text)
    const newList = taskList.map((task) => {
      return task.id === id ?
        { ...task, name: text } : task
    })
    setTaskList(newList)
  }

  function onChangeStatus(id: number, status: Task["status"]) {
    const newList = taskList.map((task) => {
      return task.id === id
        ? { ...task, status }
        : task
    })

    setTaskList(newList)
  }

  const taskPending = taskList.filter((task) => {
    return task.status === "pending"
  }).length

  const taskInProgress = taskList.filter((task) => {
    return task.status === "in-progress"
  }).length

  const taskComplete = taskList.filter((task) => {
    return task.status === "completed"
  }).length



  return (
    <>
      <div className="min-h-screen grid place-items-center bg-zinc-100">
        <div className="w-80 my-5 lg:w-full flex flex-col gap-4 max-w-md rounded-xl bg-white shadow-2xl">
          <h1 className="text-center text-blue-700 font-bold text-2xl -mb-8 p-6">
            Task Manager
          </h1>
          <h3 className="text-center text-xs text-gray-500 font-semibold">
            Organizá tus tareas y objetivos
          </h3>
          <div className="mx-6 rounded-xl bg-white shadow-[0_0_15px_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-center justify-center py-4 border-r border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
                  <ClipboardList size={20} />
                </div>

                <span className="mt-2 text-2xl font-bold text-gray-900">
                  {taskPending}
                </span>

                <span className="text-sm text-gray-600 text-center font-semibold">
                  Pendientes
                </span>
              </div>
              <div className="flex flex-col items-center justify-center py-4 border-r border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-white">
                  <Clock3 size={20} />
                </div>

                <span className="mt-2 text-2xl font-bold text-gray-900">
                  {taskInProgress}
                </span>

                <span className="text-sm text-gray-600 text-center font-semibold">
                  En proceso
                </span>
              </div>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
                  <Check size={20} />
                </div>

                <span className="mt-2 text-2xl font-bold text-gray-900">
                  {taskComplete}
                </span>

                <span className="text-sm text-gray-600 text-center font-semibold">
                  Completadas
                </span>
              </div>
            </div>
          </div>
          <TodoForm onAddTask={onAddTask} />
          <TodoList taskList={taskList} onDelete={onDelete} onEdit={onEdit} onChangeStatus={onChangeStatus} />
        </div>
      </div>
    </>
  )
}

export default App
