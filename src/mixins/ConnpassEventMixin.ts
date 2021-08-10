import Vue from 'vue'
import Component from 'vue-class-component'
import consola from 'consola'
import { EventSession } from '~/types'

@Component
export default class ConnpassEventMixin extends Vue {
  /**
   * セッションの申込者数を取得し、申込者メッセージとして付与する
   * @param sessions 取得対象のセッション一覧
   */
  public async updateApplicantMessage(sessions: Array<EventSession>) {
    consola.log('getConnpassEventInfo called!', sessions)
    try {
      const connpassResponse = await this.$connpassApi.getConnpassEventInfo(
        sessions
      )
      sessions.forEach(eventSession => {
        const connpassEventId = this.$connpassApi.getConnpassEventId(
          eventSession
        )
        const connpassEvent = connpassResponse.events.find(
          connpassEvent => connpassEventId === connpassEvent.event_id.toString()
        )
        if (connpassEvent) {
          const applicantCount = connpassEvent.accepted + connpassEvent.waiting
          eventSession.applicantsMessage = connpassEvent.limit
            ? applicantCount + '/' + connpassEvent.limit + '人'
            : applicantCount + '人'
        } else {
          eventSession.applicantsMessage = '取得できませんでした'
        }
      })
    } catch (error) {
      consola.error('Could not get Connpass event info', error)
      sessions.forEach(s => {
        s.applicantsMessage = '取得できませんでした'
      })
    }
    return sessions
  }
}
