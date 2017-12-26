<template>
  <div class="tg-userlist">
    <slot name="loading" v-if='loading'>loading</slot>
    <div class="tg-user" v-for="(user,key) in user" :key="key">
      <div class="tg-user__avatar">
        <img :src="user.avatar" alt="头像">
      </div>
      <div class="tg-user__block">
        <div class="tg-blcok__header">
          <span class="tg-block__sign" v-if="user.group">组</span>
          <span class="tg-block__username">{{user.username}}</span>
          <span class="tg-block__staute"></span>
          <span class="tg-block__time">{{user.lasttime}}</span>
        </div>
        <div class="tg-blcok__footer">
          <span class="tg-block__talkname">{{user.talkname}}</span>
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
        loading: false,
        user: Array(7).fill({
          avatar: avatar,
          name: 'hax',
          type: 'group',
          context: '我几百真的大',
          lasttime: '12:15',
          talkname: 'nbsaw'
        }),
        unread: '200'
      }
    },
    computed: {
      MessageCount () {
        return this.unread
      }
    }
  }
</script>

