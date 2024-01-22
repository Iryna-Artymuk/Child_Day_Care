import Gallery from '@/components/main/gallery/Gallery';
import Hero from '@/components/main/hero/Hero';
import OurKids from '@/components/main/ourKids/OurKids';
import Schedule from '@/components/main/schedule/Schedule';
import Teachers from '@/components/main/teachers/Teachers';
import Study from '@/components/main/study/Study';

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurKids />
      <Schedule />
      <Study />
      <Gallery />
      <Teachers />
    </>
  );
};

export default HomePage;
