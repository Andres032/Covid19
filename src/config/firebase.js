import firebase from "firebase/app";
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyC3xrTyqxLrFWD7aywiC_1eIPFXkITfjDk",
  authDomain: "covid19-69c52.firebaseapp.com",
  projectId: "covid19-69c52",
  storageBucket: "covid19-69c52.appspot.com",
  messagingSenderId: "189105100604",
  appId: "1:189105100604:web:a451eb097781a47bc03039"
})

export const auth = app.auth()
export default app