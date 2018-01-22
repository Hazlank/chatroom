<template>
  <div class="tg-userlist">
    <slot name="loading" v-if='loading'>loading</slot>
    <div class="tg-user" v-for="(user,index) in userList" :class="{'active': speekingNum === index}" :key="`username-${user.name}`" @click="talkTo(index, user)" v-if="filterUser(user.name)">
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
          <div>
            <span class="tg-block__talkname">
                {{ user.messagecontent.contextItem[user.messagecontent.contextItem.length - 1].speaker ? 'You' : user.name | filterSpace }}
                <!-- .context[user.messagecontent.length - 1].speaker ? 'You' : user.name | filterSpace -->
            </span><span class="tg-block__point">:</span>
            <span class="tg-block__context" v-html="user.context"></span>
          </div>
          <span v-if="user.messagecontent.unread !== 0" class="tg-block__contextcount">{{user.messagecontent.unread}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import pyfl from 'pyfl'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'userlist',
    props: ['searchUser'],
    data () {
      return {
        loading: false
      }
    },
    methods: {
      filterUser (name) {
        var reg = new RegExp(`^${this.searchUser}|\\s${this.searchUser}`, 'i')
        return new RegExp(/[\u4e00-\u9fa5]/g).test(this.searchUser) ? reg.test(name) : reg.test(pyfl(name))
      },
      talkTo (index, user) {
        user.messagecontent.unread = 0
        this.speekingNumChange(index)
        this.updateLocalStorage()
      },
      ...mapActions(['speekingNumChange', 'updateLocalStorage'])
    },
    computed: {
      ...mapGetters(['speekingNum', 'userList'])
    },
    filters: {
      filterSpace (str) {
        return str.split(' ')[0]
      }
    }
  }
</script>

