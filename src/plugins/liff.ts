import {
  LiffContextData,
  LIFFErrorObject,
  scanCodeResult,
  Friendship
} from 'liff-type'
import { Profile, FlexMessage } from '@line/bot-sdk'
import consola from 'consola'
import { LiffError } from '@/types'

export function initLiff(pageLiffId: string): Promise<boolean> {
  return new Promise(resolve => {
    window.liff
      .init({ liffId: pageLiffId })
      .then(() => {
        consola.log('LIFF initialized!')
        resolve(true)
      })
      .catch((error: LIFFErrorObject) => {
        consola.warn('LIFF initialization failed', error)
        resolve(false)
      })
  })
}

export function getLineProfile(): Promise<Profile> {
  return new Promise(resolve => {
    window.liff
      .getProfile()
      .then((profile: Profile) => {
        consola.log('liff.getProfile success!')
        resolve(profile)
      })
      .catch((error: LIFFErrorObject) => {
        consola.warn('liff.getProfile failed', error)
        throw new LiffError(error.code, error.message)
      })
  })
}

export function getFriendship(): Promise<boolean> {
  return new Promise(resolve => {
    window.liff
      .getFriendship()
      .then((friendship: Friendship) => {
        consola.log('liff.getFriendship success!', friendship)
        resolve(friendship.friendFlag)
      })
      .catch((error: LIFFErrorObject) => {
        consola.warn('liff.getFriendship failed', error)
        throw new LiffError(error.code, error.message)
      })
  })
}

export function getOS(): string {
  return window.liff.getOS()
}

export function getLiffLanguage(): string {
  return window.liff.getLanguage()
}

export function getLiffVersion(): string {
  return window.liff.getVersion()
}

export function isInClient(): boolean {
  return window.liff.isInClient()
}

export function isLineLoggedIn(): boolean {
  return window.liff.isLoggedIn()
}

export function isLiffApiAvailable(apiName: string): boolean {
  return window.liff.isApiAvailable(apiName)
}

export function getLiffAccessToken(): string {
  return window.liff.getAccessToken()
}

export function getLiffContext(): LiffContextData {
  return window.liff.getContext()
}

export function liffLogin(redirectUri?: string) {
  consola.log('Redirect URL after login', redirectUri)
  return window.liff.login({
    redirectUri
  })
}

export function liffLogout() {
  return window.liff.logout()
}

export function getPermanentLink(): string {
  return window.liff.permanentLink.createUrl()
}

export function openWindow(url: string, external?: boolean) {
  return window.liff.openWindow({
    url,
    external
  })
}

export function sendMessage() {
  window.liff
    .sendMessages([
      {
        type: 'text',
        text: 'Hello, World!'
      }
    ])
    .then(() => {
      consola.log('message sent')
    })
    .catch((error: LIFFErrorObject) => {
      consola.log('error', error)
    })
}

export function scanCode(): Promise<string | null> {
  return new Promise(resolve => {
    if (window.liff.scanCode) {
      window.liff.scanCode().then((value: scanCodeResult) => {
        consola.log('Scanned text', value)
        resolve(value.value)
      })
    } else {
      resolve(null)
    }
  })
}

export function shareTargetPicker(message: FlexMessage): Promise<boolean> {
  return new Promise(resolve => {
    window.liff
      .shareTargetPicker([message])
      .then((res: any) => {
        let result = false
        const [majorVer, minorVer] = (window.liff.getLineVersion() || '').split(
          '.'
        )
        const lineVersionString = `LINE APP VERSION: ${majorVer}.${minorVer}`
        if (res) {
          // succeeded in sending a message through TargetPicker
          consola.log(`[${res.status}] Message sent!`, lineVersionString)
          result = true
        } else if (parseInt(majorVer) === 10 && parseInt(minorVer) < 11) {
          // LINE 10.3.0 - 10.10.0
          // Old LINE will access here regardless of user's action
          console.log(
            'TargetPicker was opened at least. Whether succeeded to send message is unclear',
            lineVersionString
          )
          result = true
        } else {
          // LINE 10.11.0 -
          // sending message canceled
          console.log('TargetPicker was closed!', lineVersionString)
        }
        resolve(result)
      })
      .catch((error: LIFFErrorObject) => {
        consola.warn('Failed to launch ShareTargetPicker', error)
        resolve(false)
      })
  })
}
