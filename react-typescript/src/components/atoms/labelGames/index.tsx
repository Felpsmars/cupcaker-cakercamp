import React from 'react'

import styles from './styles.module.scss'

interface IProps {
  type: string
}

const LabelGames = (props: IProps): JSX.Element => {
  return <div className={styles.label}>{props.type}</div>
}

export { LabelGames }
