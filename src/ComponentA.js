import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function ComponentA() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch({ type: 'SET_MESSAGE', payload: input });
  };

  return (
    <div style={{marginBottom:'20px'}}>
      <h2>Component A</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a message"
        style={{width:'300px',padding:'8px',marginBottom:'10Px'}}
      />
      <br />
      <button onClick={handleSend}>Send Message</button>
    </div>
  );
}

export default ComponentA;
