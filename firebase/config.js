import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAaZHtnG8k5v1q1smq6RuueubHTqtRjABQ",
    authDomain: "jirajc-cfec8.firebaseapp.com",
    projectId: "jirajc-cfec8",
    storageBucket: "jirajc-cfec8.appspot.com",
    messagingSenderId: "146190193149",
    appId: "1:146190193149:web:0cdcac02df1ffb91230994",
    measurementId: "G-TYT26THX9G"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  //timestamp

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore,projectAuth,timestamp}