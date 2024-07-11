import React from 'react';
import Counter from './Counter';

const ParentCounter = () => {
  return (
    <div>
      <h1>Counter/Cost</h1>
      <Counter initialCount={0} />
      
    </div>
  );
};

export default ParentCounter;