<template>
    <q-page padding class="flex flex-center column">
        <div class="row q-mb-lg">
            <router-link to="/">
                <q-btn color="primary" size="lg" :label="$t('create.return')"></q-btn>
            </router-link>
        </div>
        <transition name="fade-slow" appear>
            <online-card :card-data="cardData"></online-card>
        </transition>
    </q-page>
</template>

<script>
import OnlineCard from 'src/components/OnlineCard.vue'
export default {
  components: { OnlineCard },
  props: {
    cardData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.fade-slow-enter-active, .fade-slow-leave-active {
  transition: opacity 3s;
}
.fade-slow-enter, .fade-slow-leave /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
