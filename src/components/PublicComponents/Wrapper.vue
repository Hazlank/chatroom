<template>
  <div class="tg-wrapper" v-if="wrapper" @click='barDisply'>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['wrapper'])
  },
  methods: {
    ...mapActions(['barDisply'])
  }
}
</script>
