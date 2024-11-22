export type route = {
  title: string;
  url: `/${string}`;
  bold?: true;
};

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
}

export interface ActionDispatch {
  type: DispatchType;
  payload: {
    id: ID;
    title?: string;
    todos?:ToDo[]
  };
}

export type Quote = {
  content: string;
  author: string;
  id: ID;
};
