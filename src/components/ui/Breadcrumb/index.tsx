import Link from 'next/link';
import React from 'react';

export interface BreadcrumbItem {
  title: string,
  href: string,
  key: string,
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className='flex justify-center text-white' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center'>
        <li className='inline-flex items-center'>
          <Link
            href='/'
            className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
          >
            صفحه اصلی
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.key}>
            <div className='flex items-center'>
              <div className='mx-2'>/</div>
              <Link
                href={item.href}
                style={{ pointerEvents: index + 1 === items.length ? 'none' : 'auto' }}
                className='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              >
                {item.title}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>

  );
}

export default Breadcrumb;
