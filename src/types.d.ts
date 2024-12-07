export interface Route {
  title: string;
  url: `#${string}`;
  bold?: true;
}

export interface VitalArea extends Route {
  color: string;
  id: number;
}

export type ToDo = {
  title: string;
  completed: boolean;
  id: ID;
};

type ID = `${string}-${string}-${string}-${string}`;

export enum DispatchType {
  ADD = "add",
  DELETE = "delete",
  COMPLETE = "complete",
  SET = "set",
  CLEAR = "clear"
}

export interface ActionDispatch {
  type: DispatchType;
  payload: {
    id: ID;
    title?: string;
    todos?: ToDo[];
  };
}

export type Quote = {
  content: string;
  author: string;
  id: ID;
};

export enum filters {
  ALL = "add",
  ACTIVE = "active",
  COMPLETED = "completed",
}
