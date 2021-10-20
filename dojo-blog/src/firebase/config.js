import firebase from 'firebase/compat/app'
import firestore from 'firebase/compat/firestore'
import { serverTimestamp } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCf81U34nBjeaziZ3Gd8mX5yUgqbFn-xMY",
    authDomain: "blog-test-2e80b.firebaseapp.com",
    projectId: "blog-test-2e80b",
    storageBucket: "blog-test-2e80b.appspot.com",
    messagingSenderId: "128652114125",
    appId: "1:128652114125:web:4b2b821f6512b8ff3ad184"
}

// init firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebaseApp.firestore()
const timestamp = serverTimestamp()

// export firestore
export { projectFirestore, timestamp }