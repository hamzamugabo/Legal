// import firebase from "../firebase";
import  firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';
// const db = firebase.database().ref("/LegalAid");

class TutorialDataService {
  
  getAll() {
    
    return firebase.database().ref("/LegalAid");
  }
  getUser() {
    const {currentUser} = firebase.auth();

    //  const { profileImageUrl } = this.state;

    this.setState({currentUser});
    //
    
  }
  create(tutorial) {
    return firebase.database().ref("/LegalAid").push(tutorial);
  }

  update(key, value) {
    return firebase.database().ref("/LegalAid").child(key).update(value);
  }

  delete(key) {
    return firebase.database().ref("/LegalAid").child(key).remove();
  }

  deleteAll() {
    return firebase.database().ref("/LegalAid").remove();
  }
}

export default new TutorialDataService();
