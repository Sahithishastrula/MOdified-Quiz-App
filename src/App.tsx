import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './components/Home'
import Quiz from './components/Quiz';
import PermanentDrawerLeft from './components/sidebar'

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        
        
    <Router>
      <PermanentDrawerLeft />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />

      </Routes>
      
    </Router>
    
    </StyledEngineProvider> 
    </div>
  );
}

export default App;
