import Container from '@/components/Container/Container';
import styles from './Gallery.module.scss';
const Gallery = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      <Container>
        <div className='contentWrapper'>
          <h2 className="title">Галерея</h2>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
