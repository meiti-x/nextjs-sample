import React from 'react';
import {
  Clock, Mail, Map, PhoneCall
} from 'react-feather';

import { useSanitizing } from '@/hooks/useSanitize';
import type { HomeDataClinicData } from '@/service/getHomeData';
import { calculateWorkingHour } from '@/utils/calculateWorkingHour';

interface FooterProps {
  clinicData: HomeDataClinicData;
}

export default function Footer({ clinicData }: FooterProps) {
  // eslint-disable-next-line max-len
  const workingHour = calculateWorkingHour(1, 5, '19', '20');
  const parsedDesc = useSanitizing('<p>test</p>');
  return (
    <footer className='bg-gray-200 pb-3 pt-10'>
      <div className='mx-auto max-w-screen-xl px-5 xl:px-0'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-4'>
          <div>
            <a href='https://flowbite.com' className=''>
              <span
                className='h3 self-center whitespace-nowrap font-semibold text-primary-main'
              >
                LOGO
              </span>

              <div className='mt-5 font-light text-gray-500' dangerouslySetInnerHTML={parsedDesc} />
            </a>
          </div>
          <div>
            <h5 className='mb-6 text-gray-700'>
              تماس با ما
            </h5>
            <ul className='text-gray-600'>
              <li className='mb-4'>
                <Map className='me-3 inline-block w-4 text-primary-main' />
                <a
                  href='https://github.com/themesberg/flowbite'
                  className='text-sm text-gray-600'
                >
                  تهران
                </a>
              </li>
              <li className='mb-4'>
                <PhoneCall className='me-3 inline-block w-4 text-primary-main' />
                <a
                  href='tel:09123456789'
                  className='text-sm text-gray-600'
                >
                  09123456789
                </a>
              </li>
              <li className='mb-4'>
                <Mail className='me-3 inline-block w-4 text-primary-main' />
                <a
                  href='mailto:test@mail.com'
                  className='text-sm text-gray-600'
                >
                  test@mail.com
                </a>
              </li>
              <li className='mb-4'>
                <Clock className='me-3 inline-block w-4 text-primary-main' />
                <a
                  href='https://discord.gg/4eeurUVvTy'
                  className='text-sm text-gray-600'
                >
                  {workingHour}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='mb-6 text-gray-700'>
              دسترسی آسان
            </h5>
            <ul className='list-disc text-gray-600'>
              <li className='mb-4 pr-2'>
                <a
                  href='https://github.com/themesberg/flowbite'
                  className='text-gray-600'
                >
                  لینک های مهم
                </a>
              </li>
            </ul>
          </div>
          <div className='rounded bg-white p-4'>
            <h5 className='mb-6 text-blue-950 '>موقعیت مجموعه</h5>
            <a href='/' target='_blank'>
              <img
                src={clinicData?.location_picture_url || ''}
                className='max-h-48 w-full object-cover'
                alt='نقشه'
              />
            </a>
          </div>
        </div>
        <hr className='my-5 border-gray-400 sm:mx-auto lg:my-8' />
        <div className='flex justify-center'>
          <span className='text-center text-gray-600'>
            تمامی حقوق متعلق به شرکت
            <a href='https://flowbite.com' className='hover:underline'>
              ...
            </a>
            میباشد
          </span>
        </div>
      </div>
    </footer>
  );
}
