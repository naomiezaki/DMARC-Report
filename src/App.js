import './App.css';
import React, { useState } from 'react';

import DMARCReport from './pages/DMARCReport';


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
      <DMARCReport/>
    </div>
    
  );
}

export default App;
