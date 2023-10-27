import type { SWRResponse } from 'swr';
import useSWR from 'swr';

import BlogCard from '@/components/ui/BlogCard';
import Carousel from '@/components/ui/Carousel/index.ts';
import Tabs from '@/components/ui/Tabs';
import type { HomeDataBlogPost, HomeDataInterface } from '@/service/getHomeData';
import { URL_HOME_DATA } from '@/service/getHomeData';
import type { CategoriesEnum } from '@/types/categoriesEnum';

const carouselOption = {
  spaceBetween: 50,
  pagination: {
    clickable: true
  },
  breakpoints: {
    578: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  }
};

function BlogCarousel() {
  const { data }: SWRResponse<HomeDataInterface, any, any> = useSWR(URL_HOME_DATA);

  function generateTabs(): { title: string | undefined, key: string, content: JSX.Element }[] {
    function renderBlogPostsForCategory(category: CategoriesEnum) {
      return (
        data?.last_blog_posts[category].map((item: HomeDataBlogPost) => ({
          key: item.id,
          content: (
            <BlogCard
              id={item.id}
              slug={item.slug}
              image={item.main_picture}
              date={item.publish_date}
              title={item.title}
              categories={item.categories}
              description={item.seo_description}
            />
          )
        }))
      );
    }

    // group categories and blogs
    // @ts-ignore
    return Object.entries(data?.top_blog_categories).map(([key, value]) => ({
      title: data?.top_blog_categories?.[key as CategoriesEnum].name,
      key: value.id,
      content: <Carousel
        options={carouselOption}
        items={renderBlogPostsForCategory(key as CategoriesEnum)}
      />
    }));
  }

  return (
    <div className='my-10'>
      <h4 className='mb-5'>آخرین مقالات</h4>
      <Tabs tabs={generateTabs()} />
    </div>

  );
}

export default BlogCarousel;
