import React from 'react';
import Navbar from './Components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <Navbar />
    <Switch>
      <Route path= '/' exact component={Home} />
      <Route path='/Projects' component={Projects} />
      <Route path='/Resume' component={Resume} />
      <Route path='/Contact' component={Contact} />
    </Switch>
    </Router>    
    </ApolloProvider>
  );
}

export default App;
