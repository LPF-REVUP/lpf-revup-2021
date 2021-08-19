import Vue from 'vue'
import Component from 'vue-class-component'
import { MetaInfo } from 'vue-meta'
import { HeadInfo } from '~/types'

@Component
export default class HeadMixin extends Vue {
  public headInfo(): HeadInfo {
    return {}
  }

  public head(): MetaInfo {
    const info = this.headInfo()

    const siteName: string = 'LINE Developers Community REV UP 2021'
    const title: string = info.title ? `${info.title} | ${siteName}` : siteName
    const description: string = info.description
      ? // HTML タグを除去
        info.description.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
      : 'LINE Developers Community REV UP 2021 はLINEのコミュニティが主催する国内最大のLINE関連カンファレンスです。各分野のエキスパートがLINE関連の技術や事例、知見について惜しみなく発信する様々なセッションが今年も数多く行われます。'

    const baseUrl: string = process.env.BASE_URL || ''
    const thisUrl: string = `${baseUrl}${this.$route.path}`

    const ogImageUrl: string = `${baseUrl}${info.ogImagePath || '/ogp.png'}`
    return {
      title,
      htmlAttrs: {
        prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/ fb#'
      },
      meta: [
        { hid: 'description', name: 'description', content: description },
        { name: 'application-name', content: siteName },

        // OGP / Social Meta Tag
        { property: 'og:type', name: 'og:type', content: 'website' },
        { property: 'og:title', name: 'og:title', content: title },
        {
          property: 'og:description',
          name: 'og:description',
          content: description
        },
        { property: 'og:url', name: 'og:url', content: thisUrl },
        { property: 'og:image', name: 'og:image', content: ogImageUrl },
        { property: 'og:site_name', name: 'og:site_name', content: siteName }
      ]
    }
  }
}
