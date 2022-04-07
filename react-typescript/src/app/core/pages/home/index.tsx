import React from 'react'

import { Stories } from 'components/atoms'

const Home = (): JSX.Element => {
  return (
    <main>
      <Stories
        img={
          'https://static.gamevicio.com/imagens_up/big/71/sonic-the-hedgehog-2-gerou-us-25-5-milhoes-em-seu-final-de-semana-internacional-070121.jpg'
        }
        label="Lorem Ipsum"
      />
    </main>
  )
}

export default Home
