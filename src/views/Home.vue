<template>
  <div class="home">
    <contents-title />
    <contents-view />
  </div>
</template>

<script>
import ContentsTitle from '../components/ContentsTitle'
import ContentsView from '../components/ContentsView'

export default {
  name: 'home',
  components: {
    ContentsTitle,
    ContentsView,
  }
}
</script>
