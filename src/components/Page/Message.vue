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
      <span href=""><i class="iconfont icon-huixingzhen"></i></span>
      <textarea v-model="context" @keyup.enter='send'></textarea>
      <div class="">
        <span href=""><i class="iconfont icon-huixingzhen"></i></span><span href=""><button></button></span>
      </div>
    </div>
  </div>
</template>



<script>
  import wife from '@/assets/wife.jpg'
  export default {
    data() {
      return {
        background: 'url(/static/img/wife.e7aeb7f.jpg)',
        content: [],
        context: '',
      }
    },
    methods: {
      send() {
        this.content.push({
          context: this.context
        })
        this.context = '';
      }
    },
    computed: {
      messageImg() {
        return this.background
      }
    }
  }
</script>

