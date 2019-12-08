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
export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const{displayName, email} = userAuth;
    const createdAt = new Date()
    try{
      await userRef.set({ displayName, email, createdAt, ...additionalData})
    }catch (err){
      console.log(err);
    }
  }
  
  
  return userRef
}
// export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);
//   console.log(collectionRef);
//   const batch = firestore.batch()
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc()
//     batch.set(newDocRef, obj)
//   })
//   return await batch.commit()
// }
export const convertCollectionSnapShotToMap = (collections)=>{
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title, 
      items
    }
  })
  return transformedCollection.reduce(( accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection
      return accumulator
  },{})
}
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;


