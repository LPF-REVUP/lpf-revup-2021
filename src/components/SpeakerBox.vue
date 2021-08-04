<template lang="pug">
  .speaker-layout
    .mr-2.mb-3.box(
      @click="moveToSpeakerPage()"
    )
      v-img.rounded-circle.mx-auto(
        width="200"
        :src="speakerImageUrl"
        :aspect-ratio="1/1"
        contain
      )
      v-card-text.text-center
        div.pb-4.text-subtitle-2.text-md-h6 {{ speaker.familyNameJp }} {{ speaker.firstNameJp }}
        div.text-body-2.text-md-subtitle-2
        | {{ speaker.affiliation }}
        br
        | {{ speaker.title }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Speaker } from '~/types'

@Component({})
export default class SpeakerBoxComponent extends Vue {
  @Prop({ type: Object, required: true }) readonly speaker!: Speaker

  get speakerImageUrl() {
    // Use Mask Corner Radius to display a speaker profile image as an avatar icon.
    // See microCMS image API
    // https://microcms.io/docs/image-api/introduction
    // https://docs.imgix.com/apis/url/mask/corner-radius
    return `${this.speaker.image.url}?fit=crop&w=270&h=270`
  }

  moveToSpeakerPage() {
    this.$router.push(`/speakers/${this.speaker.id}/`)
  }
}
</script>
<style lang="stylus">
.speaker-layout
  height 100%
.box
  cursor pointer
</style>
