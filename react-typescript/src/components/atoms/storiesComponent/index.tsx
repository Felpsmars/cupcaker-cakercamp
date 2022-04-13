import React from 'react'

import styles from './styles.module.scss'

interface ILabel {
  label: string
  img: string
}

const Stories = (props: ILabel): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.stories_container}>
          <img src={props.img} className={styles.stories} />
        </div>
        <p>{props.label}</p>
      </div>
    </div>
  )
}

export { Stories }
