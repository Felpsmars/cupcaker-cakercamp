import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { LabelGames } from 'components/atoms'

// Import Swiper styles
import './styles.css'

interface ICarouselProps {
  img: string
  title: string
  description: string
}

const Carousel = (props: ICarouselProps): JSX.Element => {
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
        <SwiperSlide>
          <img src={props.img} alt="" />
          <div className="label_games">
            <LabelGames />
          </div>
          <div className="slider_text">
            <h3 className="title">{props.title}</h3>
            <h2 className="description">{props.description}</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  )
}
export { Carousel }
