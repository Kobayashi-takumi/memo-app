
import firebase from 'firebase/app';
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig.js'
import firebaseLogin from './firebaseLogin'

firebase.initializeApp(firebaseConfig);
firebaseLogin.init();

const db = firebase.firestore();

export default db