import React, { memo } from 'react';

function count({ count = 0 }) {
  return (
    <>
      <h1>Three Counter</h1> <div>{count}</div>
    </>
  );
}

function validateFunction(prev, next) {
  console.log('hhhhhhhhh', next);
  return next.count % 3 === 0 ? false : true;
}

export default memo(count, validateFunction);
