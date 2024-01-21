import Gallery from '@/components/main/gallery/Gallery';
import Hero from '@/components/main/hero/Hero';
import OurKids from '@/components/main/ourKids/OurKids';
import Schedule from '@/components/main/schedule/Schedule';

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurKids />
      <Schedule/>
      <Gallery />
    </>
  );
};

export default HomePage;
