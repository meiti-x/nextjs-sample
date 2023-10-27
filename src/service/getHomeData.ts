import { requester } from '@/libs/axios';
import type { CategoriesEnum } from '@/types/categoriesEnum';

export const URL_HOME_DATA = '/api/v1/kamargardan/generic/kamargardan/homepage/';

export interface HomeDataCategoryDetail {
  id: string,
  name: string,
  en_name: string,
  description: string,
  language: string,
  seo_title: string,
  seo_description: string,
  old_url: string,
  posts_counts?: number
}

export interface HomeDataBlogPost {
  id: string,
  author: {
    id: number,
    first_name: string,
    last_name: string,
    full_name: string
  },
  title: string,
  main_picture: string,
  subtitle: string,
  slug: string,
  context: string,
  publish_date: string,
  is_published: boolean,
  categories: HomeDataCategoryDetail[],
  tags: {
    id: string,
    name: string
  }[],
  seo_title: string,
  seo_description: string,
  old_url: string,
  show_in_homepage: boolean
}

export interface HomeDataClinicData {
  id: string,
  language: string,
  description: string,
  phone_number: string,
  landline_number: string,
  email: string,
  location_address: string,
  location_picture: string,
  location_link: string,
  location_picture_url: string,
  longitude: number,
  latitude: number,
  twitter_address: string,
  instagram_address: string,
  facebook_address: string,
  linkedin_address: string,
  aparat_address: string,
  whatsapp_address: string,
  youtube_address: string,
  start_day: number,
  end_day: number,
  start_clock: string,
  end_clock: string
}

export interface HomeDataInterface {
  top_blog_categories: {
    [key in CategoriesEnum]: HomeDataCategoryDetail;
  },
  last_blog_posts: {
    back: HomeDataBlogPost[],
    elbow: HomeDataBlogPost[],
    knee: HomeDataBlogPost[],
    neck: HomeDataBlogPost[],
    shoulder: HomeDataBlogPost[],
    soles_of_the_feet: HomeDataBlogPost[]
  },
  homepage_note: {
    language: string,
    title: string,
    description: string,
    link: string
  },
  clinic_data: HomeDataClinicData
}

export default async function getHomeData(): Promise<HomeDataInterface> {
  const data: HomeDataInterface = await requester.get(URL_HOME_DATA).then((res) => res.data);
  return data;
}
