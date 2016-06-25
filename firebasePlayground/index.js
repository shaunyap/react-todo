var firebase = require('firebase/firebase-browser');

var config = {
  apiKey: "AIzaSyC3Rp-tgylI3AsHa_GroHRN0sdjljY1voQ",
  authDomain: "shaun-todo-app.firebaseapp.com",
  databaseURL: "https://shaun-todo-app.firebaseio.com",
  storageBucket: "shaun-todo-app.appspot.com",
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'new app',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNotesRef = notesRef.push({
//   text: 'walk the dog!'
// });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot => {
  console.log('todo_added', snapshot.key, snapshot.val());
}));

todosRef.push({
  text: 'plan Rome trip'
});

todosRef.push({
  text: 'book tickets'
});
