<template>
  <q-page padding class="flex flex-center column">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    > -->
    <div class="row q-mb-lg">
      <p class="welcome"> {{$t('index.welcome')}} </p>
    </div>

    <div class="row q-mb-lg">
      <transition name="fade-slow" appear>
        <online-card :card-data="cardData"></online-card>
      </transition>
    </div>

    <div class="row">
      <router-link to="Create">
        <q-btn color="primary" size="lg" :label="$t('index.createnow')"></q-btn>
      </router-link>
    </div>

  </q-page>
</template>

<script>
import OnlineCard from 'src/components/OnlineCard.vue'
export default {
  components: { OnlineCard },
  name: 'PageIndex',
  data () {
    return {
      cardData: {
        username: 'Loyosi',
        profilePicture: 'https://i.imgur.com/QNTM5vt.jpg',
        socialMedias: [
          {
            id: 'discord',
            icon: 'fab fa-discord',
            userdata: 'Loyosi#5314'
          },
          {
            id: 'facebook-messenger',
            icon: 'fab fa-facebook-messenger',
            userdata: 'Mariloya.yosi'
          },
          {
            id: 'instagram',
            icon: 'fab fa-instagram',
            userdata: 'mylittle_yoshi'
          },
          {
            id: 'github',
            icon: 'fab fa-github',
            userdata: 'Loyosi'
          },
          {
            id: 'steam',
            icon: 'fab fa-steam',
            userdata: 'Loyosi'
          }
        ],
        backgroundColor: 'var(--q-color-dark)'
      }
    }
  }
}
</script>

<style>
.welcome {
  font-size: 2.25em;
  text-align: center;
}

@media screen and (min-width: 1300px) {
  .welcome {
    font-size: 3.25em;
  }
}

.fade-slow-enter-active, .fade-slow-leave-active {
  transition: opacity 3s;
}
.fade-slow-enter, .fade-slow-leave /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
