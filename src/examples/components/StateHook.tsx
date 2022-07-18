import React from 'react';

export const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  const [nic, setNic] = React.useState<number>(5);

  const handleState = (previousCount: number) => setCount(previousCount + 1);

  return (
    <>
      <h2>useState</h2>
      <button
        type="button"
        onClick={() => {
          handleState(count);
        }}
      >
        {count}
      </button>
      <button type="button" onClick={() => setNic(nic + 1)}>
        {nic}
      </button>
    </>
  );
};
