export type route = {
    title: string,
    url:`/${string}`,
    bold?:true
}

export type ToDo = {
    title: string,
    completed: boolean,
    id: ToDoID
} 

type ToDoID = `${string}-${string}-${string}-${string}`

export enum DispatchType {
    ADD = "add",
    DELETE = "delete",
    COMPLETE = "complete"
}

export interface ActionDispatch{
    type: DispatchType
    payload : {
        id: ToDoID
        title?:string
    }
} 