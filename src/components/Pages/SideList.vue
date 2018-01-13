<template>
  <div class="tg-sidelist">
    <div class="tg-sidelist__header">
      <div class="tg-sidelist-tools" @click="bardisply">
        <i class="icon-caidan01 iconfont"></i>
      </div>
      <div class="tg-sidelist-search">
        <div class="tg-sidelist-search__input">
          <input type="text" placeholder="Search" class="tg-search-input">
        </div>
      </div>
    </div>
    <userList>
      <div solt='loading'></div>
    </userList>
  </div>
</template>

<script>
  import userList from 'Pages/UserList'
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions(['bardisply'])
    },
    components: {
      userList
    }
  }
</script>
