import { images } from '@/constants/data/gallery';
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
import Container from '@/components/Container/Container';
import styles from './GalleryPage.module.scss';
const GalleryPage = () => {
  return (
    <section className={styles.gallery}>
      <Container>
        <LightGallery
          elementClassNames={styles.imageGrid}
          speed={500}
          mobileSettings={{
            controls: true,
            showCloseIcon: true,
            download: true,
          }}
          plugins={[lgThumbnail, lgZoom, lgAutoplay, lgShare]}
        >
          {images.map((image, index) => {
            return (
              <a href={image.src} key={index} className={styles.imageGridItem}>
                <img alt={image.alt} src={image.src} width={200} height={200} />
              </a>
            );
          })}
        </LightGallery>
      </Container>
    </section>
  );
};

export default GalleryPage;
