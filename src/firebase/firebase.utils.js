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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
