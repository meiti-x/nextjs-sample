import Link from 'next/link';
import React from 'react';
import { ArrowLeft } from 'react-feather';

import Button from '@/components/ui/Button';
import { useSanitizing } from '@/hooks/useSanitize';

function Testimonial({ title, desc, link }: {
  title: string | undefined,
  desc: string | undefined,
  link: string,
}) {
  const description = useSanitizing(desc);

  return (
    <div className='flex flex-col rounded-lg bg-gray-100 px-3 lg:px-10' style={{ borderBottomRightRadius: '100px' }}>
      <img src='/assets/images/quote.svg' width={85} alt='quote' className='-mt-5 mb-5' />
      <h3>{title}</h3>
      <div
        className='mt-5 text-justify font-light text-gray-600 md:text-md'
        dangerouslySetInnerHTML={description}
      />

      <div className='my-10 text-center'>
        <Link href={link}>
          <Button size='small' variant='text'>
            ادامه مطلب
            <ArrowLeft className='ms-3 inline' size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Testimonial;
