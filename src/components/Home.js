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
    if(this.state.user === true){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          TutorialDataService.getAll().on("value", this.onDataChange);
          // this.usertype.bind(this);
        //  console.log('no user')
        } else{
    this.props.history.push("/Legal");
          
          // alert("The user is Logge-out")

        }
      });
    }
  }

 

  componentWillUnmount() {
    if(this.state.user){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          TutorialDataService.getAll().off("value", this.onDataChange);
          // this.usertype.bind(this);
        //  console.log('no user')
        } else{
    this.props.history.push("/Legal");
          
          // alert("The user is Logge-out")

        }
      });
    // TutorialDataService.getAll().off("value", this.onDataChange);
  }
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
        
        alert("The user is Logge-out")

      }
    });
   
  }

  refreshList() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentTutorial: null,
          currentIndex: -1,
        });
      } else{
    this.props.history.push("/Legal");
        
        alert("The user is Logge-out")

      }
    });
    
  }

  setActiveTutorial(tutorial, index) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentTutorial: tutorial,
          currentIndex: index,
        });
      } else{
    this.props.history.push("/Legal");
        
        alert("The user is Logge-out")

      }
    });
    
  }

  removeAllTutorials() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        TutorialDataService.deleteAll()
        .then(() => {
          this.refreshList();
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
  Logout() {
    firebase.auth().signOut();
    
    this.props.history.push("/Legal");
    this.setState({
      user: false,
    
    });
  }
  addLegalAid() {
    firebase. auth().onAuthStateChanged((user) => {
      if (user) {
       // firebase.auth().signOut();
    this.props.history.push("/addLegalAid");
      } else{
    this.props.history.push("/Legal");
        
        alert("The user is Logge-out")

      }
    });
   
  }
  searchFilterFunction = (District) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(District);
        let approvalVariable = District
        let filteredData = this.state.tutorials.filter(x => String(x.District).includes(approvalVariable));
    
        this.setState({
          tutorials: filteredData,
        });
    console.log(this.state.tutorials);
    // const data = filteredData.map((Legal) => {});
    // console.log(data);
      } else{
    this.props.history.push("/Legal");
        
        alert("The user is Logge-out")

      }
    });
   

  };
  search(e) {
    // firebase.
    // auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     if(this.state.user){

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
    //     }
    //   } else{
    // this.props.history.push("/Legal");
    
    //     alert("The user is Logge-out")

    //   }
    // });
    
  }
  onSubmit(e) {
    // firebase.
    // auth().onAuthStateChanged((user) => {
    //   if (user) {
        if(this.state.user){
          e.preventDefault();
      
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
    //   } else{
    // this.props.history.push("/Legal");
    
    //     alert("The user is Logge-out")

    //   }
    // });
    
           
        }
  all = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {    
        TutorialDataService.getAll().on("value", this.onDataChange);

      } else{
    this.props.history.push("/Legal");
        
        alert("The user is Logge-out")

      }
    });
    }

  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="container" style={{backgroundColor:''}}>
       {/* {this.state.admin?"rue":"no"} */}
          {/* <h4>Legal Aid List</h4> */}
          <div className="row">
            <div className="col-sm-4">
            <DropdownButton variant="link"  id="dropdown-basic-button" title="Select District"
            style={{color:'black'}}
            >
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
              
              <div className="d-flex justify-content-around" key={index} style={{borderBottomColor:'black',padding:10}}>
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
          <button
            className="m-3 btn btn-sm btn-success"
            style={{
              display:'flex',
              justifyContent:'flex-end',
              float:'right',
              borderWidth:2,
              borderColor:'black',
              alignItems:'center',
              justifyContent:'center',
              // borderBlockColor:'black',
              backgroundColor:'white',
              borderRadius:100,
            }}
            onClick={this.addLegalAid}
          >
           <strong style={{color:'black', fontSize:15}}>+ Add</strong>
           
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
                    "list-group-item col-sm " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}

                  style={{
                    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 12,
    // backgroundColor: '#000080',
    padding: 20,
    borderRadius: 10,
    borderBlockColor:'black',
    // width: 155,
    // height: 120,
    alignItems:'flex-start',
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
                  }}

                >
                <div >
                 
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
            className="m-3 btn btn-sm btn-link"
            onClick={this.removeAllTutorials}
            // style={{color:'black'}}
          >
           <strong style={{fontSize:15,color:'red'}}> Remove All</strong>
          </button>
        </div>
        <div className="col-md-2">
        
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
      
      </div>
      </div>
    );
  }
}
