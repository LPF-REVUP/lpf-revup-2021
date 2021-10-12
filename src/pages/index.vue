<template lang="pug">
  .wrap
    .main-picture
      v-container.py-0
        v-row.py-8.white--text
          v-col.mx-auto.text-center(cols="10" lg="6")
            .main-picture-logo.pb-6.mb-3
              img(src="/main-picture-logo.svg")
            .sponsored.mb-3.p-5.text-center
              p.mt-2
                | Sponsor
              img.mt-6.mb-7.map-photo(
                src="@/assets/hero__line.png"
                srcset="@/assets/hero__line@2x.png 2x"
              )
            .date
              span.year 2021.
              span.day 10.02
              span.week [SAT]
            .place
              | @ ONLINE
    .pa-2.notification
      v-container.py-0
        v-layout(justify-center)
          div
            | 2021.10.12
            |
            a(href="https://www.youtube.com/watch?v=bOdEcLqcM0M&list=PLFA0577mKojXEhjtJXj4Ybd0pRVoX9T8O" target="_blank") アーカイブ動画公開
            | ❗️
            br
            | 2021.10.04
            |
            a(href="https://twitter.com/linedc_jp/status/1444901782849609729?s=20" target="_blank") グラレコ公開
            |  🎉
            br
            | 2021.09.15
            |
            a(href="https://twitter.com/linedc_jp/status/1438011404666036226" target="_blank") Twitterキャンペーン
            | 実施中です！
            br
            | 2021.09.07 セッション申し込み受付開始。
            br
            | 2021.09.07 公式サイトオープン！
    .pt-16.promotion-moview
      iframe.deck_frame.viewer_size(
        src="https://www.youtube.com/embed/TmVcKYFz6Tc?autoplay=1&mute=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      )
    .introduction.font-biryani(id="introduction")
      v-container
        v-row(cols="12")
          v-col.py-15.mb-4(col="12")
            h2.mb-8.text-md-h3.text-sm-h4.introduction-title.font-biryani
              | LINE Developers Community
            h2.mb-8.text-md-h3.text-sm-h4.introduction-title.font-biryani
              | REV UP 2021
            h3.text-center.color-green
              | Get Connected with LINE／LINEを介して実現される様々な繋がりや連携
        v-row(cols="12")
          v-col.mx-auto(cols="12" md="6")
            p.body-2
              | LINE Developers Community REV UP 2021（以下、「REV UP」） はLINEのコミュニティが主催する国内最大のLINE関連カンファレンスです。各分野のエキスパートがLINE関連の技術や事例、知見について惜しみなく発信する様々なセッションが今年も数多く行われます。
            p.body-2
              | また、今年のテーマは「Get Connected with LINE」です。ぜひ、本カンファレンスを介して様々な繋がり出会いを実現していただければ幸いです。
    v-container
      //- About
      .section-header(id="about")
        div.mb-4()
          div.ml-2.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani ABOUT
          div.ml-2.text-subtitle-2.text-md-subtitle-2.section-header-text イベント概要
        v-row.mb-6(cols="12")
          v-col.mx-auto.body-2(cols="12" md="8")
            v-row.py-2.about-list(cols="12")
              v-col.font-weight-bold(cols="12" md="3")
                | 開催日
              v-col(cols="12" md="9")
                | 10月02日(土)
            v-row.py-2.about-list(cols="12")
              v-col.font-weight-bold(cols="12" md="3")
                | 場所
              v-col(cols="12" md="9")
                | オンライン
            v-row.py-2.about-list(cols="12")
              v-col.font-weight-bold(cols="12" md="3")
                | 参加費
              v-col(cols="12" md="9")
                | 無料
        v-row(cols="12")
          v-col.mx-auto(cols="12" md="6")
            p.body-2
              | 視聴はオンラインです。是非お気軽にご参加下さい。
            p.body-2
              a(href="https://2020.revup.jp" target="_blank") REVUP 2020 公式サイトはこちら
        v-col.mx-auto.text-center(cols="12" lg="3" md="4")
          a(href="https://note.com/linedc/n/nb4131c648cd7" target="_blank")
            v-img(src="/revup2020.png")
      //- CfP
      //- .v-row.section-header(id="cfp" cols="12")
      //-   div.mb-4
      //-     div.ml-2.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani セッション公募受付中
      //-   v-row.mb-6(cols="12")
      //-     v-col.mx-auto.body-2(cols="12" md="8")
      //-       v-row.py-2.about-list(cols="12")
      //-         v-col.font-weight-bold(cols="12" md="3")
      //-           | セッション応募
      //-         v-col(cols="12" md="9")
      //-           a(href="https://forms.gle/GE2THuuDeCUAzGCj7" target="_blank") こちらのリンクから応募フォームにアクセスいただけます
      //- Time table
      v-row.section-header(id="timetable" cols="12")
        v-col(cols="12" lg="12" md="12")
          div.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani TIME TABLE
          div.text-subtitle-2.text-md-subtitle-2.section-header-text タイムテーブル
          p.mt-8
            | セッションへの参加登録はConnpassを利用しますので、視聴されたいセッションへの参加登録をお願いいたします。開始時刻前に配信URLをメールにてお知らせいたします。同時刻、複数セッションへの申込みも可能ですので、少しでも興味のあるセッションには参加登録をしておくことをおすすめいたします。
            //- ul.session-list.mt-4
            //-   li.case-study.mb-1 事例/APIセッション
            //-   li.tech-session.mb-1 テクニカルセッション
            //-   li.line-session.mb-1 LINE社によるセッション
          div
            timetable(
              :sessions="sessions"
            )
      //- Ask The Speaker
      v-row.section-header(id="ask" cols="12")
        div.mb-4
          div.ml-2.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani Ask The Speaker Room
          div.ml-2.text-subtitle-2.text-md-subtitle-2.section-header-text 登壇者への質問、コミュニケーションが行える部屋
          p.mt-8
            | 登壇者はセッション後、30分この部屋に待機しております。質問などある視聴者の方はお気軽に下記のZoom URLにお入りください。
        v-row.pb-14.mb-6(cols="12")
          v-col.mx-auto.body-2(cols="12" md="8")
            v-row.py-2.about-list(cols="12")
              v-col.font-weight-bold(cols="12" md="3")
                | Zoom URL（14:00開始)
              v-col(cols="12" md="9")
                | 終了いたしました、ご参加ありがとうございました。
      //- Speakers
      v-row.section-header(id="speakers" cols="12")
        div.mb-4
          div.ml-2.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani SPEAKERS
          div.ml-2.text-subtitle-2.text-md-subtitle-2.section-header-text 登壇者一覧
          speaker-list(
            :speakers="speakers"
          )
      //- Sponsors
      v-row.section-header(id="sponsors" cols="12")
        div
          div.ml-2.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani SPONSORS
          div.ml-2.text-subtitle-2.text-md-subtitle-2.section-header-text スポンサー
          sponsor-List(
            :sponsors="sponsors"
          )
    //- SHARE
    share-box(
      :shareUrl="url"
      :shareText="shareText"
    )
      //- Index contents end
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import consola from 'consola'
import { FlexMessage } from '@line/bot-sdk'
import { Context } from '@nuxt/types'
import HeadMixin from '~/mixins/HeadMixin'
import ConnpassEventMixin from '~/mixins/ConnpassEventMixin'
import LiffMixin from '~/mixins/LiffMixin'
import { HeadInfo, Speaker, EventSession } from '~/types'
import { appStateStore } from '~/store'
import { generateShareMessage } from '~/utils/messages/shareMessage'
import { MicroCmsAPI } from '~/plugins/microCmsApi'

@Component({
  components: {
    SpeakerList: () => import('@/components/SpeakerList.vue'),
    Timetable: () => import('@/components/Timetable.vue'),
    SponsorList: () => import('@/components/SponsorList.vue'),
    ShareBox: () => import('@/components/ShareBox.vue')
  }
})
export default class Index extends mixins(
  HeadMixin,
  ConnpassEventMixin,
  LiffMixin
) {
  speakers: Array<Speaker> = []
  sessions: Array<EventSession> = []

  public headInfo(): HeadInfo {
    return {}
  }

  get url(): string {
    return process.env.BASE_URL!
  }

  get shareText(): string {
    return 'LINE Developers Community REV UP 2021 はLINEのコミュニティが主催する国内最大のLINE関連カンファレンスです。各分野のエキスパートがLINE関連の技術や事例、知見について惜しみなく発信する様々なセッションが今年も数多く行われます。'
  }

  async asyncData(context: Context) {
    consola.log('asyncData called!!')
    const api: MicroCmsAPI = context.app.$microCmsApi
    const speakers = await api.getSpeakers()
    consola.log('Speakers', speakers)
    const sessions = await api.getEventSessions()
    sessions.forEach(s => {
      if (s.applicantCount) {
        s.applicantsMessage = `${s.applicantCount}人`
      } else {
        s.applicantsMessage = ''
      }
    })
    consola.log('Sessions', sessions)
    const sponsors = await api.getSponsors()
    consola.log('Sponsors', sponsors)
    return {
      speakers,
      sessions,
      sponsors
    }
  }

  mounted() {
    // Scroll to page anchor
    const hash = this.$route.hash
    if (hash && hash.match(/^#.+$/)) {
      consola.log('Scroll to page anchor:', hash)
      this.$scrollTo(hash, 300)
    }
  }

  get isLiffInitialized() {
    consola.log('isLiffInitialized', appStateStore.liffInitialized)
    return appStateStore.liffInitialized
  }

  async showShareTargetPicker() {
    consola.log('showShareTargetPicker called')
    // メッセージ文言
    const message =
      'LINE Developers Community REV UP 2021 はLINEのコミュニティが主催する国内最大のLINE関連カンファレンスです。各分野のエキスパートがLINE関連の技術や事例、知見について惜しみなく発信する様々なセッションが今年も数多く行われます。'
    const shareMessage: FlexMessage = generateShareMessage(
      message,
      this.getPermanentLink()
    )
    await this.openShareTargetPicker(shareMessage)
  }
}
</script>

<style lang="stylus">
.promotion-moview
  text-align center
  position relative
  .deck_frame
    border: 0px
    background: padding-box rgba(0, 0, 0, 0.1)
    margin: 0px
    padding: 0px
    border-radius: 6px
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px
  .viewer_size
    width: calc(80px + 66vw)
    height: calc((80px + 66vw) / 1.77777777778)
.main-picture
  background linear-gradient(247.38deg, #00B900 0%, #00AEB9 100%)
  font-family 'Biryani', sans-serif !important
  letter-spacing .1em
  .sponsored
    background-color #fff
    color: #4CAF4F
    line-height 1
    padding 10px
    font-family: 'Biryani', sans-serif !important;
  .year
    font-size 36px
  .day
    font-size 64px
  .place
    font-size 24px
.notification
  background-color #333333
.section-header
  margin-top: -70px
  padding-top: 80px
  padding-bottom: 10px
.section-header-text
  color #00B900
.section-header-text.font-biryani
  font-family: 'Biryani', sans-serif !important;
.font-biryani
  font-family: 'Biryani', sans-serif !important;
.introduction
  position relative
  font-family: 'Biryani', sans-serif !important;
.introduction-title.font-biryani
  text-align center
  font-family 'Biryani', sans-serif !important
  color #00B900
.color-green
  color #00B900
.about-list
  border-bottom 1px solid #ccc
.map-photo
  max-width: 100%;
.map-unit
  opacity: .3;
#accessmap iframe
  max-width 100%
@-webkit-keyframes scroll {
  0% {
    background-position: left center
  }
  100% {
    background-position: -1838px center
  }
}

@keyframes scroll {
  0% {
    background-position: left center
  }
  100% {
    background-position: -1838px center
  }
}

@-webkit-keyframes scroll-sp {
  0% {
    background-position: left center
  }
  100% {
    background-position: -250vw center
  }
}

@keyframes scroll-sp {
  0% {
    background-position: left center
  }
  100% {
    background-position: -250vw center
  }
}
.share
  position relative
  background-color #F0FBF5
  overflow hidden
.share-title
  position: absolute;
  color rgba(0,153,73,.1)
  font-size 194px
  font-family 'Biryani', sans-serif !important
  top 60%
  left 50%
  transform translate(-50%, -50%)
  @media (max-width: 960px) {
    font-size 97px
  }
.mdi-facebook
  color #3b5998 !important
.mdi-twitter
  color #55ACEE !important
.icon-hatenabookmark
  color #008fde
ul.session-list
  list-style: none
li.case-study:before
  content: "■ "
  color: #673BB7
li.tech-session:before
  content: "■ "
  color: #2296F3
li.line-session:before
  content: "■ "
  color: #4CAF4F
</style>
