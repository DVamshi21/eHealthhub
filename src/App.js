import React from 'react';
import { Provider } from 'react-redux'; 
import store from './State/store';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function App() {
  return (
  <>
    <Provider store={store}> 
      <div>
        <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Redux Data Transfer Example</h2>
        <hr></hr>
        <ComponentA />
        <hr></hr>
        <ComponentB />
        <hr></hr>
      </div>
    </Provider>
  </>
  );
}

export default App;
