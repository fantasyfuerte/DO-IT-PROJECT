export const getData = (key: string) => {
  let initial;
  const data = window.localStorage.getItem(`${key}`);
  if (data) {
    initial = JSON.parse(data);
  }
  return initial;
};

export const saveData = (key: string, content: string) => {
  window.localStorage.setItem(key, content);
};

import { DispatchType, ActionDispatch, ToDo } from "@/types.d";

export function reduce(todos: ToDo[], action: ActionDispatch): ToDo[] {
  switch (action.type) {
    case DispatchType.ADD:
      if (!action.payload.title) return todos;
      return [
        ...todos,
        {
          title: action.payload.title,
          id: action.payload.id,
          completed: false,
        },
      ];
    case DispatchType.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case DispatchType.COMPLETE:
      return todos.map((todo) => {
        if (todo.id == action.payload.id)
          return { ...todo, completed: !todo.completed };
        return todo;
      });
    case DispatchType.SET:
      if (action.payload.todos) return action.payload.todos;
  }
  return todos;
}
