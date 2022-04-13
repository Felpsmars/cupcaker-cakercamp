import Icon from '@mdi/react'
import React from 'react'

import { mdiMoonWaxingCrescent } from '@mdi/js'

import styles from './styles.module.scss'

const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <div className={styles.over_header}>
          <img
            src="https://www.gamevicio.com/misc/images/logo-black.webp"
            alt="game-vicio-logo"
          />
        </div>
        <div className={styles.sub_header}>
          <div className={styles.logo_sub_header}>
            <Icon path={mdiMoonWaxingCrescent} size={1.3} />
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
