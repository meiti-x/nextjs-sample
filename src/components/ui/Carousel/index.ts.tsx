import type { ReactNode } from 'react';
import {
  A11y, Navigation, Pagination, Scrollbar
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import type { SwiperOptions } from 'swiper/types';

interface ICarousel {
  options: SwiperOptions,
  items?: { key: string, content: ReactNode }[]
}

function Carousel({ options, items }: ICarousel) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      {...options}
    >
      {items?.map((item) => (
        <SwiperSlide className='mb-12' key={item.key}>{item.content}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
