import React from 'react';

type State = {
  count: number;
  value: number;
};

const initialState: State = { count: 0, value: 0 };

const reducer = (state: State, action: { type: string; value: number }) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, value: action.value };
    case 'decrement':
      return { ...state, count: state.count - 1, value: action.value };
    default:
      return state;
  }
};
export const CounterWithDispatcher = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <h2>useReducer</h2>
      Count: {state.count}
      Value: {state.value}
      <button type="button" onClick={() => dispatch({ type: 'decrement', value: -1 })}>
        -
      </button>
      <button type="button" onClick={() => dispatch({ type: 'increment', value: 1 })}>
        +
      </button>
    </>
  );
};
