import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBjyYzp61-N89H_ERLZLV2_oOQwTTn7W24",
  authDomain: "todoist-4613a.firebaseapp.com",
  databaseURL: "https://todoist-4613a.firebaseio.com",
  projectId: "todoist-4613a",
  storageBucket: "todoist-4613a.appspot.com",
  messagingSenderId: "298693408425",
  appId: "1:298693408425:web:b38bc69b7e8eec42ebdbb8"
});

export { firebaseConfig as firebase };