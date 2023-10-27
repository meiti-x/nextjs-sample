import Link from 'next/link';
import React from 'react';
import {
  ArrowLeft, Heart, MessageCircle, Share2
} from 'react-feather';

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useSanitizing } from '@/hooks/useSanitize';
import type { HomeDataCategoryDetail } from '@/service/getHomeData';
import { convertToJalali } from '@/utils/convertToJalali';
import { env } from '@/utils/env';
import { showToast } from '@/utils/showToast';
import type { BlogListCategories } from '@/service/getBlogList';

import styles from './blogcard.module.css';

interface BlogCardProps {
  className?: string;
  size?: 'medium' | 'small';
  image: ImageUrl;
  date: DateTimeString;
  categories: HomeDataCategoryDetail[] | BlogListCategories[];
  title: string;
  description: string;
  slug: string;
  id: UniqueId;
  isLiked?: boolean;
  type?: 'vertical' | 'horizontal';
}

function BlogCard(
  {
    className,
    id,
    image,
    categories,
    date,
    title,
    slug,
    description,
    isLiked,
    size = 'medium',
    type = 'vertical'
  }: BlogCardProps
) {
  const [, copy] = useCopyToClipboard();

  function generateCategories() {
    return categories.map((category) => category.name).join(', ');
  }

  const sanitizedDescrition = useSanitizing(description);

  function copyToClipboard() {
    copy(`${env.baseClientURL}/blog/${slug}`);
    showToast('پیوند یکتا با موفقیت کپی شد');
  }

  async function onLike() {
    alert('liked');
  }

  return (
    <article
      className={`${size === 'small' ? styles.smallContainer : styles.container} ${className}`}
    >

      <div datatype={type} className={`${styles.wrapper}`}>
        <img src={image} alt='' className={styles.cardImage} />
        <div className={styles.content}>
          <Link href={`/blog/${slug}`} className='hover:border-none'>
            <div className='mt-3 flex justify-between'>
              <span className={styles.date}>{convertToJalali(date)}</span>
              <span className={styles.categories}>{generateCategories()}</span>
            </div>
            <div style={{ minHeight: '60px' }}>
              <h6 className='mt-2 line-clamp-2'>
                {title}
              </h6>
              <div className={styles.description} dangerouslySetInnerHTML={sanitizedDescrition} />
            </div>
          </Link>
          <div className={styles.footer}>
            <div className='flex gap-2'>
              <Share2 className={styles.share} onClick={() => copyToClipboard()} />
              <Heart onClick={() => onLike()} className={styles.like} data-active={isLiked} />
              <Link href={`/blog/${slug}#comments`} className='hover:border-none'>
                <MessageCircle className={styles.comment} />
              </Link>
            </div>
            <span className={styles.continueReadingButton}>
              مشاهده مطلب
              <ArrowLeft className='mr-1 inline text-xs' />
            </span>
          </div>
        </div>
      </div>

    </article>
  );
}

export default BlogCard;
