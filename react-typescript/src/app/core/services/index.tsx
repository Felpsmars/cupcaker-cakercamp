import { AxiosResponse } from 'axios'

import { http } from 'interfaces/http'

const NEWS_URL = '/v1/news'
const STORIES_URL = '/v1/stories'

const getNews = async (): Promise<AxiosResponse> => {
  return http.get(
    NEWS_URL || 'https://6245b0fa2cfed1881725c1cf.mockapi.io/api/v1/news'
  )
}

const getStories = async (): Promise<AxiosResponse> => {
  return http.get(
    STORIES_URL || 'https://6245b0fa2cfed1881725c1cf.mockapi.io/api/v1/stories'
  )
}

const apiResponse = {
  getNews,
  getStories,
}

export { apiResponse }
