<template>
  <div class="home">
    <contents-title/>
    <contents-detail v-if='isActive' @is-deactive='isDeactive'/>
    <contents-view @get-detail='getDetail' />
  </div>
</template>

<script>

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
      this.isActive = true;
    },
    isDeactive() {
      this.isActive = false;
    }
  }
}
</script>

