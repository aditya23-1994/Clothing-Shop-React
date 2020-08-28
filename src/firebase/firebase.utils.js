import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA6SwHj7F2Hn7oR8CZsYzV7J9URhxmC2SY",
    authDomain: "crown-db-46461.firebaseapp.com",
    databaseURL: "https://crown-db-46461.firebaseio.com",
    projectId: "crown-db-46461",
    storageBucket: "crown-db-46461.appspot.com",
    messagingSenderId: "1081671188538",
    appId: "1:1081671188538:web:3f25b256f02ef3858eb503"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const{displayName,email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch (error){
        console.log('error creating users',error.message);
      }
    }
    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit();  
};

export const convertCollectionsSnapshotTOMap = (collections) => {
 const transformedCollection = collections.docs.map(doc => {
   const { title, items } = doc.data();

   return {
     routeName: encodeURI(title.toLowerCase()),
     id: doc.id,
     title,
     items
   };
 });
 
 return transformedCollection.reduce((accumulator, collection) => {
   accumulator[collection.title.toLowerCase()] = collection;
   return accumulator;
 }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;