<template>
  <div class="tg-userlist">
    <slot name="loading" v-if='loading'>loading</slot>
    <div class="tg-user" v-for="(user,index) in userList" :class="{'active': speekingNum === index,'font-c': speekingNum !== index}"  @click="speekingNumChange(index)"  :key="`username-${user.name}`">
      <div class="tg-user__avatar">
        <img :src="user.avatar" alt="头像">
      </div>
      <div class="tg-user__block">
        <div class="tg-block__header">
          <span class="tg-block__sign" v-if="user.group">组</span>
          <span class="tg-block__talkto">{{user.name}}</span>
          <span class="tg-block__staute"></span>
          <span class="tg-block__time">{{user.lasttime}}</span>
        </div>
        <div class="tg-block__footer">
          <span class="tg-block__talkname">
            {{ user.messagecontent[user.messagecontent.length - 1].speaker ? 'You' : user.name }}:
          </span>
          <span class="tg-block__context">{{user.context}}</span>
          <span v-if="user.unread === 0" class="tg-block__contextcount">{{user.unread}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        loading: false
      }
    },
    methods: {
      ...mapActions(['speekingNumChange'])
    },
    computed: {
      ...mapGetters(['speekingNum', 'userList'])
    }
  }
</script>

