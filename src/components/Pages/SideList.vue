<template>
  <div class="tg-sidelist">
    <div class="tg-sidelist__header">
      <div class="tg-sidelist-tools" @click="barDisply">
        <i class="icon-caidan01 iconfont"></i>
      </div>
      <div class="tg-sidelist-search">
        <div class="tg-sidelist-search__input">
           <input type="text" placeholder="Search" class="tg-search-input" v-model="searchUser">
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
  import { mapActions } from 'vuex'
  export default {
    name: 'sidelist',
    data () {
      return {
        searchUser: ''
      }
    },
    methods: {
      ...mapActions(['barDisply'])
    },
    components: {
      userList
    }
  }
</script>
