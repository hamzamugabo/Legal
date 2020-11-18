// import firebase from "../firebase";
import firebase, * as firbase from "firebase";
// const db = firebase.database().ref("/LegalAid");

class TutorialDataService {
  getAll() {
    return firebase.database().ref("/LegalAid");
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
