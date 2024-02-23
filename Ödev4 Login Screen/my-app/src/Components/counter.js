import React, { useReducer } from 'react';
import Login from './login';


const counterReducer = (state, action) => {
  switch (action.type) {
    case 'ARTTIR':
      return state + 3;
    case 'AZALT':
      return state - 2;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'ARTTIR' })}>Arttır</button>
      <button onClick={() => dispatch({ type: 'AZALT' })}>Azalt</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Resetle</button>
    </div>
  );
};

export default Counter;
