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
import styles from './GalleryPage.module.scss';
import { useEffect, useState } from 'react';

import { Cloudinary } from '@cloudinary/url-gen';

import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
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
                    attributes {
                      url
                      provider_metadata
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
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dfzwtscqb',
    },
  });
  const getFilterId = id => {
    setImages([]);
    setfilterId(id);
  };
  const { data, error, loading } = useQuery(PHOTOS, {
    variables: { id: filterId },
  });

  const filterImg = data?.event.data?.attributes.photos.data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setImages(filterImg);
  }, [filterId, filterImg]);

  return (
    <section className={styles.gallery}>
      <Container>
        <div className="contentWrapper">
          <GalleryFilters getFilterId={getFilterId} filterId={filterId} />
          {error ? <p>{error.message}</p> : null}
          {loading & !error ? (
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
              {images?.map((image, index) => {
                return (
                  <a
                    href={image.attributes.img.data[0].attributes.url}
                    key={index}
                    className={styles.imageGridItem}
                  >
                    <AdvancedImage
                      cldImg={cld.image(
                        image?.attributes.img.data[0].attributes
                          .provider_metadata.public_id
                      )}
                      plugins={
                        ([
                          lazyload({
                            rootMargin: '10px 20px 10px 30px',
                            threshold: 0.25,
                          }),
                        ],
                        [placeholder({ mode: 'blur' })])
                      }
                    />
                  </a>
                );
              })}
            </LightGallery>
          )}
          {images?.length === 0 ? <p>дані тимчасові відсутні </p> : ''}
        </div>
      </Container>
    </section>
  );
};

export default GalleryPage;
