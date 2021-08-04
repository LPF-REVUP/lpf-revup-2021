<template lang="pug">
  v-container
    div(
      v-for="s in sessionsToShow"
      :key="s.id"
    )
      timetable-cell(
        :session="s"
        :height="getSessionLength(s)"
      )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import moment from 'moment'
import { EventSession } from '~/types'

@Component({
  components: {
    TimetableCell: () => import('@/components/TimetableCell.vue')
  }
})
export default class TimetableColomnComponent extends Vue {
  @Prop({ type: Array, required: true }) readonly sessions!: Array<EventSession>
  @Prop({ type: String, required: true }) readonly areaId!: string
  @Prop({ type: Number, required: true }) readonly heightByHour!: number
  @Prop({ type: Object, required: true }) readonly from!: moment.Moment

  get sessionsToShow() {
    const sortedSessions = this.sessions
      .filter(s => s.area.id === this.areaId)
      .sort((a, b) => this.$moment(a.startsAt).diff(b.startsAt))
    const ret: Array<EventSession> = []
    const dummyEventSessionBase = {
      title: '',
      description: '',
      applicationPage: '',
      speakers: [],
      tags: [],
      applicantsMessage: ''
    }
    let fromIndex = this.from
    sortedSessions.forEach((s, index) => {
      // set default color when color not set
      if (!s.color) {
        s.color = '#666666'
      }
      const startAt = this.$moment(s.startsAt)
      if (fromIndex.isBefore(startAt)) {
        const dummyEventSession = {
          id: index.toString(),
          area: this.area,
          startsAt: fromIndex.toDate(),
          endsAt: startAt.toDate(),
          ...dummyEventSessionBase
        }
        ret.push(dummyEventSession)
      }
      ret.push(s)
      fromIndex = this.$moment(s.endsAt)
    })
    console.log(ret)
    return ret
  }

  get area() {
    return this.sessions.filter(s => s.area.id === this.areaId)[0].area
  }

  getSessionLength(s: EventSession) {
    const hours = this.$moment
      .duration(this.$moment(s.endsAt).diff(s.startsAt))
      .asHours()
    return hours * this.heightByHour
  }
}
</script>
