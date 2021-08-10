<template lang="pug">
  v-container.ma-0.pa-0(fluid)
    v-card.pa-1(
      outlined
    )
      v-row(dense align="center" justify="center")
        v-col(cols="12" sm="12" md="2")
          v-row(justify="center")
            img(
              :alt="speaker.familyNameJp"
              :src="speakerAvatarImageUrl"
            )
        v-col(cols="12" sm="12" md="2")
          h3.text-center.speaker_text {{ fullName }}
          div.text-center.speaker_text {{ speaker.affiliation }} {{ speaker.title }}
        v-col(cols="12" sm="12" md="8")
          span.speaker_text(
            v-html="speaker.profile"
          )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Speaker } from '~/types'

@Component({})
export default class SpeakerItemComponent extends Vue {
  @Prop({ type: Object, required: true }) readonly speaker!: Speaker

  get fullName() {
    return `${this.speaker.familyNameJp} ${this.speaker.firstNameJp}`
  }

  get speakerAvatarImageUrl() {
    // Use Mask Corner Radius to display a speaker profile image as an avatar icon.
    // See microCMS image API
    // https://microcms.io/docs/image-api/introduction
    // https://docs.imgix.com/apis/url/mask/corner-radius
    return `${this.speaker.image.url}?mask=corners&w=100&h=100&corner-radius=50,50,50,50`
  }
}
</script>

<style lang="stylus">
.speaker_text
  color #666666
</style>
