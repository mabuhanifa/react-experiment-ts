export type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "CHANGE_STATUS"; payload: number };

export type StateType = { todos: Todo[] };

export type MainState = {
  state: StateType;
  dispatch: React.Dispatch<Action>;
};