<template>
  <div class="tg-userlist">
    <slot name="loading" v-if='loading'>loading</slot>
    <div class="tg-user" v-for="(user,index) in user" :class="{'active': active === index,'font-c': active !== index}"  @click="talk(index)"  :key="`username-${user.name}`">
      <div class="tg-user__avatar">
        <img :src="user.avatar" alt="头像">
      </div>
      <div class="tg-user__block">
        <div class="tg-block__header">
          <span class="tg-block__sign" v-if="user.group">组</span>
          <span class="tg-block__talkto">{{user.talkto}}</span>
          <span class="tg-block__username">{{user.username}}</span>
          <span class="tg-block__staute"></span>
          <span class="tg-block__time">{{user.lasttime}}</span>
        </div>
        <div class="tg-block__footer">
          <span class="tg-block__talkname">{{user.talkname}}:</span>
          <span class="tg-block__context">{{user.context}}</span>
          <span class="tg-block__contextcount">{{MessageCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import avatar from '@/assets/avatar.png'
  export default {
    data () {
      return {
        active: '',
        loading: false,
        user: Array(30).fill(1).map((_, i) =>
        ({
          avatar: avatar,
          name: `hax${i}`,
          type: 'group',
          context: '锟斤拷锟斤拷',
          lasttime: '12:15',
          talkto: 'Hazlank',
          talkname: 'nbsaw'
        })),
        unread: '200'
      }
    },
    methods: {
      talk (index) {
        this.active = index
      }
    },
    computed: {
      MessageCount () {
        return this.unread
      }
    }
  }
</script>

