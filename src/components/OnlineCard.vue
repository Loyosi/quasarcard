<template>
    <q-card v-tilt="tiltConfig" class="online-card" >
        <q-card-section class="card-title">
            <p class="title"> {{ $t('cardtitle') }} </p>
        </q-card-section>

        <q-card-section class="card-body">
            <div class="profile">
                <p class="name">{{ cardData.username }}</p>
                <img :src="cardData.profilePicture" alt="Profile photo" class="profile-photo">
            </div>
            <div class="user-info">
                <ul>
                    <li v-for="info in cardData.socialMedias" :key="info.id">
                        <q-icon :name="info.icon" class="card-icon"/>
                        <span class="username-text">{{info.userdata}}</span>
                    </li>
                </ul>
            </div>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      tiltConfig: {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.6,
        gyroscope: true
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap');
.online-card {
    /* position: relative; */
    min-width: 350ox;
    min-height: 250px;
    max-width: 350ox;
    max-height: 250px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
}

.card-title {
    text-align: center;
    border-top: 8px solid rgba(255, 255, 255, 0.5);
    border-bottom: 2px solid rgba(255, 255, 255, 1);
    padding: 12px;
}

.title {
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 1.5rem;
}

.card-body {
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}

.profile {
    padding: 10px;
}

.user-info {
    flex-grow: 2;
    padding: 10px;
}

.user-info ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
}

.user-info ul li {
    text-align: start;
    display: flex;
    align-items: center;
    margin: 5px 0;
    font-size: 16px;
}

.name {
    margin: 0;
    padding-bottom: 8px;
    color: #fff;
    font-weight: 500;
    font-style: italic;
    font-size: 20px;
}

.profile-photo {
    max-width: 96px;
    border-radius: 4px;
    border: 2px solid #fff;
}

.username-text {
    color: #fff;
    font-weight: 200;
    font-size: 10px;
    padding: 0 10px;
}

.card-icon {
    color: #fff;
    font-size: 16px;
}

@media screen and (min-width: 1300px) {
    .online-card {
        min-width: 500px;
        min-height: 314px;
        max-width: 500px;
        max-height: 314px;
    }
    .card-title {
        padding: 16px;
    }
    .title {
        font-size: 2rem;
    }
    .name {
        padding-bottom: 12px;
        font-size: 24px;
    }
    .username-text {
        font-size: 16px;
    }

    .card-icon {
        font-size: 24px;
    }

    .profile-photo {
        max-width: 128px;
    }
}
</style>
