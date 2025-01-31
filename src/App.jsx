import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Basket from './pages/Basket';


const App = () => {
  return (
    <>
    
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/basket' element={<Basket />} />
    </Routes>
   </Router>
  
    </>
    
  );
}

export default App;
