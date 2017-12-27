<template>
  <div class="tg-side-bar" :style="{transform:barPosition()}" @click="bardisply">
    <div class="tg-sidebar">
      <div class="tg-sidebar__infor">
        <div class="tg-sidebar__avatar">
          <img src="static/img/7753609_p0.jpg" alt="头像">
        </div>
        <div class="tg-sidebar__item">
          <span class="tg-sidebar__name">{{userinfo.username}}</span>
          <span class="tg-sidebar__phone">{{userinfo.userphone | filterPhone}} <i class="iconfont icon-bookmarkwhite"></i></span>
        </div>
      </div>
      <ul class="tg-sidebar-toolsList">
        <li class="tg-sidebar-toolsList__memu" v-for="(data, index) in memus" :key="index">
          <i class="iconfont" :class="data.icon"></i>
          <a>{{data.context}}</a>
          <div class="theme-button" v-if="data.icon === 'icon-yueliang'">
              <div class="theme-button__container">
                <a class="t-light"></a>
                <a class="t-dark"></a>
              </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'Vuex'
  export default {
    data () {
      return {
        userinfo: {
          username: 'hazlank',
          userphone: '13265846123'
        },
        memus: [{
          context: 'New Group',
          icon: 'icon-qun'
        }, {
          context: 'New Channel',
          icon: 'icon-guangbo'
        }, {
          context: 'Contacts',
          icon: 'icon-lianxiren'
        }, {
          context: 'Calls',
          icon: 'icon-dianhua'
        }, {
          context: 'Settings',
          icon: 'icon-shezhi'
        }, {
          context: 'Night Mode',
          icon: 'icon-yueliang'
        }],
        ...mapGetters(['barPosition'])
      }
    },
    methods: {
      ...mapActions(['bardisply']),
      stopPropagation (e) {
        e.stopPropagation()
      }
    },
    filters: {
      filterPhone: function (value) {
        return `+86 ${value.replace(/\B(?=(?:\d{4})+$)/g, ' ')}`
      }
    }
  }
</script>
