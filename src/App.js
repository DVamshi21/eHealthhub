import React from 'react';
import componentA from './components/componentA';
import componentB from './components/componentB';

const App = () => {
  return (
    <div>
      <h1>Redux Data Sharing Example</h1>
      <componentA />
      <componentB />
    </div>
  );
};

export default App;
