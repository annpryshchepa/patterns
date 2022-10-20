import { useEffect, useState } from 'react';
import { counter } from './counter';

export const Singltone = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(counter.result());
  }, []);

  return (
  <div>
    <p>{count || "Click"}</p>
    <button type='button' id='one' onClick={() => counter.increment()}>+</button>
    <button type='button' id='two' onClick={() => counter.decrement()}>-</button>
  </div>
)};
