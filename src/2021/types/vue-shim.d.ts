// declare module '*.vue' {
//   import Vue from 'vue'
//   export default Vue
// }

import { Vue } from 'nuxt-property-decorator'
import { ConnpassAPI } from '~/plugins/connpassApi';

declare module 'vue/types/vue' {
  interface Vue {
    $ga: any,
    $connpassApi: ConnpassAPI
  }
}
