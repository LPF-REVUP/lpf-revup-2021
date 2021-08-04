import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import qs from 'qs'
import { EventSession, ConnpassResponse } from '~/types'

const myPlugin: Plugin = ({ $axios }, inject) => {
  inject('connpassApi', new ConnpassAPI($axios))
}
export default myPlugin

export class ConnpassAPI {
  constructor(private axios: NuxtAxiosInstance) {}

  async getConnpassEventInfo(
    session: EventSession | Array<EventSession>
  ): Promise<ConnpassResponse> {
    const connpassEventIds = Array.isArray(session)
      ? session.map(s => this.getConnpassEventId(s))
      : [this.getConnpassEventId(session)]

    const response = await this.axios.get(
      `${process.env.BASE_URL}/.netlify/functions/connpass`,
      {
        params: {
          count: connpassEventIds.length,
          event_id: connpassEventIds
        },
        paramsSerializer: params =>
          qs.stringify(params, { arrayFormat: 'repeat' })
      }
    )
    return response.data
  }

  getConnpassEventId(session: EventSession): string {
    const url = new URL(session.applicationPage)
    const connpassEventId = url.pathname.split('/')[2]
    return connpassEventId
  }
}
