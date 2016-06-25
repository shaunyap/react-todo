var firebase = require('firebase/firebase-browser');

try {
  var config = {
    apiKey: "AIzaSyC3Rp-tgylI3AsHa_GroHRN0sdjljY1voQ",
    authDomain: "shaun-todo-app.firebaseapp.com",
    databaseURL: "https://shaun-todo-app.firebaseio.com",
    storageBucket: "shaun-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
