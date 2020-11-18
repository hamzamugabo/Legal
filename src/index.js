import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import routes from '../src/components/routes';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import Register from '../src/auth/Register';
import Home from '../src/components/tutorials-list.component';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Switch>
      </BrowserRouter>,
      
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
