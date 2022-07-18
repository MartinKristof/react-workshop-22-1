import { useState } from 'react';

const State = () => {
  const [color, setColor] = useState<string>('green');

  return (
    <div>
      <h1 style={{ color: color }}>React Hooks</h1>
      <button
        onClick={() => {
          setColor(() => 'red');
        }}
      >
        change color to red
      </button>
    </div>
  );
};

export default State;
