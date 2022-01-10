import React, { useState } from 'react';
import MyComp from './MyComp';
import Users from './users';
import HOC from './hoc';
import './style.css';

export default function App() {
  const [count, setConut] = useState(0);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <MyComp />
      <Users />
      <input
        type="button"
        value="increment Count"
        onClick={() => {
          setConut(count + 1);
        }}
      />
      <HOC count={count} />
    </div>
  );
}
