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
        jokes: [],
        funFact: ''
    }
}

  componentDidMount = () => {
      axios.get('https://official-joke-api.appspot.com/jokes/ten')
      .then(resp => {
          console.log(resp.data)
          this.setState({
              jokes: resp.data
          })
      })
      axios.get('http://numbersapi.com/random?min=0&max=1000')
      .then(resp => {
          console.log(resp.data)
          this.setState({
              funFact: resp.data,
          })
      })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/' exact render={() => <Home funFact={this.state.funFact} />}/>
        <Route path='/login' render={(props) => <Login {...props} />} />
        <Route path='/signup' render={(props) => <Signup {...props}/>} />
        <Route path='/profile/:id' render={() => <Profile />} />
        <Route path='/jokes' render={() => <JokesDisplay jokes={this.state.jokes}/>}/>
        <Route path='/funfacts' exact render={() => <FunFactsDisplay funFact={this.state.funFact}/>}/>
        <Footer />
      </div>
    );
  }
}

export default App;
