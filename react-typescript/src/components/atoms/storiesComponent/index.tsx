import React from 'react'

import styles from './styles.module.scss'

interface ILabel {
  stories: {
    createdAt: string
    title: string
    image: string
    id: string
  }[]
}

const Stories = ({ stories }: ILabel): JSX.Element => {
  return (
    <div className={styles.main_container}>
      {stories.map(storie => (
        <div key={storie.id} className={styles.container}>
          <div className={styles.card}>
            <div className={styles.stories_container}>
              <img src={storie.image} className={styles.stories} />
            </div>
            <p>{storie.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export { Stories }
