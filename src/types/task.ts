export type TaskStatus = "pending" | "in-progress" | "completed"

export interface Task  {
    id: number,
    name: string,
    status: TaskStatus,
    dueDate?: string
    notes?: string
}