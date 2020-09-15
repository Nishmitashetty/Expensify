import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDSjamFp4DMUrRgjdOVAQkLJAg6t1h6meg",
  authDomain: "expensify-2d739.firebaseapp.com",
  databaseURL: "https://expensify-2d739.firebaseio.com",
  projectId: "expensify-2d739",
  storageBucket: "expensify-2d739.appspot.com",
  messagingSenderId: "787317002767",
  appId: "1:787317002767:web:9d443959cda7d4c091097a",
  measurementId: "G-J7SEE5D3S8"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

