import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from  './components/Header';
import Footer from  './components/Footer';
import Home from  './components/Home';
import Login from  './components/Login';
import Signup from  './components/Signup';
import Profile from  './components/Profile';
import JokesDisplay from  './components/JokesDisplay';
import FunFactsDisplay from  './components/FunFactsDisplay';
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/' exact render={() => <Home />}/>
      <Route path='/login' render={(props) => <Login {...props} />} />
      <Route path='/signup' render={(props) => <Signup {...props}/>} />
      <Route path='/profile/:id' render={() => <Profile />} />
      <Route path='/jokes' render={() => <JokesDisplay />}/>
      <Route path='/funfacts' exact render={() => <FunFactsDisplay />}/>
      <Footer />
    </div>
  );
}

export default App;
