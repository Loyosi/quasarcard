<template>
    <q-page padding class="flex flex-center column">
        <div class="row q-mb-lg">
            <router-link to="/">
                <q-btn color="primary" size="lg" :label="$t('create.return')"></q-btn>
            </router-link>
        </div>
        <div class="row q-mb-sm">
            <p class="form-header"> {{$t('create.createform')}} </p>
        </div>

        <create-form></create-form>
    </q-page>
</template>

<script>
import CreateForm from 'src/components/CreateForm.vue'
export default {
  components: { CreateForm },
  data () {
    return {
    }
  }
}
</script>

<style>
.form-header {
  font-size: 2em;
  text-align: center;
  padding: 0;
  margin: 0;
}

@media screen and (min-width: 1300px) {
  .form-header {
    font-size: 3em;
  }
}
</style>
