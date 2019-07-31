<template>
  <div id="sign-in" class="wrapper">
    <div class="image">
      <div class="box">
        <p class="page-title">Title</p>
        <p class="page-sub-title">高機能メモアプリ</p>
      </div>
    </div>
    <transition>  
      <login class="login-form" v-if="show"/>
    </transition>
  </div>
</template>

<script>
import Login from '../components/Login'

export default {
  name: 'sign-in',
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.show = true;
  },
  components: {
    Login,
  }
}
</script>

<style>

.image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../image/gaelle-marcel-L8SNwGUNqbU-unsplash.jpg);
  height: 90vh;
  width: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-form {
  height: 10vh;
}

.v-enter-active {
  transition: opacity 2s cubic-bezier(0.4, 0, 0.2, 0.1) 0ms;
}

.v-enter {
  opacity: 0;
}
</style>

