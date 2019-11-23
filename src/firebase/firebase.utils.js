import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyABgFPERa1WRnFgrue9vn3PuTw5C3m2NgY',
  authDomain: 'crwn-db-eba68.firebaseapp.com',
  databaseURL: 'https://crwn-db-eba68.firebaseio.com',
  projectId: 'crwn-db-eba68',
  storageBucket: 'crwn-db-eba68.appspot.com',
  messagingSenderId: '1046729289402',
  appId: '1:1046729289402:web:509de1134eb5f063415c83'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
