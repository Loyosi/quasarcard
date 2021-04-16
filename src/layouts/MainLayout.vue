<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white" height-hint="1000.59">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/logo.jpeg">
          </q-avatar>
          {{ $t('title') }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <transition name="fade">
          <router-view />
        </transition>
        <language-switcher></language-switcher>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
import LanguageSwitcher from 'src/components/LanguageSwitcher.vue'
export default {
  components: { LanguageSwitcher },
  data () {
    return {
    }
  },
  mounted () {
    this.$q.dark.set(true)
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
