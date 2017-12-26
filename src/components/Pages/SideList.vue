<template>
  <div class="tg-sidebar">
    <div class="tg-sidebar__header">
      <div class="tg-sidebar-tools" @click="bardisply">
        <i class="icon-caidan01 iconfont">dwdw</i>
      </div>
      <div class="tg-sidebar-search">
        <div class="tg-sidebar-search__input">
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


<style>

</style>
