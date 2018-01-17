<template>
  <span class="tg-box__button">
      <button @click='Opreation'>
        {{ this.text | toUpperCase }}
      </button>
  </span>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'BoxButton',
  props: ['text', 'opreation'],
  methods: {
    Opreation () {
      if (this.opreation === 'cancel') {
        this.boxDisplay()
      }
    },
    ...mapActions(['boxDisplay'])
  },
  filters: {
    toUpperCase (str) {
      return str.toUpperCase()
    }
  }
}
</script>

