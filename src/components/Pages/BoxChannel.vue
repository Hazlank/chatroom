<template>
  <div class="tg-box__channel">
    <div class="tg-box__channelContent">
      <box-uploadimg></box-uploadimg>
      <div class="tg-box__channelInput">
        <box-input :text='"Channel name"'></box-input>
      </div>
    </div>
    <div class="tg-box__channelOptional">
        <box-input :text='"Description (optional)"'></box-input>
    </div>
    <footer class="tg-box__channelBottom">
      <box-button :opreation='"cancel"' :text='"cancel"'></box-button>
      <box-button :text='"create"'></box-button>
    </footer>
  </div>
</template>

