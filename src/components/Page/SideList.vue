<template>
  <div class="tg-sidebar">
    <div class="tg-sidebar__header">
      <div class="tg-sidebar-tools">
        <i class="icon-caidan01 iconfont"></i>
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
  import userList from '@Page/userList.vue'
  export default {
    components: {
      userList
    }
  }
</script>


<style>

</style>
