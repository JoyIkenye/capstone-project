import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import Checkout from './pages/Checkout';


function App() {
  return (
    <div> 
      <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      </Routes> 
    </div>
  );
}

export default App;
