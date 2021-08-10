<template lang="pug">
  div
    v-sheet(
      v-if="!session.title"
      :height="height"
    )
    v-card.mb-2(
      v-if="session.title"
      :height="cardHeight"
      @click="moveToSessionPage()"
      @mousedown.middle="openSessionPage()"
      dark
      :color="session.color"
    )
      v-card-text.pa-2
        span.timetable_cell_text {{ session.title }}
        v-row.mt-1
          v-col.pa-0.px-6
            v-row.mb-1(
              v-for="s in session.speakers"
              :key="s.id"
              @click.stop="moveToSpeakerPage(s)"
              @mousedown.middle="openSpeakerPage(s)"
            )
              v-img.mr-1.rounded-circle(
                :src="getSpeakerAvatarImageUrl(s)"
                :max-width="avatorSize"
                :max-height="avatorSize"
              )
              span.timetable_cell_text {{ getSpeakerName(s) }}
        v-row.mt-1
          v-col.py-0.pr-4(align="right")
            div.nobr
              v-btn(
                v-if="session.movieUrl"
                icon
                small
                @click.stop="openMovie()"
              )
                v-icon.timetable_cell_text mdi-arrow-right-drop-circle
              v-btn(
                v-if="session.documentUrl"
                @click.stop="openDocument()"
                icon
                small
              )
                v-icon.timetable_cell_text mdi-paperclip
              span.timetable_cell_text(
                v-if="session.applicantsMessage"
              )
                v-icon mdi-account
                | {{ session.applicantsMessage }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { EventSession, Speaker } from '~/types'

@Component({})
export default class TimetableCellComponent extends Vue {
  @Prop({ type: Object, required: true }) readonly session!: EventSession
  @Prop({ type: Number, required: true }) readonly height!: number
  avatorSize = 22

  get cardHeight() {
    // for margin is 8px with mb-2, set card height smaller 8px
    return this.height - 8 + 'px'
  }

  getSpeakerName(s: Speaker) {
    return s.familyNameJp + ' ' + s.firstNameJp
  }

  getSpeakerAvatarImageUrl(s: Speaker) {
    // Use Mask Corner Radius to display a speaker profile image as an avatar icon.
    // See microCMS image API
    // https://microcms.io/docs/image-api/introduction
    // https://docs.imgix.com/apis/url/mask/corner-radius
    return `${s.image.url}?w=${this.avatorSize}&h=${this.avatorSize}&corner-radius=100,100,100,100`
  }

  moveToSessionPage() {
    this.$router.push(`/sessions/${this.session.id}/`)
  }

  openSessionPage() {
    return window.open(`/sessions/${this.session.id}/`)
  }

  moveToSpeakerPage(s: Speaker) {
    this.$router.push(`/speakers/${s.id}`)
  }

  openSpeakerPage(s: Speaker) {
    return window.open(`/speakers/${s.id}`)
  }

  openMovie() {
    return window.open(this.session.movieUrl)
  }

  openDocument() {
    return window.open(this.session.documentUrl)
  }
}
</script>

<style lang="stylus">
.timetable_cell_link
  text-decoration: none
.timetable_cell_text
  color white
.nobr
  white-space: nowrap
</style>
