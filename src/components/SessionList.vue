<template lang="pug">
  v-container
    v-flex(mb-8 xs12)
      div.mt-4(
        v-for="s in sessions"
          :key="s.id"
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
export default class SessionListComponent extends Vue {
  @Prop({ type: Array, required: true }) readonly sessions!: Array<EventSession>
}
</script>
