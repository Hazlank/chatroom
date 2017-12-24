<template>
  <div :class="theme">
    <header is='headerCompontent'></header>
    <div class="tg-main">
      <side-bar></side-bar>
      <side-list></side-list>
      <message-content></message-content>
    </div>
  </div>
</template>

<script>
  import Header from '@Page/Header'
  import SideList from '@Page/SideList'
  import SideBar from '@Page/SideBar'
  import Message from '@Page/Message'
  export default {
    name: 'app',
    data() {
      return {
        theme: 'light'
      }
    },
    components: {
      HeaderCompontent: Header,
      MessageContent: Message,
      SideList,
      SideBar,
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
