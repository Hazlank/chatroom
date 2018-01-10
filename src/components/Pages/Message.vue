<template>
  <div class="tg-message" :style="{'background-image':background}">
    <!-- <div class="tg-message-header">
            </div> -->
    <div style="flex: 1;overflow: auto;"  ref="parent">
          <div class="tg-message-content" ref="children">
          <div v-for="(content,keys) in content" :key="`content-${keys}`"
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
  export default {
    mounted () {
      this.scroll()
    },
    data () {
      return {
        background: 'url(/static/img/wife.jpg)',
        content: Array(20).fill(1).map((_, i) =>
        ({
          text: i,
          speaker: true,
          time: '11:02'
        })).reverse().concat(
          Array(6).fill(1).map((_, i) =>
        ({
          text: i,
          speaker: false,
          avatar: '/static/img/7753609_p0.jpg',
          time: '11:02'
        })).reverse()
        ),
        text: ''
      }
    },
    methods: {
      send () {
        this.content.push({
          text: this.$refs['edit'].innerHTML,
          speaker: true,
          time: new Date().toTimeString().match(/(\d{2}):\d{2}/g)[0]
        })
        this.$refs['edit'].innerHTML = ''
        this.scroll()
      },
      async scroll () {
        await this.$nextTick()
        this.$refs['parent'].scrollTop = this.$refs['children'].offsetHeight - this.$refs['parent'].offsetHeight
      }
    },
    computed: {
      messageImg () {
        return this.background
      }
    }
  }
</script>

