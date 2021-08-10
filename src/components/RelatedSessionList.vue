<template lang="pug">
  v-container.ma-0.pa-0(fluid)
    v-row(dense)
      v-col(
        v-for="s in sessions"
          :key="s.id"
          cols="12"
          sm="4"
      )
        session-box(
          :session="s"
        )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { EventSession } from '~/types'

@Component({
  components: {
    SessionBox: () => import('@/components/SessionBox.vue')
  }
})
export default class RelatedSessionListComponent extends Vue {
  @Prop({ type: Array, required: true }) readonly sessions!: Array<EventSession>
}
</script>
