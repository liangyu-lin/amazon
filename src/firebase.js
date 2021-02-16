import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAB5u6_W2KUWE3MWUxP31AtvsvtyiFR60",
    authDomain: "clone-70aa8.firebaseapp.com",
    projectId: "clone-70aa8",
    storageBucket: "clone-70aa8.appspot.com",
    messagingSenderId: "177593328134",
    appId: "1:177593328134:web:a723424d3641496371d987",
    measurementId: "G-C6SBXKQYQP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize database -firestore is real time database
const db = firebaseApp.firestore()
//handles sign ins
const auth = firebase.auth()

export  {db, auth};