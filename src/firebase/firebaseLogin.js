
import firebase from '@firebase/app';
import '@firebase/auth';
import store from '../store.js';
import router from '../router.js'

export default {
    init() {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    },
    login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    },
    logout() {
        firebase.auth().signOut()
    },
    onAuth() {
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : {};
            store.commit('setUser', user);
            store.commit('setSignIn', user.uid ? true : false);
            if (store.getters.isSignIn) {
                router.push('/home');
            }
        });
    },
};
