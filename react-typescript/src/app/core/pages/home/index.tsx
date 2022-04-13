import React from 'react'

import moment from 'moment'
import 'moment/locale/pt-br'

import { Carousel } from 'components/molecules'

moment.locale('pt-br')

/* import styles from './styles.module.scss'*/

const Home = (): JSX.Element => {
  return (
    <main>
      <Carousel
        title="title"
        description="description"
        img="https://static.gamevicio.com/imagens_up/big/71/kingdom-hearts-iv-apartamento-de-sora-existe-na-vida-real-e-custa-1-2-milhao-de-dolares-070420.jpg"
      />
    </main>
  )
}

export default Home
