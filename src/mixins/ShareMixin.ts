import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ShareMixin extends Vue {
  get url(): string {
    return ''
  }

  get shareText(): string {
    return ''
  }

  get facebookShareUrl() {
    return `http://www.facebook.com/share.php?u=${this.url}`
  }

  get twitterShareUrl() {
    return `https://twitter.com/share?url=${this.url}&via=linedc_jp&related=linedc_jp&hashtags=linedc&text=${this.shareText}`
  }

  get hatenaShareUrl() {
    return `http://b.hatena.ne.jp/add?mode=confirm&url=${this.url}&title=${this.shareText}`
  }
}
