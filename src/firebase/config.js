import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDcOZlOL281VeWQb2T6YFy04yjAH7LYUK0",
  authDomain: "firegram-e26d8.firebaseapp.com",
  projectId: "firegram-e26d8",
  storageBucket: "firegram-e26d8.appspot.com",
  messagingSenderId: "872284245661",
  appId: "1:872284245661:web:345faebfb33a6fc98b0e74",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
