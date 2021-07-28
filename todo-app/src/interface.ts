export interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

export interface TodoState {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}