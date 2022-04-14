import Icon from '@mdi/react'
import React from 'react'

import { mdiComment } from '@mdi/js'
import moment from 'moment'
import 'moment/locale/pt-br'

import { LabelGames, Tag } from 'components/atoms'

import styles from './styles.module.scss'

export interface IProps {
  title: string
  description: string
  author: string
  createdAt: string
  comments: number
  tags: string[]
  type: string
  image: string
  id: string
}

interface IHomeNewsProps {
  news: IProps[]
}

const HomeNews = ({ news }: IHomeNewsProps): JSX.Element => {
  function convertTime(date: string): string {
    const savedMoment = moment(date).startOf('day').fromNow()

    if (savedMoment === 'há 2 dias') return 'Ontem'
    if (savedMoment === 'há 3 dias') return 'Anteontem'

    return savedMoment
  }

  return (
    <>
      {news.map(eachNews => (
        <div className={styles.container}>
          <div className={styles.img_container}>
            <img src={eachNews.image} alt="" />
            <div className={styles.label_games}>
              <LabelGames type={eachNews.type} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.upper_content}>
              <div className={styles.title}>
                <h3>{eachNews.title}</h3>
              </div>
              <div className={styles.description}>
                <p>{eachNews.description}</p>
              </div>
            </div>
            <div className={styles.bottom_content}>
              <div className={styles.details}>
                {eachNews.tags.map(eachTag => (
                  <Tag type={eachTag} />
                ))}
                <span>
                  Por <strong>{eachNews.author}</strong>{' '}
                  {convertTime(eachNews.createdAt)}
                </span>
              </div>
              <p>{eachNews.comments}</p>
              <Icon path={mdiComment} size={0.5} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export { HomeNews }
