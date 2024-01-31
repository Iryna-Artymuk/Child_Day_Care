import { gql, useQuery } from '@apollo/client';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgShare from 'lightgallery/plugins/share';
import Container from '@/components/ui/Container/Container';
import styles from './Gallery.module.scss';
// import { images } from '@/constants/data/gallery';
import sprite from '@/assets/icons/sprite.svg';
import { Link } from 'react-router-dom';

const PHOTOS = gql`
  query getPhotos {
    photos(pagination: { page: 1, pageSize: 8 }) {
      data {
        id
        attributes {
          img {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const Gallery = () => {
  const { data, error, loading } = useQuery(PHOTOS);

  const images = data?.photos.data;
  console.log(' images: ', images);
  return (
    <section id="gallery" className={styles.gallery}>
      <Container>
        <div className="contentWrapper">
          <svg className={styles.icon1} width={50} height={50}>
            <use href={`${sprite}#${'stars-icon'}`} />
          </svg>
          <svg className={styles.icon2} width={50} height={50}>
            <use href={`${sprite}#${'stars-icon'}`} />
          </svg>
          <h2 className="title">Галерея</h2>

          {!loading & !error ? (
            <LightGallery
              elementClassNames={styles.imageGrid}
              speed={500}
              mobileSettings={{
                showCloseIcon: true,
                download: true,
              }}
              plugins={[lgThumbnail, lgZoom, lgAutoplay, lgShare]}
            >
              {images.map((image, index) => {
                return (
                  <a
                    href={image.attributes.img.data[0].attributes.url}
                    key={index}
                    className={styles.imageGridItem}
                  >
                    <img
                      // alt={image.alt}
                      src={image.attributes.img.data[0].attributes.url}
                      loading="lazy"
                    />
                  </a>
                );
              })}
            </LightGallery>
          ) : (
            <p>Завантаження...</p>
          )}
          <Link className={styles.link} to="/gallery">
            Дивитись всі фото
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
