import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvTjl9eikhJ1nhzGlHtGXclyUmWMJ_l_M",
  authDomain: "vijay-8753b.firebaseapp.com",
  databaseURL: "https://vijay-8753b.firebaseio.com",
  projectId: "vijay-8753b",
  storageBucket: "vijay-8753b.appspot.com",
  messagingSenderId: "365197927407",
  appId: "1:365197927407:web:73655c60ea4c2933460c1a",
  measurementId: "G-N5X5V2JTYR"
});

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };