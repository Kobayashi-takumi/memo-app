<template>
  <div class="home">
    <contents-title/>
    <contents-detail v-if='isActive' @is-deactive='isDeactive'/>
    <contents-view @get-detail='getDetail' />
  </div>
</template>

<script>
/* eslint-disable  no-console*/

import ContentsTitle from '../components/ContentsTitle'
import ContentsView from '../components/ContentsView'
import ContentsDetail from '../components/ContentsDetail'


export default {
  name: 'home',
  components: {
    ContentsTitle,
    ContentsView,
    ContentsDetail,
  },
  data() {
    return {
      isActive: false,
      detailData: '',
    }
  },
  methods: {
    getDetail() {
      let data  = this.$store.getters.memoData
      this.isActive = true;
      console.log(data.title)
    },
    isDeactive() {
      this.isActive = false;
    }
  }
}
</script>

