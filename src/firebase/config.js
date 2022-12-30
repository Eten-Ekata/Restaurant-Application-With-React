import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAXOIJ49eVfvbyl4EFHuv0NcEXDugI3TSg",
  authDomain: "restaurant-application-887e2.firebaseapp.com",
  projectId: "restaurant-application-887e2",
  storageBucket: "restaurant-application-887e2.appspot.com",
  messagingSenderId: "538368981158",
  appId: "1:538368981158:web:a6bf84928734989ba11c67",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
