import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import {Button,DropdownButton,Dropdown} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Tutorial from "./tutorial.component";
import  firebase from "firebase/app";
import 'firebase/auth';
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    // this.usertype = this.usertype.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.Logout = this.Logout.bind(this);
    this.addLegalAid = this.addLegalAid.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tutorials: [],
      data: [],
      currentTutorial: null,
      currentIndex: -1,
      // currentUser:null,
      admin:false,
      user:false,
      email:''
    };
  }

  componentDidMount() {
    TutorialDataService.getAll().on("value", this.onDataChange);
    // this.usertype.bind(this);
  }

  

  componentWillUnmount() {
    TutorialDataService.getAll().off("value", this.onDataChange);
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      tutorials.push({
        key: key,
        Name: data.Name,
        Email: data.Email,
        Tellphone: data.Tellphone,
        District: data.District,
        Address: data.Address,
        Description: data.Description,
        // published: data.published,
      });
    });

    this.setState({
      tutorials: tutorials,
    });
    this.arrayholder = tutorials;
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  Logout() {
    
    firebase.auth().signOut();
    this.props.history.push("/Legal");
  }
  addLegalAid() {
    
    // firebase.auth().signOut();
    this.props.history.push("/addLegalAid");
  }
  searchFilterFunction = (District) => {
    // text = this.state.data.District;
    // this.setState({
    //   value: this.state.data.District,
    // });

    // const newData = this.arrayholder.filter((item) => {
    //   const itemData = `${item.Address.toUpperCase()} ${item.District.toUpperCase()}${item.Name.toUpperCase()}`;
    //   const textData = District.toUpperCase();

    //   return itemData.indexOf(textData) > -1;
    // });
    // this.setState({
    //   data: newData,
    // });
    console.log(District);
    let approvalVariable = District
    let filteredData = this.state.tutorials.filter(x => String(x.District).includes(approvalVariable));

    this.setState({
      tutorials: filteredData,
    });
console.log(this.state.tutorials);
// const data = filteredData.map((Legal) => {});
// console.log(data);

  };
  all = () => {
    TutorialDataService.getAll().on("value", this.onDataChange);
    }

  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="container" style={{backgroundColor:'#DCDCDC'}}>
       {/* {this.state.admin?"rue":"no"} */}
          <h4>Legal Aid List</h4>
          <div className="row">
            <div className="col-sm-4">
          <DropdownButton id="dropdown-basic-button" title="Select District">
  <Dropdown.Item > <div>
          <Button
          style={{backgroundColor:'#000080',padding:10}}
                // style={[styles.buttonContainer, styles.loginButton]}
                // onPress={this.searchFilterFunction}
                // key={index}
                  onClick={this.all.bind(this)}

                >
               All
              </Button>
              </div></Dropdown.Item>
  <Dropdown.Item>
  {tutorials &&
              tutorials.map((order, index) => (
              
              <div className="d-flex justify-content-around" key={index} style={{borderBottomColor:'orange',padding:10}}>
                 <Button
          style={{backgroundColor:'#000080',padding:10}}

                // style={[styles.buttonContainer, styles.loginButton]}
                // onPress={this.searchFilterFunction}
                key={index}
                  onClick={this.searchFilterFunction.bind(this, order.District)}

                >
               {order.District}
              </Button>
                </div>
                ))}
  </Dropdown.Item>
</DropdownButton>
</div>
<div className="col-sm-4">


{/* <form onSubmit={this.onSubmit}>
<input
                type="text"
                // className="form-control"
                id="search"
                required
                value={this.state.search}
                onChange={this.search}
                name="search"
              />
              <input
              type="submit"
              value="Search"
              style={{float:'right'}}
              // className="btn btn-primary"

            />
              </form> */}
</div>
<div className="col-sm-4">

          <button
            className="m-3 btn btn-sm btn-danger"
            style={{
              display:'flex',
              justifyContent:'flex-end',
              float:'right'
            }}
            onClick={this.Logout}
          >
            Logout
          </button>
          <button
            className="m-3 btn btn-sm btn-success"
            style={{
              display:'flex',
              justifyContent:'flex-end',
              float:'right'
            }}
            onClick={this.addLegalAid}
          >
            Add Legal Aid
          </button>
          </div>
          </div>
{'\n'}
<div></div>
        
              {/* <div > */}
              {/* <div  className="row" style={{padding:10}}>
              <div>
          <Button
          style={{backgroundColor:'#000080',padding:10}}
               
                  onClick={this.all.bind(this)}

                >
               All
              </Button>
              </div>
          {tutorials &&
              tutorials.map((order, index) => (
              
              <div className="d-flex justify-content-around" key={index} style={{borderBottomColor:'orange',padding:10}}>
                 <Button
          style={{backgroundColor:'#000080',padding:10}}

               
                key={index}
                  onClick={this.searchFilterFunction.bind(this, order.District)}

                >
               {order.District}
              </Button>
                </div>
                ))}
                
          </div> */}
      <div className="list row">

           <div className="col-md-5">
            
          <ul className="list-group">
            {}
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}

                  style={{
                    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    // backgroundColor: '#000080',
    padding: 20,
    borderRadius: 10,
    // width: 155,
    // height: 120,
    alignItems:'flex-start',
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
                  }}

                >
                <div>
                <p><strong> Name:</strong>   {tutorial.Name}</p>  
                <p><strong>Address:</strong>   {tutorial.Address}</p>  
                <p><strong>District:</strong>   {tutorial.District}</p>  
                <p><strong>Email:</strong>   {tutorial.Email}</p>  
                <p><strong> Tellphone:</strong>   {tutorial.Tellphone}</p>  
                <p><strong> Description:</strong>   {tutorial.Description}</p>  
                </div>
                  
                </li>
              ))}
              
         
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-5">
          {currentTutorial ? (
            <Tutorial
              tutorial={currentTutorial}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click Legal Aid..</p>
            </div>
          )}
        </div>
        <div className="col-md-2">
        
        </div>
      </div>
      </div>
    );
  }
}
