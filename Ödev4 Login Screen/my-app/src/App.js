import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Login from './Components/login';
import Counter from './Components/counter';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes> 
          <Route path='/' element={<Login/>}></Route>
          <Route path='/counter' element={<Counter/>}></Route>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
