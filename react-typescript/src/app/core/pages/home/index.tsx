import React from 'react'

import moment from 'moment'
import 'moment/locale/pt-br'

import { Stories } from 'components/atoms'

import stories from '../../../../data/stories.json'

moment.locale('pt-br')

/* import styles from './styles.module.scss'*/

const Home = (): JSX.Element => {
  return (
    <main>
      <Stories stories={stories} />
    </main>
  )
}

export default Home
