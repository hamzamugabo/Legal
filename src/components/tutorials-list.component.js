import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import {Button,DropdownButton,Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import  firebase from "firebase/app";
import 'firebase/auth';
// import SearchField from "react-search-field";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.Logout = this.Logout.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.onDataChange = this.onDataChange.bind(this);
    this.search = this.search.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    this.state = {
      tutorials: [],
      data: [],
      currentTutorial: null,
      currentIndex: -1,
      // currentUser:null,
      admin:false,
      user:true,
      email:'',
      loading:false,
      search:''
    };
  }

  componentDidMount() {
    
          TutorialDataService.getAll().on("value", this.onDataChange);
         
  }

 

  componentWillUnmount() {
    if(this.state.user){

    TutorialDataService.getAll().off("value", this.onDataChange);}
  }

  onDataChange(items) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
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
      } else{
    this.props.history.push("/Legal");
        
      }
    });  
  }

  refreshList() {
    if(this.state.user){

    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }
  }

  setActiveTutorial(tutorial, index) {
    if(this.state.user){

    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }
  }

  removeAllTutorials() {
    if(this.state.user){

    TutorialDataService.deleteAll().then(() => {
        this.refreshList();
      }).catch((e) => {
        console.log(e);
      });
    }
  }
  searchFilterFunction = (District) => {
    if(this.state.user === true){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          if(this.state.user){
   
            console.log(District);
            let approvalVariable = District
            let filteredData = this.state.tutorials.filter(x => String(x.District).includes(approvalVariable));
        
            this.setState({
              tutorials: filteredData,
            
            });
          }
        } else{
    this.props.history.push("/Legal");
          
          alert("The user is Logge-out")
        }
      });
    }
    
  };
  search(e) {
    firebase.
    auth().onAuthStateChanged((user) => {
      if (user) {
        if(this.state.user){

          // this.setState({
          //   search: e.target.value,
          // });
          if(e.target.value !=='')
          {
            this.setState({
              search: e.target.value,
            }); 
          }
          else{
          TutorialDataService.getAll().on("value", this.onDataChange);
      
          }
                  // console.log(e.target.value);
        }
      } else{
    this.props.history.push("/Legal");
        
        alert("The user is Logge-out")
      }
    });
    
  }
  onSubmit(e) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if(this.state.user){
          e.preventDefault();
      
          // console.log(this.state.search);
          // // this.search=District;
          // District = this.state.search;
          let approvalVariable = this.state.search;
          console.log(approvalVariable);
      
          let filteredData
           = 
          //  this.state.tutorials.filter(x => String(x.approvalVariable).includes(approvalVariable));
          // this.state.tutorials.map((order, index) => {return order;});
          this.state.tutorials.filter(name => name.District === this.state.search).map(filteredName => {
            return filteredName});
          // console.log(filteredData);
      
          this.setState({
            tutorials: filteredData,
          
          });
        }
      } else{
    this.props.history.push("/Legal");
        
        alert("The user is Logge-out")
      }
    });
    
           
        }
  all = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if(this.state.user){

          TutorialDataService.getAll().on("value", this.onDataChange);}
      } 
    });
    
    }
    Logout() {
      firebase.auth().signOut();
      
      this.props.history.push("/Legal");
      this.setState({
        user: false,
      
      });
    }

  render() {
    const { tutorials, currentIndex,user } = this.state;

    return (
      <div className="container" style={{backgroundColor:''}}>
       {/* {this.state.admin?"rue":"no"} */}
       
    <h4>{""}</h4>
          <div className="row" >
            <div className="col-sm-4" >
              
          <DropdownButton  variant="link" id="dropdown-basic-button" title="Select District">
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
          style={{backgroundColor:'#000080',padding:10,}}

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
{/* <Form  onSubmit={this.onSubmit}>
  <Form.Row >
    <Col>
      <Form.Control type="text" placeholder="Search..." onChange={this.search}/>
    </Col>
    <Col>
    <Button variant="link" type="submit">
    Search
  </Button>
    </Col>
  </Form.Row>
</Form> */}
{/* <SearchField
  placeholder="Search..."
  onChange={(e) => this.search(e.target.value)}
  // searchText="This is initial search text"
  classNames="test-class"
/> */}
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
            className="m-3 btn btn-sm btn-link"
            style={{
              display:'flex',
              justifyContent:'flex-end',
              float:'right'
            }}
            onClick={this.Logout}
          >
           <strong style={{fontSize:15,color:'red'}}> Logout</strong>
          </button>
          </div>
          </div>
             
          {'\n'}
<div></div>
      <div className="row" style={{marginTop:20}}>

           {/* <div className="col-md-4"> */}
            
          {/* <ul > */}
            {}
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <div
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
                {/* <div> */}
                <p><strong> Name:</strong>   {tutorial.Name}</p>  
                <p><strong>Address:</strong>   {tutorial.Address}</p>  
                <p><strong>District:</strong>   {tutorial.District}</p>  
                <p><strong>Email:</strong>   {tutorial.Email}</p>  
                <p><strong> Tellphone:</strong>   {tutorial.Tellphone}</p>  
                <p><strong> Description:</strong>   {tutorial.Description}</p>  
                {/* </div> */}
                  
                </div>
              ))}
              
         
          {/* </ul> */}
{/* 
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button> */}
        {/* </div> */}
        {/* <div className="col-md-6">
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
        </div> */}
      </div>
      
      </div>
    )
    
  }
}
