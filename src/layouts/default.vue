<template lang="pug">
  v-app(id="inspire")
    v-navigation-drawer.hidden-md-and-up(
      v-model="drawer"
      right
      temporary
      app
    )
      v-list(dense)
        template(v-for="item in menuItems")
          v-list-item(
            :key="item.title"
            :to="item.to"
            :aria-label="item.title"
          )
            v-list-item-action
              v-icon.c-green {{ item.icon }}
            v-list-item-content.font-biryani
              | {{ item.title }}
    v-app-bar(fixed app color="white" elevate-on-scroll)
      v-toolbar-title.d-block.black--text
        nuxt-link(to="/" :aria-label="title")
          img(src="@/assets/h__logo.svg")
      v-spacer
      v-btn.black--text.hidden-sm-and-down.font-biryani(
        v-for="item in menuItems"
        :key="item.title"
        text small
        :to="item.to"
        :aria-label="item.title"
      ) {{ item.title }}
      //- TODO Change repository URL
      v-btn.ml-2(
        href="https://github.com/LPF-REVUP/lpf-revup-2020"
        target="_blank"
        icon
        aria-label="Repository"
      )
        v-icon(large) mdi-github
      img.d-md-none.c-green(
        src="@/assets/h__login--sp.svg"
        width="30"
        v-if="!profile"
        @click="loginWithLineLogin()"
        tile dark color="primary"
        aria-label="LINE Login"
      )
      div.ml-2.d-none.d-md-block.h__login(
        v-if="!profile"
        @click="loginWithLineLogin()"
        aria-label="LINE Login"
      )
      v-btn.ml-2.mr-2(
        v-if="profile"
        fab small dark color="primary"
        @click="openFriendshipDialg()"
        aria-label="Check bot friendship"
      )
        v-avatar
          v-img(
            :src="profile.pictureUrl"
            :alt="profile.displayName"
          )
      v-app-bar-nav-icon.hidden-md-and-up(
        color="info"
        @click.stop="drawer = !drawer"
        aria-label="Menu"
      )
    v-main
      //- show Friendship with bot dialog
      v-dialog(
        v-model="showMyPageDialog"
        max-width="512"
      )
        v-card
          v-card-title.headline.font-weight-bold イベント公式アカウントとの友だち関係
          v-card-title
            div.text-body-1(v-if="hasFriendship === false")
              p イベントに関するお問い合わせは公式アカウントでも行います。よろしければ友だち追加をお願いいたします。
          v-card-actions
            v-spacer
            div(v-if="hasFriendship === false")
              v-btn(
                color="accent"
                rounded
                @click="openBeFriendWithBotWindow()"
                aria-label="友だち追加"
              )
                v-icon(left dark) mdi-close-octagon
                | 友だち追加する
            div(v-else)
              v-btn(
                color="primary"
                rounded
                depressed
                aria-label="友だち登録済み"
              )
                v-icon(left dark) mdi-checkbox-marked-circle
                | 友だち登録済みです
            v-spacer
          v-card-actions
            v-spacer
            v-btn(
              text large
              color="primary"
              @click="showMyPageDialog = false"
              aria-label="閉じる"
            )
              | 閉じる
      nuxt
    v-footer(
      dark
      padless
    )
      v-card.flex(flat tile)
        v-card-text.footer-link-area.text-center
          v-btn.text-decoration-underline.footer-button.white--text(
            text small aria-label="個人情報保護方針"
            to="/privacy"
          )
            | 個人情報保護方針
        v-card-text.copylight.text-center.white--text &copy; {{title}}
</template>

<script lang="ts">
import { Component, Watch, mixins } from 'nuxt-property-decorator'
import consola from 'consola'
import { Profile } from '@line/bot-sdk'
import { appStateStore } from '~/store'
import LiffMixin from '~/mixins/LiffMixin'
import { AppMenuItem } from '~/types'

@Component({})
export default class extends mixins(LiffMixin) {
  title: string = 'LPF REV UP 2020'
  menuItems: Array<AppMenuItem> = [
    { title: 'ABOUT', icon: 'mdi-information', to: '/#about' },
    { title: 'SPEAKERS', icon: 'mdi-account-group', to: '/#speakers' },
    { title: 'TIME TABLE', icon: 'mdi-table-clock', to: '/#timetable' },
    { title: 'ACCESS MAP', icon: 'mdi-map-legend', to: '/#accessmap' },
    { title: 'SPONSORS', icon: 'mdi-handshake', to: '/#sponsors' }
  ]

  drawer: boolean = false

  showMyPageDialog: boolean = false
  hasFriendship: boolean = false
  protected profile: Profile | null = appStateStore.lineProfile

  get lineProfile(): Profile | null {
    consola.log('getLineProfile called', appStateStore.lineProfile)
    return appStateStore.lineProfile
  }

  /**
   * LINE ログイン状態を監視する
   * ログイン状態であればヘッダーにあるログインボタンを変更する
   */
  @Watch('lineProfile')
  watchLineProfile(lineProfile: Profile) {
    return (this.profile = lineProfile)
  }

  async mounted() {
    // LIFF login
    this.initVconsole()
    await this.initializeLiff()
    this.showLiffInfo()
    await this.loadLineProfile()
    consola.log(
      'mounted in layouts/default.vue',
      await appStateStore.lineProfile
    )
  }

  async loginWithLineLogin() {
    consola.log('loginWithLineLogin called')
    if (!appStateStore.lineProfile) {
      consola.log('lineProfile is not found in appStateStore')
      await this.loginWithLiff()
    } else {
      consola.log('User is logged in!!', appStateStore.lineProfile.displayName)
    }
  }

  async openFriendshipDialg(): Promise<void> {
    this.hasFriendship = await this.hasFriendshipWithBot()
    consola.log('friendship', this.hasFriendship)
    this.showMyPageDialog = true
  }

  openBeFriendWithBotWindow(): void {
    const url: string = process.env.BOT_FRIENDSHIP_URL || ''
    this.openWindow(url, true)
  }

  // vConsole を初期化する
  initVconsole() {
    consola.log('Initializing vConsole')
    if (
      // 開発モードか、vConsole を利用する設定になっている場合のみvConsole を起動する
      process.env.NODE_ENV !== 'development' &&
      process.env.USE_VCONSOLE !== 'true'
    ) {
      return
    }
    /* eslint no-unused-vars: 0 */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const vconsole = new window.VConsole({
      defaultPlugins: ['system', 'network', 'element', 'storage'],
      maxLogNumber: 1000,
      onReady() {
        consola.log('vConsole is ready.')
      },
      onClearLog() {
        consola.log('vConsole on clearLog')
      }
    })
  }
}
</script>

<style scoped lang="scss">
.c-green {
  color: #00c300 !important;
}
.v-btn {
  font-size: 14px;
  font-weight: normal;
}
.font-biryani {
  font-family: 'Biryani', sans-serif !important;
}
.h__login {
  cursor: pointer;
  width: 152px;
  height: 40px;
  background: url('/h__login@2x.png') no-repeat center;
  background-size: contain;
  &:hover {
    background-image: url('/h__login--hover@2x.png');
  }
  &:active {
    background-image: url('/h__login--press@2x.png');
  }
}
.registration-button {
  margin-left: 31px;
  background: rgba(0, 0, 0, 0.25);
}

.footer-link-area {
  height: 54px;
  background: rgba(0, 0, 0, 0.2);
}

.footer-button {
  margin-top: -3px;
}

.copylight {
  height: 52px;
  font-size: 14px;
  line-height: 22px;
  background: rgba(0, 0, 0, 0.32);
}
</style>
