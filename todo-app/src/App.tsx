import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id:i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}
///////////////

  const array = [1,2,3,4,5];
  
  const nextArrayBad = array; // 그냥 배열을 가르킴
  nextArrayBad[0] = 100;
  console.log(array === nextArrayBad);

  const nextArrayGood = [...array];
  nextArrayGood[0] = 100;

  console.log(array === nextArrayGood);

  const object = {
    foo: 'bar',
    value: 1,
    name: 'test'
  }

  const nextObjectBad = object;
  nextObjectBad.value = nextObjectBad.value + 1;
  console.log(object === nextObjectBad);

  const nextObjectGood = {
    ...object,
    value: object.value+1
  }

  console.log(object === nextObjectGood);
  console.log(nextObjectGood);




//////////////

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    },
    []
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    []
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      )
    },
    []
  );


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
