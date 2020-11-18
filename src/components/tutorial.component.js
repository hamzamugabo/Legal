import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTellphone = this.onChangeTellphone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        key: null,
        Description: "" ,
        Email: "",
        Name:'',
        Logo:'',
        District:'',
        Address: "",
        Tellphone: "",
        confirm_agreement: false,
        published: false,
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { tutorial } = nextProps;
    if (prevState.currentTutorial.key !== tutorial.key) {
      return {
        currentTutorial: tutorial,
        message: ""
      };
    }

    return prevState.currentTutorial;
  }

  componentDidMount() {
    this.setState({
      currentTutorial: this.props.tutorial,
    });
  }

  onChangeName(e) {
    const Name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          Name: Name,
        },
      };
    });
  }
  onChangeEmail(e) {
    const Email = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          Email: Email,
        },
      };
    });
  }
  onChangeTellphone(e) {
    const Tellphone = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          Tellphone: Tellphone,
        },
      };
    });
  }
  onChangeDistrict(e) {
    const District = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          District: District,
        },
      };
    });
  }
  onChangeAddress(e) {
    const Address = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          Address: Address,
        },
      };
    });
  }

  onChangeDescription(e) {
    const Description = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Description: Description,
      },
    }));
  }

  updatePublished(status) {
    TutorialDataService.update(this.state.currentTutorial.key, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateTutorial() {
    const data = {
      Name: this.state.currentTutorial.Name,
      Email: this.state.currentTutorial.Email,
      Tellphone: this.state.currentTutorial.Tellphone,
      District: this.state.currentTutorial.District,
      Address: this.state.currentTutorial.Address,
      Description: this.state.currentTutorial.Description,
    };

    TutorialDataService.update(this.state.currentTutorial.key, data)
      .then(() => {
        this.setState({
          message: "updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    TutorialDataService.delete(this.state.currentTutorial.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        <h4>
          Legal Aid
        </h4>
        {currentTutorial ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  value={currentTutorial.Name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  value={currentTutorial.Email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Tellphone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="Tellphone"
                  value={currentTutorial.Tellphone}
                  onChange={this.onChangeTellphone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="District">District</label>
                <input
                  type="text"
                  className="form-control"
                  id="District"
                  value={currentTutorial.District}
                  onChange={this.onChangeDistrict}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  value={currentTutorial.Address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="Description"
                  value={currentTutorial.Description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {/* {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )} */}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click Legal Aid...</p>
          </div>
        )}
      </div>
    );
  }
}
