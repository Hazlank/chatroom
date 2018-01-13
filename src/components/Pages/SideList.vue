<template>
  <div class="tg-sidelist">
    <div class="tg-sidelist__header">
      <div class="tg-sidelist-tools" @click="bardisply">
        <i class="icon-caidan01 iconfont"></i>
      </div>
      <div class="tg-sidelist-search">
        <div class="tg-sidelist-search__input">
          <input type="text" placeholder="Search" class="tg-search-input" v-model="searchUser">
        </div>
      </div>
    </div>
    <userList :searchUser='searchUser'>
      <div solt='loading'></div>
    </userList>
  </div>
</template>

<script>
  import userList from 'Pages/UserList'
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        searchUser: ''
      }
    },
    methods: {
      ...mapActions(['bardisply'])
    },
    components: {
      userList
    }
  }
</script>
