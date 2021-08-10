import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppState from '~/store/appState'

// eslint-disable-next-line import/no-mutable-exports
let appStateStore: AppState

function initializeStores(store: Store<any>): void {
  appStateStore = getModule(AppState, store)
}

export { initializeStores, appStateStore }
