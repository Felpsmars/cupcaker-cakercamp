import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { LabelGames } from 'components/atoms'

// Import Swiper styles
import './styles.css'

interface ICarouselProps {
  news: {
    title: string
    image: string
    description: string
  }[]
}

const Carousel = ({ news }: ICarouselProps): JSX.Element => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {news.map(eachNews => (
          <SwiperSlide>
            <img src={eachNews.image} alt="" />
            <div className="label_games">
              <LabelGames type="GAMES" />
            </div>
            <div className="slider_text">
              <h3 className="title">{eachNews.title}</h3>
              <h2 className="description">{eachNews.description}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export { Carousel }
