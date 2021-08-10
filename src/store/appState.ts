import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Profile } from '@line/bot-sdk'
import consola from 'consola'

@Module({
  name: 'appState',
  stateFactory: true,
  namespaced: true
})
export default class AppState extends VuexModule {
  lineProfile: Profile | null = null
  liffInitialized: boolean = false
  errorMessage: string = ''

  @Mutation
  setLiffInitialized(flag: boolean) {
    this.liffInitialized = flag
  }

  @Mutation
  setLineProfile(profile: Profile) {
    consola.log('setLineProfile called', profile)
    this.lineProfile = profile
  }

  @Action
  initializeLiffCompleted() {
    this.setLiffInitialized(true)
  }

  @Action
  loggedInByLineLogin(profile: Profile) {
    this.setLineProfile(profile)
  }
}
