<template>
  <div class="tg-side-bar" :style="{transform:barPosition()}">
      <div></div>
  </div>
</template>

<script>
import { mapGetters } from 'Vuex'
export default {
  data () {
    return {
      ...mapGetters(['barPosition'])
    }
  }
}
</script>
