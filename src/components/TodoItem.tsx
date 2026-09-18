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
            <li
                className={`w-full min-w-0 flex flex-col lg:flex-row lg:items-center gap-3 px-3 pb-4 border-b rounded-xl overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.10)] border-gray-300 border-l-4 ${task.status === "pending"
                    ? "border-l-blue-500"
                    : task.status === "in-progress"
                        ? "border-l-yellow-500"
                        : "border-l-green-500"
                    }`}
            >

                <div className="flex flex-row flex-1 min-w-0">

                    <div className="flex justify-center w-6">
                        <input
                            className="accent-green-600"
                            checked={task.status === "completed"}
                            onChange={() => {
                                onChangeStatus(
                                    task.id,
                                    task.status === "completed"
                                        ? "pending"
                                        : "completed"
                                )
                            }}
                            type="checkbox"
                        />
                    </div>

                    <div className="flex-1 m-0.5 min-w-0">

                        {isEditing ? (

                            <div className="flex flex-col">

                                <input
                                    className="w-full px-0 py-0 border-0 outline-none bg-transparent font-medium text-gray-700 focus:ring-0"
                                    value={text}
                                    onChange={(e) => {
                                        setText(e.target.value)
                                    }}
                                    type="text"
                                />

                                <select
                                    className={
                                        task.status === "pending"
                                            ? "w-fit px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-sm border-0 mt-1"
                                            : task.status === "in-progress"
                                                ? "w-fit px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm border-0 mt-1"
                                                : "w-fit px-2 py-1 rounded-full bg-green-100 text-green-700 text-sm border-0 mt-1"
                                    }
                                    value={task.status}
                                    onChange={(e) =>
                                        onChangeStatus(
                                            task.id,
                                            e.target.value as Task["status"]
                                        )
                                    }
                                >
                                    <option value="pending">
                                        Pendiente
                                    </option>

                                    <option value="in-progress">
                                        En proceso
                                    </option>

                                    <option value="completed">
                                        Completada
                                    </option>
                                </select>

                            </div>

                        ) : (

                            <>
                                <span
                                    className={
                                        task.status === "completed"
                                            ? "line-through font-medium block transition-all duration-300 break-all text-gray-700"
                                            : "block font-medium transition-all duration-300 break-all text-gray-700"
                                    }
                                    title={task.name}
                                >
                                    {task.name}
                                </span>
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
                                                ? "En proceso"
                                                : "Completada"}
                                    </span>

                                </div>
                            </>

                        )}

                    </div>
                </div>

                <div className="flex flex-row justify-center gap-3 lg:shrink-0">

                    <div className="w-20 mr-4">

                        <button
                            type="button"
                            className="flex items-center gap-1 text-red-600 border border-red-600 px-3 py-0.3 cursor-pointer rounded shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-gray-100 active:scale-95"
                            onClick={() => onDelete(task.id)}
                        >
                            <Trash2 size={18} />

                            <span>
                                Borrar
                            </span>
                        </button>

                    </div>

                    <div className="w-24 text-center">

                        {isEditing ? (

                            <div className="w-20">

                                <button
                                    type="button"
                                    className="gap-1 flex mx-1 px-1 py-0.3 items-center border border-gray-400 cursor-pointer rounded hover:bg-gray-100 transition"
                                    onClick={handleEdit}
                                >
                                    <Pencil size={18} />

                                    <span>
                                        Guardar
                                    </span>
                                </button>

                            </div>

                        ) : (

                            <div className="w-20">

                                <button
                                    type="button"
                                    className="flex gap-1 items-center mx-1 px-3 py-0.3 border border-gray-400 cursor-pointer rounded shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95 hover:bg-gray-100"
                                    onClick={() => {
                                        setIsEditing(true)
                                        setText(task.name)
                                    }}
                                >
                                    <Pencil size={18} />

                                    <span>
                                        Editar
                                    </span>
                                </button>

                            </div>

                        )}

                    </div>

                </div>

            </li>
        </>
    )
}