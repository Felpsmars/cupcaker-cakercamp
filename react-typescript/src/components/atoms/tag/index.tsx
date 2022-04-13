import React from 'react'

import classNames from 'classnames'

import styles from './styles.module.scss'

interface ITagsProps {
  label: string
  stylesTag: string
}

const Tag = (props: ITagsProps): JSX.Element => {
  return (
    <div className={classNames(styles.container, styles[props.stylesTag])}>
      {props.label}
    </div>
  )
}

export { Tag }
