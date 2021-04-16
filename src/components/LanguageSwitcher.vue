<template>
    <q-page-sticky position="top-left" :offset="[18, 18]">
        <q-fab
        v-model="fab1"
        :label="$t('languages')"
        label-position="bottom"
        external-label
        color="primary"
        icon="translate"
        direction="right"
        >
            <q-fab-action external-label label-position="bottom" :color="this.$i18n.locale === 'es-mx' ? 'primary' : 'gray'" @click="switchLanguage('es-mx')" icon="img:icons/mexico-flag-button-round-icon-64.png" label="Español" />
            <q-fab-action external-label label-position="bottom" :color="this.$i18n.locale === 'en-us' ? 'primary' : 'gray'" @click="switchLanguage('en-us')" icon="img:icons/united-states-of-america-flag-button-round-icon-64.png" label="English" />
        </q-fab>
    </q-page-sticky>
</template>

<script>
export default {
  data () {
    return {
      fab1: false
    }
  },
  methods: {
    switchLanguage (language) {
      this.$i18n.locale = language
    }
  }
}
</script>
