<template>
  <div class="tg-box__input" @click="Infocus" :class="{'is-focus':focusState}">
    <label>{{ text }}</label>
    <input ref='input' type="text" @blur="InputFocus" @focus="InputFocus" v-model="value">
  </div>
</template>

<script>
export default {
  name: 'boxinput',
  props: ['text'],
  data () {
    return {
      value: '',
      focusState: false
    }
  },
  filters: {
    toUpperCase (str) {
      return str.toUpperCase()
    }
  },
  methods: {
    InputFocus (e) {
      if (e.type === 'blur') {
        if (!this.value) {
          this.focusState = false
        }
      } else {
        if (!this.value) {
          this.focusState = true
        }
      }
    },
    Infocus () {
      this.$nextTick(() => {
        this.$refs['input'].focus()
      })
    }
  }
}
</script>
