import React from 'react'

import moment from 'moment'
import 'moment/locale/pt-br'

import { LabelGames, Tag } from 'components/atoms'

import styles from './styles.module.scss'

interface IProps {
  title: string
  description: string
  label: string
  stylesTag: string
  author: string
  srcIMG: string
  comments: string
  time: string
}

const HomeNews = (props: IProps): JSX.Element => {
  function convertTime(date: string): string {
    const savedMoment = moment(date).startOf('day').fromNow()

    if (savedMoment === 'há 2 dias') return 'Ontem'
    if (savedMoment === 'há 3 dias') return 'Anteontem'

    return savedMoment
  }

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={props.srcIMG} alt="" />
        <div className={styles.label_games}>
          <LabelGames />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.upper_content}>
          <div className={styles.title}>
            <h3>{props.title}</h3>
          </div>
          <div className={styles.description}>
            <p>{props.description}</p>
          </div>
        </div>
        <div className={styles.bottom_content}>
          <div className={styles.details}>
            <Tag label={props.label} stylesTag={props.stylesTag} />
            <span>
              Por <strong>{props.author}</strong> {convertTime(props.time)}
            </span>
          </div>
          <p>{props.comments}</p>
        </div>
      </div>
    </div>
  )
}

export { HomeNews }
