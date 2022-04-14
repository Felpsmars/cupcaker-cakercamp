/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react'

import moment from 'moment'
import 'moment/locale/pt-br'

import { Stories, Footer, Header } from 'components/atoms'
import { HomeNews, Carousel, IProps } from 'components/molecules'

import { apiResponse } from '../../services'
import styles from './styles.module.scss'

moment.locale('pt-br')

const Home = (): JSX.Element => {
  const [newsData, setNewsData] = useState<IProps[]>([])
  const [storiesData, setStoriesData] = useState<IProps[]>([])

  const getApiNews = useCallback(async () => {
    await apiResponse.getNews().then(response => {
      setNewsData(response.data)
    })
  }, [])

  const getApiStories = useCallback(async () => {
    await apiResponse.getStories().then(response => {
      setStoriesData(response.data)
    })
  }, [])

  useEffect(() => {
    getApiNews()
    getApiStories()
  }, [])

  newsData.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0
  })

  storiesData.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0
  })

  return (
    <main>
      <Header />
      <Carousel news={newsData.slice(0, 5)} />
      <div className={styles.content}>
        <Stories stories={storiesData.slice(0, 7)} />
        <HomeNews news={newsData} />
      </div>
      <Footer />
    </main>
  )
}

export default Home
