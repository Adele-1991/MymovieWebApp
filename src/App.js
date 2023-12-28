import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import AboutUS from './components/AboutUs';


class App extends Component {

  render() { 
    return (
      <div>
      <Navbar/>
      <hr/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/AboutUs" element={<AboutUS/>}/>
      </Routes>
      </div>
    );
  }
}
 
export default App;