import { Task } from "./Task"

export interface User {
    id: number,
    code: string,
    name: string,
    surname: string,
    age?: number,
    email?: string,
    location: string,
    tasks: Task []
}