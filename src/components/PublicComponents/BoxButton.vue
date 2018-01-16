<template>
  <span class="tg-box__button">
      <button>
        {{ this.text | toUpperCase }}
      </button>
  </span>
</template>

<script>
export default {
  name: 'boxbutton',
  props: ['text'],
  filters: {
    toUpperCase (str) {
      return str.toUpperCase()
    }
  }
}
</script>

