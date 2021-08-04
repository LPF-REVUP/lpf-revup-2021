<template lang="pug">
  v-container
    // v-if not works here.
    v-row(
      v-show="!showByTab"
      no-gutters
    )
      v-col.mt-12(cols="1")
        v-sheet.text-right.mr-10(
          v-for="(hourLabel, index) in hourLabels"
          :key="hourLabel"
          :height="(index !== hourLabels.length - 1) ? heightByHour + 'px' : ''"
        ) {{ hourLabel }}
      v-col(
        v-for="area in areas"
        :key="area.id"
        no-gutters
      )
        v-icon.ma-2(color="#3cb371") mdi-map-marker
        | {{ area.name }}
        timetable-colomn(
          :areaId="area.id"
          :sessions="sessions"
          :heightByHour="heightByHour"
          :from="minStartAt"
        )
    v-row(
      v-show="showByTab === true"
      no-gutters
    )
      v-tabs(
        v-model="tab"
      )
        v-tab(
          v-for="area in areas"
          :key="area.id"
        )
          v-icon.ma-2(color="#3cb371") mdi-map-marker
          | {{ area.name }}
      v-tabs-items(
        v-model="tab"
      )
        v-tab-item(
          v-for="area in areas"
          :key="area.id"
        )
          v-row
            v-col(cols="1")
              v-sheet.text-right(
                v-for="(hourLabel, index) in hourLabels"
                :key="hourLabel"
                :height="(index !== hourLabels.length - 1) ? heightByHour + 'px' : ''"
              ) {{ hourLabel }}
            v-col
              timetable-colomn(
                :areaId="area.id"
                :sessions="sessions"
                :heightByHour="heightByHour"
                :from="minStartAt"
              )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { EventSession } from '~/types'

@Component({
  components: {
    TimetableColomn: () => import('@/components/TimetableColomn.vue')
  }
})
export default class TimetableComponent extends Vue {
  @Prop({ type: Array, required: true }) readonly sessions!: Array<EventSession>
  tab = this.areas[0]

  get heightByHour() {
    switch (this.$vuetify.breakpoint.name) {
      case 'md':
        return 300
      default:
        return 240
    }
  }

  get showByTab() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
      case 'sm':
        return true
      default:
        return false
    }
  }

  get areas() {
    return ['tokyo', 'osaka', 'fukuoka'].map(
      id => this.sessions.filter(s => s.area.id === id)[0].area
    )
  }

  get minStartAt() {
    return this.sessions
      .map(s => this.$moment(s.startsAt))
      .reduce((a, b) => (a.isBefore(b) ? a : b))
  }

  get hourLabels() {
    const minHour = this.minStartAt.hour()
    const max = this.sessions
      .map(s => this.$moment(s.endsAt))
      .reduce((a, b) => (a.isAfter(b) ? a : b))
    const maxHour = max.minute() ? max.hour() + 1 : max.hour()
    const ret = []
    for (let i = minHour; i <= maxHour; i++) {
      ret.push(i + ':00')
    }
    return ret
  }
}
</script>
