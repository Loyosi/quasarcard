import ImageUploader from 'vue-image-upload-resize'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  Vue.use(ImageUploader)
}
