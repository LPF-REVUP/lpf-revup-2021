<template lang="pug">
  v-container(fluid)
    .share.py-16
      .container.py-8
        span.share-title SHARE!
        v-row.ma-5.justify-center
          //- Facebook
          .mr-6
            a.text-decoration-none(:href="facebookShareUrl" rel="nofollow" target="_blank")
              v-icon(x-large) mdi-facebook
          //- Twitter
          .mr-6
            a.text-decoration-none(:href="twitterShareUrl" rel="nofollow" target="_blank")
              v-icon(x-large) mdi-twitter
          //- Hatena bookmark
          .mr-6
            a.text-decoration-none(:href="hatenaShareUrl" rel="nofollow" target="_blank")
              v-icon(x-large).icon-hatenabookmark icon-hatenabookmark
          //- Share Target Picker
          .mr-6
            v-btn.text-decoration-none(
              fab depressed
              @click="showShareTargetPicker()"
              small
            )
              v-icon(large).icon-line icon-line
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import consola from 'consola'
import { FlexMessage } from '@line/bot-sdk'
import LiffMixin from '~/mixins/LiffMixin'
import { generateShareMessage } from '~/utils/messages/shareMessage'
import '@/assets/icomoon/style.css'

@Component
export default class ShareBoxComponent extends mixins(LiffMixin) {
  @Prop({ type: String, required: true }) readonly shareUrl!: string
  @Prop({ type: String, required: true }) readonly shareText!: string

  get facebookShareUrl() {
    return `http://www.facebook.com/share.php?u=${this.shareUrl}`
  }

  get twitterShareUrl() {
    const twitterId = process.env.TWITTER_ID!
    return `https://twitter.com/share?url=${this.shareUrl}&via=${twitterId}&related=${twitterId}&hashtags=linedc&text=${this.shareText}`
  }

  get hatenaShareUrl() {
    return `http://b.hatena.ne.jp/add?mode=confirm&url=${this.shareUrl}&title=${this.shareText}`
  }

  async showShareTargetPicker() {
    consola.log('showShareTargetPicker called')
    // メッセージ文言
    const message = this.shareText
    const shareMessage: FlexMessage = generateShareMessage(
      message,
      this.getPermanentLink()
    )
    await this.openShareTargetPicker(shareMessage)
  }
}
</script>

<style lang="stylus">
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
.icon-line
  &::before
    color #00c300
.icon-hatenabookmark
  &::before
    color #00A4DE
</style>
