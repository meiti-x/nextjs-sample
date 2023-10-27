import BlogCarousel from '@/components/templates/home/blogCarousel';
import Hero from '@/components/templates/home/Hero';
import { useHomeData } from '@/components/templates/home/hooks/useHomeData';
import ImageMap from '@/components/templates/home/imageMap';
import Testimonial from '@/components/templates/home/testimonial';
import getHomeData, { URL_HOME_DATA } from '@/service/getHomeData';

const Index = () => {
  const { data } = useHomeData();

  return (
    <div className='content'>
      <Hero />
      <ImageMap />
      <Testimonial
        title={data?.homepage_note.title}
        desc={data?.homepage_note.description}
        link={data?.homepage_note.link as string}
      />
      <BlogCarousel />
    </div>
  );
};

export async function getServerSideProps() {
  const homeData = await getHomeData();

  return {
    props: {
      fallback: {
        [URL_HOME_DATA]: homeData
      }
    }
  };
}

export default Index;
