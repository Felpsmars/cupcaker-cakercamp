import React from 'react'

import moment from 'moment'
import 'moment/locale/pt-br'

import { HomeNews } from 'components/molecules'

moment.locale('pt-br')

/* import styles from './styles.module.scss'*/

const Home = (): JSX.Element => {
  return (
    <main>
      <HomeNews
        author="Billy Butcher,"
        title="Title: Lorem Ipsum Lorem Ips"
        description="Description: Lorem Ipsum Lorem "
        comments="44"
        label="PS4"
        stylesTag="PS4"
        time={'2022-04-06T09:00:46.272Z'}
        srcIMG="https://static.gamevicio.com/imagens_up/big/71/sonic-the-hedgehog-2-gerou-us-25-5-milhoes-em-seu-final-de-semana-internacional-070121.jpg"
      />
    </main>
  )
}

export default Home
