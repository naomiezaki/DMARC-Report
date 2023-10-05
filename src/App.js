import './App.css';
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';

import InputToken from './components/InputToken';
import InputTokenV2 from './components/InputToken-v2';

import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import {store} from "./app/store/store"
import { DMARCReportApi } from './app/api/report-v2';
import InputTokenV3 from './components/InputToken-v3';


function App() {
  return (
    // <Provider store={store}>
    //   <ApiProvider api={DMARCReportApi}>
    //     <div className="App">
    //       <Container className="p-3">
    //           <h1 className="header">DMARC Report</h1>
    //           <InputTokenV2/>
              
    //       </Container>
    //     </div>
    //   </ApiProvider>
    // </Provider>

    // <div className="App">
    //   <Container className="p-3">
    //       <h1 className="header">DMARC Report</h1>
    //       <InputToken/>
          
    //   </Container>
    // </div>

    <div className="App">
      <Container className="p-3">
          <h1 className="header">DMARC Report</h1>
          <InputTokenV3/>
          
      </Container>
    </div>
    
  );
}

export default App;
