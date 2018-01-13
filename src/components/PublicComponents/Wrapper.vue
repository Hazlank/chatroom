<template>
  <div class="tg-wrapper" v-if="wrapper" @click='bardisply'>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['wrapper'])
  },
  methods: {
    ...mapActions(['bardisply'])
  }
}
</script>
