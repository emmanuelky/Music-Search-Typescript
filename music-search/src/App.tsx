import React from 'react';
import './App.css';
import DetailPage from './components/DetailPage';
import Main from './components/Main';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/details/:id" component={DetailPage} />

    </BrowserRouter>
  );
}

export default App;