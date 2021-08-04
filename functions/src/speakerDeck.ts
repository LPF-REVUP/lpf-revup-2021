import axios from 'axios'
import { APIGatewayProxyEvent } from 'aws-lambda'

export async function handler(event: APIGatewayProxyEvent) {
  const axiosResponse = await axios.get('https://speakerdeck.com/oembed.json', {
    params: {
      url: event.queryStringParameters!.url
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(axiosResponse.data)
  }
}
