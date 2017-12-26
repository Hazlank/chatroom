<template>
  <div class="tg-message" :style="{'background-image':background}">
    <!-- <div class="tg-message-header">
      </div> -->
    <div class="tg-message-content">
      <div v-for="(content,keys) in content" :key="keys">
        {{content.context}}
      </div>
      <div class="tg-message-placeholder">
      </div>
    </div>
    <div class="tg-message-textarea">
      <span>
        <i class="iconfont icon-huixingzhen"></i>
      </span>
      <textarea v-model="context" @keyup.ctrl.enter='send'></textarea>
      <div class="">
        <span>
          <i class="iconfont icon-huixingzhen"></i>
        </span>
        <span>
          <button></button>
        </span>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    data () {
      return {
        background: 'url(/static/img/wife.jpg)',
        content: [],
        context: ''
      }
    },
    methods: {
      send () {
        this.content.push({
          context: this.context
        })
        this.context = ''
      }
    },
    computed: {
      messageImg () {
        return this.background
      }
    }
  }
</script>

