import firebase from 'firebase/app';
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig.js'

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db