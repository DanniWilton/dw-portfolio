import React from 'react';
import Navbar from './Components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home.js';
import Contact from './Components/pages/Contact';

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
    <Navbar />
    <Switch>
      <Route path= '/' exact component={Home} />
      <Route path='/Contact' component={Contact} /> 
      
      {/* <Route path='/Projects' component={Projects} />
      <Route path='/Resume' component={Resume} />
*/}
    </Switch>
    </Router>    
    // </ApolloProvider>
  );
}

export default App;
