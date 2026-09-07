import { useState } from "react"
import { Trash2, Pencil } from "lucide-react"
import type { Task } from "../types/task"

interface TodoItemsProps {
    task: Task
    onDelete: (id: number) => void
    onEdit: (id: number, text: string) => void
    onChangeStatus: (id: number, status: Task["status"]) => void
}

export const TodoItem = ({ task, onDelete, onEdit, onChangeStatus }: TodoItemsProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState("")
    function handleEdit() {
        if (text.trim().length > 0) {
            onEdit(task.id, text.trim())
            setIsEditing(false)
        }
    }
    return (
        <>
            <li className="w-full min-w-0 flex flex-col lg:flex-row lg:items-center gap-3 px-3 pb-4 border-b border-gray-300 ">
                <div className="flex flex-row flex-1 min-w-0">
                    <div className="flex justify-center w-6">
                        <input checked={task.status === "completed"} onChange={() => { onChangeStatus(task.id, task.status === "completed" ? "pending" : "completed") }} type="checkbox" />
                    </div>
                    <div className="flex-1 m-0.5 min-w-0">
                        {isEditing ?
                            (
                                <div className="px-2 py-1 flex flex-col gap-2">
                                    <input
                                        className="px-2 py-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                        value={text}
                                        onChange={(e) => { setText(e.target.value) }}
                                        type="text"
                                    />

                                    <select
                                        className="w-fit border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={task.status}
                                        onChange={(e) =>
                                            onChangeStatus(task.id, e.target.value as Task["status"])
                                        }
                                    >
                                        <option value="pending">Pendiente</option>
                                        <option value="in-progress">En progreso</option>
                                        <option value="completed">Completada</option>
                                    </select>
                                </div>
                            ) : (
                                <span
                                    className={
                                        task.status === "completed"
                                            ? "line-through block transition-all duration-300 break-all text-gray-600"
                                            : task.status === "in-progress"
                                                ? "italic block transition-all duration-300 break-all text-blue-600"
                                                : "font-semibold block transition-all duration-300 break-all"
                                    }
                                    title={task.name}
                                >
                                    {task.name}
                                </span>
                            )}
                        <div
                            className={
                                task.status === "pending"
                                    ? "inline-flex items-center gap-2 w-fit px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-sm"
                                    : task.status === "in-progress"
                                        ? "inline-flex items-center gap-2 w-fit px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm"
                                        : "inline-flex items-center gap-2 w-fit px-2 py-1 rounded-full bg-green-100 text-green-700 text-sm"
                            }
                        >
                            <span
                                className={
                                    task.status === "pending"
                                        ? "w-2 h-2 rounded-full bg-blue-500"
                                        : task.status === "in-progress"
                                            ? "w-2 h-2 rounded-full bg-yellow-500"
                                            : "w-2 h-2 rounded-full bg-green-500"
                                }
                            />

                            <span>
                                {task.status === "pending"
                                    ? "Pendiente"
                                    : task.status === "in-progress"
                                        ? "En progreso"
                                        : "Completada"}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-3 lg:shrink-0">
                    <div className="w-20">
                        <button type="button" className="flex items-center gap-1 text-red-600 border border-red-600 px-3 py-0.3 cursor-pointer rounded shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-gray-100 active:scale-95" onClick={() => onDelete(task.id)}>
                            <Trash2 size={18} />
                            <span>
                                Borrar
                            </span>
                        </button>
                    </div>
                    <div className="w-24 text-center">
                        {
                            isEditing ?
                                <div className="w-20">
                                    <button type="button" className="gap-1 flex mx-1 px-1 py-0.3 items-center border border-gray-400 cursor-pointer rounded hover:bg-gray-100 transition" onClick={handleEdit}>
                                        <Pencil size={18} />
                                        <span>
                                            Guardar
                                        </span>
                                    </button>
                                </div>
                                :
                                <div className="w-20">
                                    <button className="flex gap-1 items-center mx-1 px-3 py-0.3 border border-gray-400 cursor-pointer rounded shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95 hover:bg-gray-100"
                                        onClick={() => {
                                            setIsEditing(true)
                                            setText(task.name)
                                        }}>
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