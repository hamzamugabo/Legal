import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import  firebase from "firebase/app";
import 'firebase/auth';
export default class AddLegalAid extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTellphone = this.onChangeTellphone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.back = this.back.bind(this);

    this.state = {
      Description: "" ,
      Email: "",
      Name:'',
      Logo:'',
      District:'',
      Address: "",
      Tellphone: "",
      confirm_agreement: false,
      loading: false,
      disabled: false,
      currentUser: null,
      ImageSource: null,
      stimage: null,
      stuploading: false,
      sttransferred: 0,
      photos: '',
      published: false,

      submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      Name: e.target.value,
    });
  }

 
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value,
    });
  }
  onChangeTellphone(e) {
    this.setState({
      Tellphone: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value,
    });
  }
  onChangeDistrict(e) {
    this.setState({
      District: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      Description: e.target.value,
    });
  }


  saveTutorial() {
    firebase.
      auth().onAuthStateChanged((user) => {
        if (user) {
          let data = {
            Name: this.state.Name,
            Email: this.state.Email,
            Tellphone: this.state.Tellphone,
            Address: this.state.Address,
            District: this.state.District,
            Description: this.state.Description,
            published: false
          };
      
          TutorialDataService.create(data)
            .then(() => {
              console.log("Added new Legal Aid successfully!");
              this.setState({
                submitted: true,
              });
            })
            .catch((e) => {
              console.log(e);
            });
        } else{
    this.props.history.push("/Legal");
          
          alert("The user is Logge-out")
        }
      });
    
   
  }

  newTutorial() {
    this.setState({
      Description: "" ,
      Email: "",
      Name:'',
      Logo:'',
      District:'',
      Address: "",
      Tellphone: "",
      confirm_agreement: false,
      published: false,

      submitted: false,
    });
  }
  back(){
    this.props.history.push('/admin');
  }
  // Back(){
  //   this.props.history.push('/admin');
  // }

  render() {
    return (
      <div className="submit-form" style={{marginTop:30}}>
         
        <h3>Add Legal Aid</h3>
       
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
            <button className="btn btn-info" onClick={this.back}>
              Back
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                required
                value={this.state.Email}
                onChange={this.onChangeEmail}
                name="Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Tellphone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="Tellphone"
                required
                value={this.state.Tellphone}
                onChange={this.onChangeTellphone}
                name="Tellphone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="District">District</label>
              <input
                type="text"
                className="form-control"
                id="District"
                required
                value={this.state.District}
                onChange={this.onChangeDistrict}
                name="District"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                className="form-control"
                id="Address"
                required
                value={this.state.Address}
                onChange={this.onChangeAddress}
                name="Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                className="form-control"
                id="Description"
                required
                value={this.state.Description}
                onChange={this.onChangeDescription}
                name="Description"
              />
            </div>
            <button
            className="m-3 btn btn-sm btn-info"
            style={{
              display:'flex',
              justifyContent:'flex-end',
              float:'right'
            }}
            onClick={this.back}
          >
            Back
          </button>
            <button onClick={this.saveTutorial} className="btn btn-success">
              Add
            </button>
          </div>
        )}
      </div>
    );
  }
}
