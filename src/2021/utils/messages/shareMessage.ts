import {
  FlexMessage,
  FlexBubble,
  FlexBox,
  FlexText,
  FlexButton,
  URIAction
} from '@line/bot-sdk'
import * as lodash from 'lodash'
const _ = lodash

function generateShareMessage(message: string, url?: string): FlexMessage {
  if (!url) {
    url = process.env.BASE_URL
  }
  const bubble = _.cloneDeep(messageBubble)
  const box: FlexBox = bubble.body!.contents[1] as FlexBox
  const text: FlexText = box.contents[0] as FlexText
  text.text! = message
  const button = bubble.footer!.contents[0] as FlexButton
  const action = button.action as URIAction
  action.uri = url!
  return {
    type: 'flex',
    altText: message,
    contents: bubble
  }
}

const messageBubble: FlexBubble = {
  type: 'bubble',
  hero: {
    type: 'image',
    url:
      'https://images.microcms-assets.io/protected/ap-northeast-1:6183ed17-e50b-4bde-828c-32380c032323/service/lpfrevup2020/media/REVUP_LOGO_640x640.png',
    size: 'full',
    aspectRatio: '1:1',
    aspectMode: 'cover'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'LINE Developers Community REV UP 2021',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'text',
            text:
              'LINE Developers Community REV UP 2021（以下、「REV UP」） はLINEのコミュニティが主催する国内最大のLINE関連カンファレンスです。各分野のエキスパートがLINE関連の技術や事例、知見について惜しみなく発信する様々なセッションが今年も数多く行われます。2021年のテーマは「Get Connected with LINE／LINEを介して実現される様々な繋がりや連携」。',
            size: 'md',
            wrap: true
          }
        ]
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'button',
        style: 'primary',
        height: 'sm',
        action: {
          type: 'uri',
          label: 'サイトを見る',
          uri: `https://liff.line.me/${process.env.LIFF_ID!}`
        }
      },
      {
        type: 'spacer',
        size: 'sm'
      }
    ],
    flex: 0
  }
}

export { generateShareMessage }
