<template lang="pug">
  v-card.ma-0.pa-0(
    outlined
  )
    v-card-title
      nuxt-link.text-decoration-none(:to="sessionPageLink")
        h5.session_text.session_title {{ session.title }}
    v-card-text
      div.group.mr-2.session_text.caption
        v-icon.mr-1(small) mdi-calendar-month
        | {{ displaySessionTimePeriod }}
      div.group.mr-2.session_text.caption(
        v-if="session.applicantsMessage"
      )
        v-icon.mr-1(small) mdi-account
        | {{ session.applicantsMessage }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { EventSession } from '~/types'

@Component({})
export default class SpeakerBoxComponent extends Vue {
  @Prop({ type: Object, required: true }) readonly session!: EventSession

  get sessionPageLink() {
    return `/sessions/${this.session.id}/`
  }

  get displaySessionTimePeriod() {
    return `${this.$moment(this.session.startsAt).format(
      'M月D日 H:mm'
    )} - ${this.$moment(this.session.endsAt).format('H:mm')}`
  }
}
</script>

<style lang="stylus">
.session_title
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
.session_text
  color #666666
</style>
