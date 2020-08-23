import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
 
var firebaseConfig = {
    apiKey: "AIzaSyCu8lIcVg_F7Mew4c_UXngK7HMZJ6G_X0Q",
    authDomain: "cse-19-files.firebaseapp.com",
    databaseURL: "https://cse-19-files.firebaseio.com",
    projectId: "cse-19-files",
    storageBucket: "cse-19-files.appspot.com",
    messagingSenderId: "654792639918",
    appId: "1:654792639918:web:e67bf44e6518822d0eb43f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db=firebase.firestore()
const auth=firebase.auth()


export {db, auth}

