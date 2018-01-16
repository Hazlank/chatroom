<template>
  <transition name='box'>
      <div class='tg-box' v-if='box' @click='boxDisplay'>
        <div class='tg-box__container' @click.stop>
          <keep-alive>
            <component :is="boxType"></component>
          </keep-alive>
        </div>
      </div> 
  </transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BoxGroup from 'Pages/BoxGroup'
import BoxChannel from 'Pages/BoxChannel'
import BoxContact from 'Pages/BoxContact'
import BoxCall from 'Pages/BoxCall'
import BoxSetting from 'Pages/BoxSetting'
export default {
  name: 'box',
  methods: {
    ...mapActions(['boxDisplay'])
  },
  computed: {
    ...mapState(['box', 'boxType'])
  },
  components: {
    BoxCall,
    BoxGroup,
    BoxSetting,
    BoxChannel,
    BoxContact
  }
}
</script>
