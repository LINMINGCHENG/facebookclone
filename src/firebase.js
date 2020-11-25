import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyD8t13WAWsS8u_h-aKXWg6a4wLTg3BK3r8",
    authDomain: "facebook-clone-f9ab8.firebaseapp.com",
    databaseURL: "https://facebook-clone-f9ab8.firebaseio.com",
    projectId: "facebook-clone-f9ab8",
    storageBucket: "facebook-clone-f9ab8.appspot.com",
    messagingSenderId: "583963345031",
    appId: "1:583963345031:web:66e884dfd3ae4a898bf822",
    measurementId: "G-0E2FW02K4B"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;