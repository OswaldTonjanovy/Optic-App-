import React from 'react';
// npm i react-router-dom y agregar lineas 3, y del 10 al 14
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Editing from './Editing';
import WebcamPhoto from './WebcamPhoto';
import Button from './Button';
import Header from './Header';
import './assets/app.css';


class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Button} />
          <Route exact path='/home' component={WebcamPhoto} />
          <Route exact path='/editing' component={Editing} />
        </Switch>
      </BrowserRouter>
      </>
    )
  };
}

export default App;
