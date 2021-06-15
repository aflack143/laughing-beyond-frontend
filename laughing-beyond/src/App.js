import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Header from  './components/Header';
import Footer from  './components/Footer';
import Home from  './components/Home';
import Login from  './components/Login';
import Signup from  './components/Signup';
import Profile from  './components/Profile';
import JokesDisplay from  './components/JokesDisplay';
import FunFactsDisplay from  './components/FunFactsDisplay';
import {Route} from 'react-router-dom'
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.state = {
        funFact: ''
    }
}

  componentDidMount = () => {
      axios.get('http://numbersapi.com/random')
      .then(resp => {
          this.setState({
              funFact: resp.data,
          })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route path='/' exact render={() => <Home funFact={this.state.funFact} />}/>
          <Route path='/login' render={(props) => <Login {...props} />} />
          <Route path='/signup' render={(props) => <Signup {...props}/>} />
          <Route path='/profile/:id' render={(props) => <Profile {...props} />} />
          <Route path='/jokes' render={() => <JokesDisplay />}/>
          <Route path='/funfacts' exact render={() => <FunFactsDisplay funFact={this.state.funFact}/>}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
