<template>
  <div class="tg-userlist">
    <slot name="loading" v-if='loading'>loading</slot>
    <div class="tg-user" v-for="(user,key) in user" :key="key">
      <div class="tg-user__avatar">
        <img :src="user.avatar" alt="头像">
      </div>
      <div class="tg-user__blcok">
        <div class="tg-blcok__header">
          <span class="tg-block__sign" v-if="user.group">组</span>
          <span class="tg-block__username">{{user.username}}</span>
          <span class="tg-block__staute"></span>
          <span class="tg-block__time">{{user.lasttime}}</span>
        </div>
        <div class="tg-blcok__footer">
          <span class="tg-block__talkname">{{user.talkname}}</span>
          <span class="tg-block__context">{{user.context}}</span>
          <span class="tg-block__contextcount">{{user.contextcount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import avatar from '@/assets/avatar.png'
  export default {
    data() {
      return {
        loading: false,
        user: [{
          avatar: avatar,
          username: 'hax',
          lasttime: '12:15',
          talkname: 'nbsaw',
          context: '我几百真的大',
          contextcount: '200',
          group: false,
        }, {
          avatar: avatar,
          username: 'hax',
          lasttime: '12:15',
          talkname: 'nbsaw',
          context: '我几百真的大',
          contextcount: '200',
          group: false,
        }, {
          avatar: avatar,
          username: 'hax',
          lasttime: '12:15',
          talkname: 'nbsaw',
          context: '我几百真的大',
          contextcount: '200',
          group: false,
        }, {
          avatar: avatar,
          username: 'hax',
          lasttime: '12:15',
          talkname: 'nbsaw',
          context: '我几百真的大',
          contextcount: '200',
          group: false,
        }, {
          avatar: avatar,
          username: 'hax',
          lasttime: '12:15',
          talkname: 'nbsaw',
          context: '我几百真的大',
          contextcount: '200',
          group: false,
        }, {
          avatar: avatar,
          username: 'hax',
          lasttime: '12:15',
          talkname: 'nbsaw',
          context: '我几百真的大',
          contextcount: '200',
          group: false,
        }]
      }
    }
  }
</script>

