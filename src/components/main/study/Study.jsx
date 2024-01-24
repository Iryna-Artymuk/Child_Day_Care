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
import markdown4 from '@/constants/markdown/markdown4.md';
import SwiperButtons from '@/components/ui/SwiperButtons/SwiperButtons';

const Study = () => {
  const swiperRef = useRef();
  const [posts, setPost] = useState([]);
  console.log('posts: ', posts);

  useEffect(() => {
    const filesArr = [markdown1, markdown2, markdown3, markdown4];
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
          {posts?.length > 0 ? (
            <div className={styles.swiperWrapper}>
              <Swiper
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

              <SwiperButtons
                onPrevClick={() => swiperRef.current.slidePrev()}
                onNextClick={() => swiperRef.current.slideNext()}
              />
            </div>
          ) : (
            <p>Завантаженн...</p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Study;
