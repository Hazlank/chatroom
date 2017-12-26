<template>
  <div :class="theme">
    <header is='headerCompontent'></header>
    <div class="tg-main">
      <side-list></side-list>
      <message-content></message-content>
    </div>
    <div class="tg-container">
      <Wrapper></Wrapper>
      <side-bar></side-bar>
    </div>
  </div>
</template>

<script>
  import Header from 'Pages/Header'
  import SideList from 'Pages/SideList'
  import SideBar from 'Pages/SideBar'
  import Message from 'Pages/Message'
  import Wrapper from 'Public/Wrapper'
  export default {
    name: 'app',
    data () {
      return {
        theme: 'light'
      }
    },
    components: {
      HeaderCompontent: Header,
      MessageContent: Message,
      SideList,
      SideBar,
      Wrapper
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
