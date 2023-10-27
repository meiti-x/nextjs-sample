import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { usePostCategories } from '@/components/templates/blog/hooks/usePostCategories';

function BlogCategories() {
  const router = useRouter();
  const { data: categories } = usePostCategories();
  const currentCategory = router.query?.category;
  return (
    <ul>
      {categories?.results.map((category) => (

        <li
          key={category.id}
          className={currentCategory === category.en_name ? 'rounded bg-primary-100 p-2' : ' p-2'}
        >
          <Link
            className='flex justify-between py-3 transition-colors hover:text-gray-900'
            href={`?category=${category.en_name}`}
          >
            <span>{category.name}</span>
            <span>{category.posts_counts}</span>
          </Link>
        </li>

      ))}
    </ul>
  );
}

export default BlogCategories;
