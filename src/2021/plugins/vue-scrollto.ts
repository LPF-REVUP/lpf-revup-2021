import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function(ctx: any, inject: any) {
  inject('scrollTo', VueScrollTo.scrollTo)
}
