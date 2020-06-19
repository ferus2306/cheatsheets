import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import PythonSheet from './components/PythonSheet';
// import Home from './components/Home';
import ReactSheet from './components/ReactSheet';
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/python' component={PythonSheet} />
        <Route path='/react' component={ReactSheet} />
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
