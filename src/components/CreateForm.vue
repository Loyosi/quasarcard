<template>
    <div class="stepper q-pa-md">
            <q-stepper
            v-model="step"
            vertical
            color="primary"
            animated
            >
                <q-step
                    :name="1"
                    :title="$t('create.username')"
                    icon="settings"
                    :done="step > 1"
                >
                    <div class="">
                        <q-input filled bottom-slots v-model="cardData.username" :label="$t('create.username')" counter :maxlength="usernameMaxLength">
                            <template v-slot:prepend>
                                <q-icon name="fas fa-user-tag" />
                            </template>
                            <template v-slot:append>
                                <q-btn round flat icon="close" @click="cardData.username = ''" class="btn-delete-field cursor-pointer"></q-btn>
                            </template>
                            <template v-slot:hint>
                                {{ $t('create.usernamehint') }}
                            </template>
                        </q-input>
                    </div>

                    <q-stepper-navigation>
                    <q-btn @click="step = 2" color="primary" :label="$t('create.continue')" :disable="!isUsernameValid" />
                    </q-stepper-navigation>
                </q-step>

                <q-step
                    :name="2"
                    :title="$t('create.photo')"
                    :caption="$t('create.requiresurl')"
                    icon="fas fa-camera"
                    :done="step > 2"
                >
                    <div class="q-mb-lg">
                        <q-icon name="fas fa-info-circle"></q-icon> {{ $t('create.photoinfo') }}
                    </div>
                    <div class="q-mb-xl">
                        <q-input filled bottom-slots v-model="cardData.profilePicture" :label="$t('create.photourl')" counter :maxlength="photourlMaxLength">
                            <template v-slot:prepend>
                                <q-icon name="fas fa-camera" />
                            </template>
                            <template v-slot:append>
                                <q-btn round flat icon="close" @click="cardData.profilePicture = ''" class="btn-delete-field cursor-pointer"></q-btn>
                            </template>
                            <template v-slot:hint>
                                <i18n path="create.photohint" tag="span">
                                    <a href="https://imgur.com/upload" target="_blank">imgur</a>
                                </i18n>
                            </template>
                        </q-input>
                    </div>
                    <div class="flex flex-center column q-mb-lg">
                        <span>
                            <q-icon name="far fa-eye"></q-icon> {{ $t('create.preview') }}
                        </span>
                        <q-img :src="cardData.profilePicture" class="profile-photo-preview" spinner-color="white"></q-img>
                    </div>

                    <q-stepper-navigation>
                    <q-btn @click="step = 3" color="primary" :label="$t('create.continue')" :disable="!isPhotourlValid" />
                    <q-btn flat @click="step = 1" color="primary" :label="$t('create.back')" class="q-ml-sm" />
                    </q-stepper-navigation>
                </q-step>

                <q-step
                    :name="3"
                    :title="$t('create.selectsocialmedias')"
                    icon="fas fa-user-plus"
                    :done="step > 3"
                >
                    <div class="q-mb-lg">
                        <q-icon name="fas fa-info-circle"></q-icon> {{ $t('create.selectsocialmediasinfo') }}
                    </div>
                    <div class="q-mb-sm">
                        <q-select
                            filled
                            v-model="cardData.socialMedias"
                            multiple
                            :options="socialmediaslist"
                            counter
                            :max-values="socialmediasSelectLimit"
                        >
                            <template v-if="cardData.socialMedias.length > 0" v-slot:append>
                                <q-btn @click.stop="cardData.socialMedias = []" round flat icon="close" @click="cardData.profilePicture = ''" class="btn-delete-field cursor-pointer"></q-btn>
                            </template>
                            <template v-slot:option="scope">
                                <q-item
                                    v-bind="scope.itemProps"
                                    v-on="scope.itemEvents"
                                >
                                    <q-item-section avatar>
                                        <q-icon :name="scope.opt.icon" />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label v-html="scope.opt.name" />
                                        <q-item-label caption>{{ scope.opt.placeholder[language] }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </template>
                            <template v-slot:selected-item="scope">
                                <q-chip
                                    removable
                                    @remove="scope.removeAtIndex(scope.index)"
                                    :tabindex="scope.tabindex"
                                    color="white"
                                    text-color="primary"
                                    class="q-ma-none"
                                >
                                    <q-avatar color="primary" text-color="white" :icon="scope.opt.icon" />
                                    {{ scope.opt.name }}
                                </q-chip>
                            </template>
                        </q-select>
                    </div>
                    <q-stepper-navigation>
                    <q-btn @click="step = 4" color="primary" :label="$t('create.continue')" :disable="!isSelectedSMValid" />
                    <q-btn flat @click="step = 2" color="primary" :label="$t('create.back')" class="q-ml-sm" />
                    </q-stepper-navigation>
                </q-step>
                <q-step
                    :name="4"
                    :title="$t('create.fillsminfo')"
                    icon="fas fa-user-edit"
                >
                    <div class="q-mb-lg">
                        <q-icon name="fas fa-info-circle"></q-icon> {{ $t('create.fillsminfoinfo') }}
                    </div>
                    <div class="q-mb-lg" v-for="socialmedia in cardData.socialMedias" :key="socialmedia.id">
                        <q-input filled bottom-slots
                        v-model="socialmedia.userdata" :label="socialmedia.name"
                        counter :maxlength="socialmedia.maxlength">
                            <template v-slot:prepend>
                                <q-icon :name="socialmedia.icon" />
                            </template>
                            <template v-slot:append>
                                <q-btn round flat icon="close" @click="socialmedia.userdata = ''" class="btn-delete-field cursor-pointer"></q-btn>
                            </template>
                            <template v-slot:hint>
                                {{ socialmedia.placeholder[language] }}
                            </template>
                        </q-input>
                    </div>
                    <q-stepper-navigation>
                    <q-btn color="primary" @click="GenerateCard" :label="$t('create.generatecard')" :disable="!isSMInfoValid" />
                    <q-btn flat @click="step = 3" color="primary" :label="$t('create.back')" class="q-ml-sm" />
                    </q-stepper-navigation>
                </q-step>
            </q-stepper>
        </div>
</template>

<script>
import Settings from 'src/settings/createform.json'
export default {
  data () {
    return {
      step: 1,
      usernameMaxLength: 20,
      photourlMaxLength: 150,
      socialmediasSelectLimit: 5,
      socialmediaslist: [],
      cardData: {
        username: '',
        profilePicture: '',
        socialMedias: []
      }
    }
  },
  created () {
    this.SetupSettings()
  },
  methods: {
    SetupSettings () {
      this.usernameMaxLength = Settings.username.maxlength
      this.photourlMaxLength = Settings.photourl.maxlength
      this.socialmediasSelectLimit = Settings.socialmedias.selectlimit
      this.socialmediaslist = Settings.socialmedias.list
    },

    GenerateCard () {
      console.log(this.cardData)
      this.$router.push({ name: 'Card', params: { cardData: this.cardData } },
        this.showGeneratedNotif())
    },

    showGeneratedNotif () {
      this.$q.notify({
        progress: true,
        message: this.$t('create.successfulgen'),
        icon: 'check',
        color: 'green',
        textColor: 'white',
        timeout: 2000
      })
    }
  },
  computed: {
    language () {
      return this.$i18n.locale
    },

    isUsernameValid () {
      if (this.cardData.username !== '' && this.cardData.username.length <= this.usernameMaxLength) return true
      else return false
    },

    isPhotourlValid () {
      if (this.cardData.profilePicture !== '' && this.cardData.profilePicture.length <= this.photourlMaxLength) return true
      else return false
    },

    isSelectedSMValid () {
      if (this.cardData.socialMedias.length > 0 && this.cardData.socialMedias.length <= this.socialmediasSelectLimit) return true
      else return false
    },

    isSMInfoValid () {
      let isValid = true
      if (this.cardData.socialMedias === []) {
        isValid = false
      } else {
        for (const smindex in this.cardData.socialMedias) {
          if (Object.hasOwnProperty.call(this.cardData.socialMedias, smindex)) {
            const socialmedia = this.cardData.socialMedias[smindex]
            if (socialmedia.userdata === '' || socialmedia.userdata > socialmedia.maxlength || socialmedia.userdata === undefined) {
              isValid = false
            }
          }
        }
      }
      return isValid
    }
  }
}
</script>

<style>

.stepper {
    max-width: 450px;
}

.btn-delete-field:hover {
    transition: color 0.3s cubic-bezier(0.25,0.8,0.5,1), background-color 0.3s cubic-bezier(0.25,0.8,0.5,1);
    color: red;
}

.profile-photo-preview {
    width: 128px;
    height: 128px;
    border-radius: 4px;
    border: 2px solid #fff;
}
</style>
