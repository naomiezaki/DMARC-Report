import './App.css';
import React, { useState } from 'react';

import GetDMARCReport from './pages/GetDMARCReport';
import CreateDMARCRecord from './pages/CreateDMARCRecord';


function App() {
  return (
    <div className="App">
      <GetDMARCReport/>
      <CreateDMARCRecord/>
    </div>
    
  );
}

export default App;
