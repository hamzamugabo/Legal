import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tutorial from "./tutorial.component";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tutorials: [],
      data: [],
      currentTutorial: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    TutorialDataService.getAll().on("value", this.onDataChange);
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
      <div className="list row">
        <div className="col-md-6">
          <h4>Legal Aid List</h4>
          <div>
          <Button
                // style={[styles.buttonContainer, styles.loginButton]}
                // onPress={this.searchFilterFunction}
                // key={index}
                  onClick={this.all.bind(this)}

                >
               All
              </Button>
          {tutorials &&
              tutorials.map((order, index) => (
              
              <div key={index} style={{borderBottomColor:'orange',padding:10}}>
                 <Button
                // style={[styles.buttonContainer, styles.loginButton]}
                // onPress={this.searchFilterFunction}
                key={index}
                  onClick={this.searchFilterFunction.bind(this, order.District)}

                >
               {order.District}
              </Button>
                </div>
                ))}
          </div>
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
        <div className="col-md-6">
          {currentTutorial ? (
            <Tutorial
              tutorial={currentTutorial}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click Legal Aid...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
