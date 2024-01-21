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
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import Container from '@/components/Container/Container';
import styles from './Gallery.module.scss';
import { images } from '@/constants/data/gallery';
const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <section id="gallery" className={styles.gallery}>
      <Container>
        <div className="contentWrapper">
          <h2 className="title">Галерея</h2>
          <div className={styles.lgReactElement}>
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[
                lgThumbnail,
                lgZoom,
                lgAutoplay,
                lgFullscreen,
                lgRotate,
                lgShare,
              ]}
            >
              {images.map((image, index) => {
                return (
                  <a href={image.src} key={index}>
                    <img alt={image.alt} src={image.src} />
                  </a>
                );
              })}
            </LightGallery>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
