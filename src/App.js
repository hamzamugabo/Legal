import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from '../src/auth/Login';
import firebase from "firebase/app";
import "firebase/database";
import Register from '../src/auth/Register';
import Home from '../src/components/tutorials-list.component';
import Admin from '../src/components/Home';
import AddLegalAid from '../src/components/add-tutorial.component';
import { BrowserRouter,Switch,Route } from "react-router-dom";

// import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBJk7uMiqeA2y58nPOlcknqoXsoTRvWwrY",
  authDomain: "legal-aid-1b91e.firebaseapp.com",
  databaseURL: "https://legal-aid-1b91e.firebaseio.com",
  projectId: "legal-aid-1b91e",
  storageBucket: "legal-aid-1b91e.appspot.com",
  messagingSenderId: "378154352179",
  appId: "1:378154352179:web:d4881953b13bc22832ed46",
  measurementId: "G-6527YCQVLM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
class App extends Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav> */}

        <div className="container mt-3">
          <h2>Legal Aid</h2>
          {/* <Login/> */}
          <BrowserRouter>
          <Switch>
            
         <Route exact path="/" component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/home" component={Home} />
         <Route path="/admin" component={Admin} />
         <Route path="/addLegalAid" component={AddLegalAid} />
          </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
