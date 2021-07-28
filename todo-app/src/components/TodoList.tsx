import React, { useCallback } from 'react';
import { TodoState, Todo } from '../interface';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

interface rowRenderer {
  index:number;
  key:number;
  style:any;
}

const TodoList = ({ todos, onRemove, onToggle }: TodoState) => {

  const rowRenderer = useCallback(
    ({ index, key, style}:any) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      )
    },
    [onRemove, onToggle, todos]
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none'}}
    />
  );
};

export default React.memo(TodoList);