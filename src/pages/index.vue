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
              span.year 2020.
              span.day 11.14
              span.week [SAT]
            .place
              | @ ONLINE
    //- お知らせ用エリア
    //- .pa-2.notification
    //-   v-container.py-0
    //-     v-layout(justify-center)
    //-       div
    //-         a(href="https://book.mynavi.jp/ec/products/detail/id=117310" target="_blank") LINE API 実践ガイド
    //-         | が50名様に当たる
    //-         a(href="https://twitter.com/linedc_jp/status/1323918060839866369" target="_blank") Twitterキャンペーン
    //-         | 実施中です！
    //- Index contents start
    .introduction.font-biryani(id="introduction")
      v-container
        v-row(cols="12")
          v-col.py-15.mb-4(col="12")
            h2.mb-8.text-md-h3.text-sm-h4.introduction-title.font-biryani
              | LPF REV UP 2020
            h3.text-center.color-green
              | 開発者と共に。ユーザーを支えるLINEプラットフォーム
        v-row(cols="12")
          v-col.mx-auto(cols="12" md="6")
            p.body-2
              | LPF REV UP 2020は普段LINEのAPIに関する勉強会や情報交換を行っている東京、関西、九州のコミュニティが合同で主催するカンファレンスです。2020のテーマは「開発者と共に。ユーザーを支えるLINEプラットフォーム」。
            p.body-2
              | LINEの認定するLINE API Expertやテクノロジーパートナーを中心に、ミニアプリ、Messaging API、LINE Pay APIなど技術に関するセッションからwithコロナ時代に生まれている新しい体験やビジネスについてのセッションまで、幅広い内容のセッションをご用意しています。
              br
              | 視聴はオンラインです。是非お気軽にご参加下さい。
    v-container
      //- About
      .section-header(id="about")
        div.mb-4()
          div.ml-2.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani ABOUT
          div.ml-2.text-subtitle-2.text-md-subtitle-2.section-header-text LFP REV UP 2020 について
        v-row.mb-6(cols="12")
          v-col.mx-auto.body-2(cols="12" md="8")
            v-row.py-2.about-list(cols="12")
              v-col.font-weight-bold(cols="12" md="3")
                | 開催日
              v-col(cols="12" md="9")
                | 11月14日(土)
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
      //- Speakers
      v-row.section-header(id="speakers" cols="12")
        div.mb-4
          div.ml-2.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani SPEAKERS
          div.ml-2.text-subtitle-2.text-md-subtitle-2.section-header-text 登壇者一覧
          speaker-list(
            :speakers="speakers"
          )
      //- Time table
      v-row.section-header(id="timetable" cols="12")
        v-col(cols="12" lg="8" md="6")
          div.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani TIME TABLE
          div.text-subtitle-2.text-md-subtitle-2.section-header-text タイムテーブル
          p.mt-8
            | セッションは東京、関西、九州の3トラック同時開催で行われます。
            br
            | セッションへの参加登録はConnpassを利用しますので、視聴されたいセッションへの参加登録をお願いいたします。開始時刻前に配信URLをメールにてお知らせいたします。同時刻、複数セッションへの申込みも可能ですので、少しでも興味のあるセッションには参加登録をしておくことをおすすめいたします。
            ul.session-list.mt-4
              li.case-study.mb-1 事例/APIセッション
              li.tech-session.mb-1 テクニカルセッション
              li.line-session.mb-1 LINE社によるセッション
        v-col(cols="12" lg="4" md="6")
          v-img(src="/timetable__map.svg")
        div
          timetable(
            :sessions="sessions"
          )
      //- AccessMap
      .section-header(id="accessmap")
        div
          div.ml-2.text-h6.text-md-h3.font-weight-black.section-header-text.text-left.font-biryani ACCESS MAP
          div.ml-2.text-subtitle-2.text-md-subtitle-2.section-header-text アクセスマップ
        v-row(cols="12").map-unit
          v-col(cols="12" md="4")
            h3.text-h6.font-weight-bold.mb-3
              v-icon.ma-2(color="#3cb371") mdi-map-marker
              | 東京会場
            img.map-photo(
              src="@/assets/map-tokyo.png"
            )
          v-col(cols="12" md="4")
            h3.text-h6.font-weight-bold.mb-3
              v-icon.ma-2(color="#3cb371") mdi-map-marker
              | 大阪会場
            img.map-photo(
              src="@/assets/map-osaka.png"
            )
          v-col(cols="12" md="4")
            h3.text-h6.font-weight-bold.mb-3
              v-icon.ma-2(color="#3cb371") mdi-map-marker
              | 福岡会場
            img.map-photo(
              src="@/assets/map-fukuoka.png"
            )
        p
          b ※ オンラインに変更
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
    return 'LPF REV UP 2020は普段LINEのAPIに関する勉強会や情報交換を行っている東京、関西、九州のコミュニティが合同で主催するカンファレンスです。2020のテーマは「開発者と共に。ユーザーを支えるLINEプラットフォーム」。'
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
      'LPF REV UP 2020は普段LINEのAPIに関する勉強会や情報交換を行っている東京、関西、九州のコミュニティが合同で主催するカンファレンスです。2020のテーマは「開発者と共に。ユーザーを支えるLINEプラットフォーム」。'
    const shareMessage: FlexMessage = generateShareMessage(
      message,
      this.getPermanentLink()
    )
    await this.openShareTargetPicker(shareMessage)
  }
}
</script>

<style lang="stylus">
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
  background-color #F0F0F0
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
  background-color: #F0FBF5
  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 200px;
    overflow: hidden;
    z-index: 0;
    top: 50%;
    transform: translateY(-50%);
    animation: scroll 30s linear 0s infinite;
    background: url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%222484%22%20height%3D%22186%22%20viewBox%3D%220%200%202484%20186%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M215.44%20144.96V181.92H106V0H149.2V144.96H215.44Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M337.161%200C360.201%200%20377.481%205.12001%20389.001%2015.36C400.681%2025.44%20406.521%2040.56%20406.521%2060.72C406.521%2080.4%20400.681%2095.36%20389.001%20105.6C377.481%20115.84%20360.201%20120.96%20337.161%20120.96H306.681V181.92H263.481V0H337.161ZM337.161%2084.48C345.801%2084.48%20352.201%2082.56%20356.361%2078.72C360.521%2074.88%20362.681%2068.88%20362.841%2060.72C362.841%2052.24%20360.761%2046.08%20356.601%2042.24C352.441%2038.4%20345.961%2036.48%20337.161%2036.48H306.681V84.48H337.161Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M492.991%2036.96V76.8H558.031V113.76H492.991V181.92H449.791V0H570.031V36.96H492.991Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M753.347%20116.16H733.188V181.92H689.987V0H763.667C809.907%200%20833.027%2019.44%20833.027%2058.32C833.027%2086%20820.947%20103.76%20796.787%20111.6L840.227%20181.92H792.227L753.347%20116.16ZM733.188%2079.68H763.667C780.787%2079.68%20789.347%2072.56%20789.347%2058.32C789.347%2050.8%20787.267%2045.28%20783.107%2041.76C778.947%2038.24%20772.467%2036.48%20763.667%2036.48H733.188V79.68Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M1008.52%20147.36V181.92H887.078V0H1007.32V34.56H930.278V73.2H995.318V107.76H930.278V147.36H1008.52Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M1231.59%200L1167.99%20184.08H1113.27L1049.43%200H1093.83L1140.63%20139.44L1187.19%200H1231.59Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M1428.41%20186C1402.01%20186%201382.17%20179.44%201368.89%20166.32C1355.77%20153.2%201349.21%20134.56%201349.21%20110.4V0H1392.41V110.4C1392.41%20123.36%201395.37%20133.12%201401.29%20139.68C1407.37%20146.24%201416.41%20149.52%201428.41%20149.52C1440.41%20149.52%201449.37%20146.24%201455.29%20139.68C1461.37%20133.12%201464.41%20123.36%201464.41%20110.4V0H1507.61V110.4C1507.61%20134.56%201501.05%20153.2%201487.93%20166.32C1474.81%20179.44%201454.97%20186%201428.41%20186Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M1638.96%200C1662%200%201679.28%205.12001%201690.8%2015.36C1702.48%2025.44%201708.32%2040.56%201708.32%2060.72C1708.32%2080.4%201702.48%2095.36%201690.8%20105.6C1679.28%20115.84%201662%20120.96%201638.96%20120.96H1608.48V181.92H1565.28V0H1638.96ZM1638.96%2084.48C1647.6%2084.48%201654%2082.56%201658.16%2078.72C1662.32%2074.88%201664.48%2068.88%201664.64%2060.72C1664.64%2052.24%201662.56%2046.08%201658.4%2042.24C1654.24%2038.4%201647.76%2036.48%201638.96%2036.48H1608.48V84.48H1638.96Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M1814.41%20144.96C1834.09%20128.32%201848.17%20116.24%201856.65%20108.72C1865.13%20101.04%201871.53%2094.32%201875.85%2088.56C1880.17%2082.64%201882.33%2077.12%201882.33%2072C1882.33%2065.76%201880.33%2061.12%201876.33%2058.08C1872.33%2054.88%201866.89%2053.28%201860.01%2053.28C1846.73%2053.28%201833.53%2056.56%201820.41%2063.12V25.68C1828.25%2022.32%201836.09%2020%201843.93%2018.72C1851.77%2017.44%201860.25%2016.8%201869.37%2016.8C1885.85%2016.8%201899.21%2021.2%201909.45%2030C1919.85%2038.8%201925.05%2051.36%201925.05%2067.68C1925.05%2076.96%201923.21%2085.44%201919.53%2093.12C1915.85%20100.64%201910.09%20108.32%201902.25%20116.16C1894.41%20123.84%201883.29%20133.44%201868.89%20144.96H1929.85V181.92H1814.41V144.96Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M2021.48%20186C2001%20186%201985.96%20179.44%201976.36%20166.32C1966.76%20153.04%201961.96%20131.36%201961.96%20101.28C1961.96%2071.84%201966.76%2050.4%201976.36%2036.96C1986.12%2023.52%202001.16%2016.8%202021.48%2016.8C2041.16%2016.8%202055.96%2023.6%202065.88%2037.2C2075.96%2050.8%202081%2072.16%202081%20101.28C2081%20131.04%202076.04%20152.64%202066.12%20166.08C2056.2%20179.36%202041.32%20186%202021.48%20186ZM2021.48%20149.52C2025.16%20149.52%202028.2%20148.24%202030.6%20145.68C2033%20142.96%202034.84%20138.08%202036.12%20131.04C2037.56%20124%202038.28%20114.08%202038.28%20101.28C2038.28%2083.04%202036.84%2070.48%202033.96%2063.6C2031.24%2056.72%202027.08%2053.28%202021.48%2053.28C2017.48%2053.28%202014.28%2054.64%202011.88%2057.36C2009.48%2060.08%202007.64%2064.88%202006.36%2071.76C2005.24%2078.64%202004.68%2088.48%202004.68%20101.28C2004.68%20114.24%202005.24%20124.24%202006.36%20131.28C2007.64%20138.16%202009.48%20142.96%202011.88%20145.68C2014.28%20148.24%202017.48%20149.52%202021.48%20149.52Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M2116.71%20144.96C2136.39%20128.32%202150.47%20116.24%202158.95%20108.72C2167.43%20101.04%202173.83%2094.32%202178.15%2088.56C2182.47%2082.64%202184.63%2077.12%202184.63%2072C2184.63%2065.76%202182.63%2061.12%202178.63%2058.08C2174.63%2054.88%202169.19%2053.28%202162.31%2053.28C2149.03%2053.28%202135.83%2056.56%202122.71%2063.12V25.68C2130.55%2022.32%202138.39%2020%202146.23%2018.72C2154.07%2017.44%202162.55%2016.8%202171.67%2016.8C2188.15%2016.8%202201.51%2021.2%202211.75%2030C2222.15%2038.8%202227.35%2051.36%202227.35%2067.68C2227.35%2076.96%202225.51%2085.44%202221.83%2093.12C2218.15%20100.64%202212.39%20108.32%202204.55%20116.16C2196.71%20123.84%202185.59%20133.44%202171.19%20144.96H2232.15V181.92H2116.71V144.96Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3Cpath%20d%3D%22M2323.79%20186C2303.31%20186%202288.27%20179.44%202278.67%20166.32C2269.07%20153.04%202264.27%20131.36%202264.27%20101.28C2264.27%2071.84%202269.07%2050.4%202278.67%2036.96C2288.43%2023.52%202303.47%2016.8%202323.79%2016.8C2343.47%2016.8%202358.27%2023.6%202368.19%2037.2C2378.27%2050.8%202383.31%2072.16%202383.31%20101.28C2383.31%20131.04%202378.35%20152.64%202368.43%20166.08C2358.51%20179.36%202343.63%20186%202323.79%20186ZM2323.79%20149.52C2327.47%20149.52%202330.51%20148.24%202332.91%20145.68C2335.31%20142.96%202337.15%20138.08%202338.43%20131.04C2339.87%20124%202340.59%20114.08%202340.59%20101.28C2340.59%2083.04%202339.15%2070.48%202336.27%2063.6C2333.55%2056.72%202329.39%2053.28%202323.79%2053.28C2319.79%2053.28%202316.59%2054.64%202314.19%2057.36C2311.79%2060.08%202309.95%2064.88%202308.67%2071.76C2307.55%2078.64%202306.99%2088.48%202306.99%20101.28C2306.99%20114.24%202307.55%20124.24%202308.67%20131.28C2309.95%20138.16%202311.79%20142.96%202314.19%20145.68C2316.59%20148.24%202319.79%20149.52%202323.79%20149.52Z%22%20fill%3D%22%23009949%22%20fill-opacity%3D%220.08%22%2F%3E%3C%2Fsvg%3E') repeat-x left center;
  }
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
