import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import Container from '@/components/ui/Container/Container';
import Card from './card/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './Study.module.scss';
import markdown1 from '@/constants/markdown/markdown1.md';
import markdown2 from '@/constants/markdown/markdown2.md';
import markdown3 from '@/constants/markdown/markdown3.md';
import SwiperButtons from '@/components/ui/SwiperButtons/SwiperButtons';

const Study = () => {
  const swiperRef = useRef();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const filesArr = [markdown1, markdown2, markdown3];
    filesArr.forEach(file =>
      fetch(file)
        .then(response => {
          return response.text();
        })
        .then(text => {
          setPost(prev => [...prev, text]);
        })
    );
  }, []);
  return (
    <section id="study" className={styles.study}>
      <Container>
        <div className="contentWrapper">
          <h2 className="title"> Ми вивчаємо</h2>
          <div className={styles.swiperWrapper}>
            <Swiper
              navigation={{
                prevEl: '.prevSlide',
                nextEl: '.nextSlide',
              }}
              className={styles.swiper}
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
              effect={'coverflow'}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              loop={true}
            >
              {posts?.map((post, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                  <Card>
                    <Markdown>{post}</Markdown>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className={styles.prevSlide}
              onClick={() => swiperRef.current.slidePrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>
            <button
              className={styles.nextSlide}
              onClick={() => swiperRef.current.slideNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>
            {/* <SwiperButtons
              onPrevClick={() => {
                console.log('click');
                swiperRef.current.slidePrev();
              }}
              onNextClick={() => swiperRef.current.slideNext()}
            /> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Study;
