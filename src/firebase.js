import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiVD9XwBOsha_wOhEpIxn0A892r2qIBko",
  authDomain: "disneyplus-clone-2ea4f.firebaseapp.com",
  projectId: "disneyplus-clone-2ea4f",
  storageBucket: "disneyplus-clone-2ea4f.appspot.com",
  messagingSenderId: "469207965021",
  appId: "1:469207965021:web:9f30d1a4f4437f5bc3dcb4",
  measurementId: "G-VEPSGEG45H",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
