<template>
    <div id='login'>
        <div class="wrapper">
            <div class="login-form"  @click="doLogin">
                <div class="logo"><i class="material-icons">android</i></div>
                <div class="login-btn">Login with google</div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable  no-console*/

import Firebase from '../firebase/firebaseLogin'

export default {
    name: 'login',
    data() {
        return {
            signIn: ''
        }
    },
    created() {
        Firebase.onAuth();
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        isSignIn() {
            return this.$store.getters.isSignIn;
        }
    },
    methods: {
        doLogin() {
            Firebase.login();
        },
        doLogout() {
            Firebase.logout();
        }
    }
}
</script>

<style>
.login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba( 10, 40, 80, 1);
}

.login-form div {
    color: #ffff;
}

.login-form div {
    text-align: center;
    font-size: 18px; 
}

</style>
