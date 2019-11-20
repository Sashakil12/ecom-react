  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyBbDp_9NmV1Oi4sUmlRO2GGlKQJbS1y0nc",
    authDomain: "ecom-react-15925.firebaseapp.com",
    databaseURL: "https://ecom-react-15925.firebaseio.com",
    projectId: "ecom-react-15925",
    storageBucket: "ecom-react-15925.appspot.com",
    messagingSenderId: "848299974870",
    appId: "1:848299974870:web:48b06bd7cfea0cb3eb2977",
    measurementId: "G-B46FYQCJ9V"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;


