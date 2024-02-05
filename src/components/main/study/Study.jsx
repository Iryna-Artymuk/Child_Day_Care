import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Container from '@/components/ui/Container/Container';
import SwiperButtons from '@/components/ui/SwiperButtons/SwiperButtons';
import Card from './card/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './Study.module.scss';

const STUDY_ITEMS = gql`
  query getitems {
    studies(pagination: { page: 1, pageSize: 4 }) {
      data {
        id
        attributes {
          title
          body
        }
      }
    }
  }
`;
const Study = () => {
  const swiperRef = useRef();
  const [studyItems, setStudyItems] = useState([]);
  const { data, error, loading } = useQuery(STUDY_ITEMS);
  useEffect(() => {
    setStudyItems(data?.studies.data);
  }, [data]);

  return (
    <section id="study" className={styles.study}>
      <Container>
        <div className="contentWrapper">
          <h2 className="title"> Ми вивчаємо</h2>
          {studyItems?.length > 0 ? (
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
                {studyItems?.map((item, index) => (
                  <SwiperSlide key={index} className={styles.slide}>
                    <Card>
                      <Markdown remarkPlugins={[remarkGfm]}>
                        {item.attributes.body}
                      </Markdown>
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
            <p>Завантаження...</p>
          )}
          <Link className={styles.link} to="/study">
            Читати все
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Study;
