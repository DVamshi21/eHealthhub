import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const componentA = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    dispatch({ type: 'SET_MESSAGE', payload: input }); 
  };

  return (
    <div>
      <h2>componentA (Sender)</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a message"
      />
      <button onClick={handleSendMessage}>Send to componentB</button>
    </div>
  );
};

export default componentA;
