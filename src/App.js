import React from 'react';
import {Order} from './components/order/order'
import {Carrier} from './components/carrier/carrier'

function App() {
  let state = {
    authors:[]
  }
  return (
    <div className="App">
      <header className="App-header">
        <Order></Order>
        <Carrier></Carrier>
      </header>
    </div>
  );
}

export default App;
