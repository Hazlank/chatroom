<!-- type: group -->
<template>
  <div class="tg-box__group">
    <div class="tg-box__groupContent">
      <box-uploadimg></box-uploadimg>
      <div class="tg-box__groupInput">
        <box-input :text='"Group name"'></box-input>
      </div>
    </div>
    <footer class="tg-box__groupBottom">
      <box-button :opreation='"cancel"' :text='"cancel"'></box-button>
      <box-button :text='"next"'></box-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BoxGroup'
}
</script>
