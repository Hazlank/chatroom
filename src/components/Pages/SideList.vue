<template>
  <div class="tg-sidelist">
    <div class="tg-sidelist__header">
      <div class="tg-sidelist-tools" @click="barDisply">
        <i class="icon-caidan01 iconfont"></i>
      </div>
      <div class="tg-sidelist-search">
        <div class="tg-sidelist-search__input">
           <input type="text" placeholder="Search" class="tg-search-input" v-model="searchUser">
           <transition name='searchIcon'>
              <i @click="deleteText" v-if='searchDelete' class="iconfont icon-cuo1 tg-sidelist__searchDelete"></i>
            </transition> 
        </div>
      </div>
    </div>
    <keep-alive>
      <userList :searchUser="searchUser">
        <div solt='loading'></div>
      </userList>
    </keep-alive>
  </div>
</template>

<script>
  import userList from 'Pages/UserList'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'sidelist',
    data () {
      return {
        searchUser: ''
      }
    },
    computed: mapState(['searchDelete']),
    methods: {
      deleteText () {
        this.searchUser = ''
      },
      ...mapActions(['barDisply', 'searchAnimation'])
    },
    components: {
      userList
    },
    watch: {
      searchUser (str) {
        if (str) {
          if (!this.searchDelete) {
            this.searchAnimation()
          }
        } else {
          this.searchAnimation()
        }
      }
    }
  }
</script>
