import React, { useReducer } from 'react';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1};
    case 'DECREMENT':
      return { value: state.value - 1};
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0});
  return (
    <div>
      <p>
        현재 카운터 같은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT'})}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT'})}>-1</button>
    </div>
  );
};

export default CounterReducer;