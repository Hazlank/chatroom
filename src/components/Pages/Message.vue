<template>
  <div class="tg-message" :style="{'background-image':background}">
    <!-- <div class="tg-message-header">
            </div> -->
    <div style="flex: 1;overflow: auto;"  ref="parent">
          <div class="tg-message-content" ref="children">
          <div v-for="(content,keys) in messagecontent" :key="`content-${keys}`"
              :class="{'tg-message-content__speakerMe':content.speaker,'tg-message-content__speakerOthers':!content.speaker}">
              <div v-if="!content.speaker" class="tg-message-content__avatar">
                  <img :src="content.avatar" alt="头像">
              </div>
              <div class="tg-message-container" >
                <div class="tg-message-container__text" v-html='content.text'>
                </div>
              <div class="tg-message-container__side">
                 <span class="tg-message-container__time">{{content.time}}</span>
              </div>
              </div>
          </div>
          <div class="tg-message-placeholder">
          </div>
        </div>
    </div>
    <div class="tg-message-textarea">
      <span class="tg-icon">
         <i class="iconfont icon-huixingzhen"></i>
      </span>
      <div class="tg-editor" ref='edit' @keyup.ctrl.enter='send' contenteditable="true">
      </div>
      <div class="tg-message__emoji">
        <span class="tg-icon">
            <i class="iconfont icon-xiaolian"></i>
        </span>
        <span class="tg-icon">
           <i class="iconfont icon-yuyin"></i> 
        </span>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'message',
    mounted () {
      this.scroll()
    },
    data () {
      return {
        background: 'url(/static/img/wife.jpg)'
      }
    },
    methods: {
      send () {
        this.messagecontent.push({
          text: this.$refs['edit'].innerHTML,
          speaker: true,
          time: new Date().toTimeString().match(/(\d{2}):\d{2}/g)[0]
        })
        this.$refs['edit'].innerHTML = ''
        this.updateLocalStorage()
        this.scroll()
      },
      async scroll () {
        await this.$nextTick()
        this.scrollRemove(this.$refs['children'])
      },
      ...mapActions(['updateLocalStorage', 'scrollRemove'])
    },
    computed: {
      messageImg () {
        return this.background
      },
      ...mapGetters(['messagecontent'])
    }
  }
</script>

