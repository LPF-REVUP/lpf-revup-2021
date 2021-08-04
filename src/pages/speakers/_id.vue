<template lang="pug">
  v-container.pa-0.ma-0(fluid)
    v-row.mb-6(
      no-gutters
    )
      v-col()
      v-col(
        cols="12"
        lg="6"
        md="8"
      )
        v-container(fluid)
          v-row.mb-6.mt-2.mt-md-10(
            justify="center"
            align-content="center"
          )
            v-col.mb-4(cols="12" md="4")
              v-layout(justify-center)
                v-img.rounded-circle(:src="speaker.image.url" width="272" max-width="100%" :alt="speakerFullName" :aspect-ratio="1/1")
            v-col(cols="12" md="8")
              div.headline.font-weight-black.text-center.text-md-left {{ speakerFullName }}
              div.text-subtitle-1.text-center.text-md-left {{ speaker.affiliation }} {{ speaker.title }}
              div.text-body-2.mt-2
                span(v-html="speaker.profile")
              div.mt-2
                span.mr-2.text-decoration-none(v-if="speaker.facebook")
                  a.transparent--text(:href="speakerFacebookUrl" rel="nofollow" target="_blank")
                    v-icon(large) mdi-facebook
                span.mr-2.text-decoration-none(v-if="speaker.twitter")
                  a.transparent--text(:href="speakerTwitterUrl" rel="nofollow" target="_blank")
                    v-icon(large) mdi-twitter
          v-row.mt-10
            div.text-h6.ml-4 登壇セッション
            session-list(
              :sessions="speaker.sessions"
              :key="sessionListComponentKey"
            )
      v-col()
    v-row
      //- SHARE
      share-box(
        :shareUrl="url"
        :shareText="shareText"
      )
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import consola from 'consola'
import HeadMixin from '~/mixins/HeadMixin'
import ConnpassEventMixin from '~/mixins/ConnpassEventMixin'
import { HeadInfo, Speaker } from '~/types'
import { MicroCmsAPI } from '~/plugins/microCmsApi'

@Component({
  components: {
    SessionList: () => import('@/components/SessionList.vue'),
    ShareBox: () => import('@/components/ShareBox.vue')
  }
})
export default class SpeakerPage extends mixins(HeadMixin, ConnpassEventMixin) {
  speaker!: Speaker
  randomForSessionListComponentKey: number = 0
  pageLink!: string

  public headInfo(): HeadInfo {
    return {
      title: `${this.speakerFullName} | Session`,
      description: `${this.speaker.profile}`
    }
  }

  get url(): string {
    return this.pageLink
  }

  get shareText(): string {
    return this.speakerFullName
  }

  get speakerFullName(): string {
    return `${this.speaker.familyNameJp} ${this.speaker.firstNameJp}`
  }

  get speakerFacebookUrl(): string {
    return `https://www.facebook.com/${this.speaker.facebook}`
  }

  get speakerTwitterUrl(): string {
    return `https://twitter.com/${this.speaker.twitter}`
  }

  /**
   * セッション情報更新時にSessionList を再描画するためのキーを取得する
   * 再描画したい場合は `randomForSessionListComponentKey` の値を変更する
   */
  get sessionListComponentKey(): string {
    return `key_${this.randomForSessionListComponentKey}`
  }

  async asyncData(context: Context) {
    consola.log('asyncData called!!')
    const api: MicroCmsAPI = context.app.$microCmsApi
    const { params } = context
    consola.log('Speaker ID', params.id)
    const speaker = await api.getSpeaker(params.id)
    speaker.sessions.forEach(s => {
      if (s.applicantCount) {
        s.applicantsMessage = `${s.applicantCount}人`
      } else {
        s.applicantsMessage = ''
      }
    })
    consola.log('Speaker', speaker)
    // Page link
    const pageLink = `${process.env.BASE_URL}/speakers/${speaker.id}/`
    return {
      speaker,
      pageLink
    }
  }

  mounted() {
    if (this.speaker.sessions && this.speaker.sessions.length > 0) {
      consola.log('Sessions', this.speaker.sessions)
      // Change key to ReRender SessionList Component
      this.randomForSessionListComponentKey = new Date().getTime()
    }
  }
}
</script>
