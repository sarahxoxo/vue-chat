import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var config = {
  apiKey: "AIzaSyAAlT9tgCJlCzbGcGmnkBpYOIK_FYvKEQs",
  authDomain: "vue-chat-a9f49.firebaseapp.com",
  databaseURL: "https://vue-chat-a9f49.firebaseio.com",
  projectId: "vue-chat-a9f49",
  storageBucket: "vue-chat-a9f49.appspot.com",
  messagingSenderId: "280133263096"
};
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
