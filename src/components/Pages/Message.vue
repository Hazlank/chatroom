<template>
  <div class="tg-message" :style="{'background-image':background}">
    <!-- <div class="tg-message-header">
          </div> -->
    <div class="tg-message-content">
      <div v-for="(content,keys) in content" :key="keys" v-html="content.context">
      </div>
      <div class="tg-message-placeholder">
      </div>
    </div>
    <div class="tg-message-textarea">
      <span>
            <i class="iconfont icon-huixingzhen"></i>
          </span>
      <div class="tg-editor" ref='edit'  @keyup.ctrl.enter='send' contenteditable="true">
      </div>
      <div class="tg-message__emoji">
        <span>
              <i class="iconfont icon-xiaolian"></i>
            </span>
        <span>
               <i class="iconfont icon-yuyin"></i> 
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
        context: '',
        isLocked: false
      }
    },
    methods: {
      send () {
        this.content.push({
          context: this.$refs['edit'].innerHTML
        })
        this.$refs['edit'].innerHTML = ''
      },
      edit (e) {
        this.context = e.target.innerHTML
      }
    },
    computed: {
      messageImg () {
        return this.background
      }
    }
  }
</script>

