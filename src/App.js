import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import NotebookContainer from './NotebookContainer'
import Form from './Form'
import Footer from './Footer'
import Home from './Home'
import NavBar from './NavBar'
import About from './About'
import New from './New'
import Edit from './Edit'
import { Provider } from 'react-redux'
import store from './store' 

const App = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/new" component={New} />
          <Route exact path="/notebooks/:id" component={Edit} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
