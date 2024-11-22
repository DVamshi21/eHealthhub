import React from 'react';
import { useSelector } from 'react-redux';

function ComponentB() {
  const message = useSelector((state) => state.message);

  return (
    <div>
      <h2>Component B</h2>
      <p style={{marginTop:'20px'}}>Received Message: {message}</p>
    </div>
  );
}

export default ComponentB;
