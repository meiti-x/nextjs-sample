import React from 'react';

import type { BreadcrumbItem } from '@/components/ui/Breadcrumb';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface Props {
  backgroundUrl?: string;
  breadcrumbItems: BreadcrumbItem[];
  imageType?: 'quote' | 'triangle';
}

function PageHeader(
  {
    backgroundUrl = '/assets/images/clinic_background.png',
    breadcrumbItems,
    imageType = 'quote'
  }: Props
) {
  return (
    <section
      className='relative flex items-center justify-center'
      style={{
        height: '35vh',
        background: `url(${backgroundUrl}) left center`
      }}
    >
      <div className='absolute inset-0 z-10 bg-gray-900 bg-opacity-75' />

      <div className='content relative z-20 w-full '>
        {
          imageType === 'quote' ? (
            <div className='absolute -bottom-20 left-5 z-10 rotate-180 lg:left-0'>
              <img
                src={`/assets/images/${imageType}.svg`}
                className='w-10 sm:w-16 md:w-20 lg:w-24'
                alt='quote'
              />
            </div>
          ) : null
        }
        <div className='absolute -bottom-16 left-8 z-10 rotate-180 opacity-40 lg:left-3'>
          <img
            src={`/assets/images/${imageType}-shadow.svg`}
            className='w-10 sm:w-16 md:w-20 lg:w-24'
            alt='quote'
          />
        </div>
        <div className='absolute -top-20 right-5 z-10 lg:right-0'>
          <img
            src={`/assets/images/${imageType}-green.svg`}
            className='w-10 sm:w-16 md:w-20 lg:w-24'
            alt='quote'
          />
        </div>
        <div className='absolute -top-16 right-8 z-10 opacity-40 lg:right-3'>
          <img
            src={`/assets/images/${imageType}-shadow.svg`}
            className='w-10 sm:w-16 md:w-20 lg:w-24'
            alt='quote'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='mb-4 text-center text-white'>
            {breadcrumbItems?.[breadcrumbItems.length - 1]?.title}
          </h3>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
