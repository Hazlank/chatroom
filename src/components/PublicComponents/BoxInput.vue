<template>
  <div class="tg-box__input"  @click="Infocus" :class="{'is-focus':focusState}">
    <label >{{ text }}</label>
    <input ref='input' type="text" @blur="InputFocus" @focus="InputFocus" v-model="value">
  </div>
</template>

<script>
export default {
  name: 'BoxInput',
  props: ['text'],
  data () {
    return {
      value: '',
      focusState: false
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
