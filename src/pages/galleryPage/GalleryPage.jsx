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
import Container from '@/components/ui/Container/Container';
import styles from './GalleryPage.module.scss';
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import GalleryFilters from '@/components/galleryFilters/GalleryFilters';

const PHOTOS = gql`
  query getPhotos($id: ID!) {
    event(id: $id) {
      data {
        id
        attributes {
          name
          photos {
            data {
              id
              attributes {
                img {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const GalleryPage = () => {
  const [filterId, setfilterId] = useState('5');
  const [images, setImages] = useState([]);

  const getFilterId = id => {
    setImages([]);
    setfilterId(id);
  };
  const { data, error, loading } = useQuery(PHOTOS, {
    variables: { id: filterId },
  });
  const filterImg = data?.event.data.attributes.photos.data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setImages(filterImg);
  }, [filterImg]);

  if (error) return <p>{error.message}</p>;
  return (
    <section className={styles.gallery}>
      <Container>
        <div className="contentWrapper">
          <GalleryFilters getFilterId={getFilterId} />
          {loading ? (
            <p>...loading</p>
          ) : (
            <LightGallery
              elementClassNames={styles.imageGrid}
              speed={500}
              mobileSettings={{
                showCloseIcon: true,
                download: true,
              }}
              plugins={[lgThumbnail, lgZoom, lgAutoplay, lgShare]}
            >
              {/* {images.map((image, index) => {
              return (
                <a
                  href={image.src}
                  key={index}
                  className={styles.imageGridItem}
                >
                  <img
                    loading="lazy"
                    alt={image.alt}
                    src={image.src}
                    width={200}
                    height={200}
                  />
                </a>
              );
            })} */}
              {images?.map((image, index) => {
                console.log(image.attributes.img.data[0].attributes.url);
                return (
                  <a
                    href={image.attributes.img.data[0].attributes.url}
                    key={index}
                    className={styles.imageGridItem}
                  >
                    <img
                      loading="lazy"
                      alt={image.alt}
                      src={image.attributes.img.data[0].attributes.url}
                      width={200}
                      height={200}
                    />
                  </a>
                );
              })}
            </LightGallery>
          )}
        </div>
      </Container>
    </section>
  );
};

export default GalleryPage;
