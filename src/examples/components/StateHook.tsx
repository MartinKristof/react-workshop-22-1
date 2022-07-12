import React from 'react';

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [nic, setNic] = React.useState(5);

  return (
    <>
      <h2>useState</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <button type="button" onClick={() => setNic(nic + 1)}>
        {nic}
      </button>
    </>
  );
};
