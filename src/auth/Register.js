import React, { Component } from "react";
import axios from "axios";
import firebase, * as firbase from "firebase";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// const db = firebase.ref("/LegalAid");
// import firebase from 'firebase/app';
// import  "firebase/firestore";
// import 'firebase/auth';

// let config1 =  {
//   apiKey: "AIzaSyBJk7uMiqeA2y58nPOlcknqoXsoTRvWwrY",
//   authDomain: "legal-aid-1b91e.firebaseapp.com",
//   databaseURL: "https://legal-aid-1b91e.firebaseio.com",
//   projectId: "legal-aid-1b91e",
//   storageBucket: "legal-aid-1b91e.appspot.com",
//   messagingSenderId: "378154352179",
//   appId: "1:378154352179:web:d4881953b13bc22832ed46",
//   measurementId: "G-6527YCQVLM"
// };
//   // Initialize Firebase
//   firebase.initializeApp(config1);
//    const auth = firebase.auth();
//    const firestore = firebase.firestore();
// const db = firebase.auth();
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTellphone = this.onChangeTellphone.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      displayName: "",
      email: "",
      tellphone:'',
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      displayName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeTellphone(e) {
    this.setState({
        tellphone: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`displayName: ${this.state.displayName}`);
    console.log(`email: ${this.state.email}`);
    console.log(`tellphone: ${this.state.tellphone}`);
    console.log(`password: ${this.state.password}`);

    const newTodo = {
      displayName: this.state.displayName,
      email: this.state.email,
      tellphone: this.state.tellphone,
      password: this.state.password,
    };

    // handleSignUp = () => {
        // this.setState({ loading: true, disabled: true });
     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                this.props.history.push("/login");
                return userCredentials.user.updateProfile({
                    displayName: this.state.displayName,
                    phoneNumber: this.state.tellphone
                });
    
            })
            .catch((error) => {
              console.log(error);
              this.setState({ errorMessage: error.message }); 
              //  this.setState({ loading: false, disabled: false });
          });
      
    // };

    this.setState({
      displayName: "",
      email: "",
      tellphone: "",
      password: "",
    });
   
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  login = () => {
    return this.props.history.push('/');
    }
  render() {
    return (
      <div className="container">
      <div className="submit-form">
        <h3>Register</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Usename: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.displayName}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Phone Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tellphone}
              onChange={this.onChangeTellphone}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
        {/* <button onClick={this.login.bind(this)}>Back to Login</button> */}
        <Button variant="link"  onClick={this.login.bind(this)}>Back to Login</Button> 
      </div>
      </div>
    );
  }
}