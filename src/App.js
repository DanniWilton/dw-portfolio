import React from 'react';

import Navbar from './Components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/pages/About';
import Home from './Components/pages/Home.js';
import Resume from './Components/pages/Resume.js'
import Contact from './Components/pages/Contact';
import Projects from './Components/pages/Projects';


function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
    <Navbar />
    <Switch>
      <Route path= '/' exact component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Projects' component={Projects} />
      <Route path='/Contact' component={Contact} /> 
      <Route path='/Resume' component={Resume} />

    </Switch>
    </Router>    
    // </ApolloProvider>
  );
}

export default App;
