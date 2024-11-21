import React from 'react';
import { useSelector } from 'react-redux';

const componentB = () => { 
  const message = useSelector((state) => state.message); 

  return (
    <div>
      <h2>componentB (Receiver)</h2>
      <p>Received Message: {message}</p>
    </div>
  );
};

export default componentB; 
