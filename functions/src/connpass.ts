import axios from 'axios'
import qs from 'qs'
import { APIGatewayProxyEvent } from 'aws-lambda'

export async function handler(event: APIGatewayProxyEvent) {
  const axiosResponse = await axios.get('https://connpass.com/api/v1/event', {
    params: event.queryStringParameters,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" })
  })

  return {
    statusCode: 200,
    body: JSON.stringify(axiosResponse.data)
  }
}
