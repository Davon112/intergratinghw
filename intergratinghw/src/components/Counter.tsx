import React, { useState } from 'react';

interface CounterProps {
  initialCount: number;
}

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState<number>(initialCount);

  const plus = () => setCount(prevCount => prevCount + 1);
  const minus = () => setCount(prevCount => prevCount - 1);
  const clear = () => setCount(initialCount);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default Counter;