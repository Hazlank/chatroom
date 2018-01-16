<!-- type: group -->
<template>
  <div class="tg-box__group">
    <div class="tg-box__groupContent">
      <box-upload-img></box-upload-img>
      <box-input :text='"Group name"'></box-input>
    </div>
    <footer class="tg-box__groupBottom">
      <box-button :text='"cancel"'></box-button>
      <box-button :text='"next"'></box-button>
    </footer>
  </div>
</template>

<script>
import BoxInput from 'Public/BoxInput'
import BoxButton from 'Public/BoxButton'
import BoxUploadImg from 'Public/BoxUploadImg'
export default {
  components: {
    BoxInput,
    BoxButton,
    BoxUploadImg
  }
}
</script>
