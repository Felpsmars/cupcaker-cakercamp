import React from 'react'

import classNames from 'classnames'

import styles from './styles.module.scss'

interface ITagsProps {
  type: string
}

const Tag = (props: ITagsProps): JSX.Element => {
  function changeColor(tagColor: string): string {
    let color = ''
    if (tagColor) color = '#ef6c00'
    if (tagColor === 'Xbox Series' || tagColor === 'Xbox One') color = '#529836'
    if (tagColor === 'PC') color = '#bdbbbb'
    if (tagColor === 'PS4' || tagColor === 'PS5') color = '#1565c0'
    if (tagColor === 'Switch') color = '#c62828'
    return color
  }

  return (
    <div
      style={{ backgroundColor: changeColor(props.type) }}
      className={classNames(styles.container)}
    >
      {props.type}
    </div>
  )
}

export { Tag }
