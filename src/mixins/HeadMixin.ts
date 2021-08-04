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

    const siteName: string = 'LPF REV UP 2020'
    const title: string = info.title ? `${info.title} | ${siteName}` : siteName
    const description: string = info.description
      ? // HTML タグを除去
        info.description.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
      : 'LPF REV UP 2020は普段LINEのAPIに関する勉強会や情報交換を行っている東京、関西、九州のコミュニティが合同で主催するカンファレンスです。2020のテーマは「開発者と共に。ユーザーを支えるLINEプラットフォーム」。'

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
