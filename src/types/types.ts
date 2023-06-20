export type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "CHANGE_STATUS"; payload: number }
  | { type: "CHANGE_TITLE"; payload: { id: number; title: string } }
  | { type: "REMOVE_TODO"; payload: number };

export type StateType = { todos: Todo[] };

export type MainState = {
  state: StateType;
  dispatch: React.Dispatch<Action>;
};
