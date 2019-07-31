import firebase from '@firebase/app';
import '@firebase/auth';
import store from '../store.js';
import router from '../router.js'

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

export default {
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
