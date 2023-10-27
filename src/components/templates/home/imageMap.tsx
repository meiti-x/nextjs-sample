import React from 'react';
import { v4 as uuidV4 } from 'uuid';

import Button from '@/components/ui/Button';
import Tooltip from '@/components/ui/Tooltip';

function ImageMap() {
  const points = [
    {
      key: uuidV4(),
      point: { top: '90px', right: '110px' },
      color: '#C7EBE5',
      title: 'بیماری‌های گردن'
    },
    {
      key: uuidV4(),
      point: { top: '110px', right: '180px' },
      color: '#FFE1CB',
      title: 'بیماری‌های شانه'
    },
    {
      key: uuidV4(),
      point: { top: '255px', right: '25px' },
      color: '#DDC7EB',
      title: 'بیماری‌های آرنج'

    },
    {
      key: uuidV4(),
      point: { top: '265px', right: '110px' },
      color: '#FFA2A2',
      title: 'بیماری‌های ناحیه پشتی'
    },
    {
      key: uuidV4(),
      point: { bottom: '180px', right: '160px' },
      color: '#FFF09F',
      title: 'بیماری‌های زانو'
    },
    {
      key: uuidV4(),
      point: { bottom: '70px', right: '65px' },
      color: '#A2D8FF',
      title: 'بیماری‌های پا'
    }

  ];
  const circleStyle = 'inline-block h-4 w-4  rounded-full ring-2 ring-offset-1 ring-offset-transparent';
  return (
    <div className='my-10 grid grid-cols-1 md:grid-cols-3'>
      <div className='col-span-2'>
        <h4 className='text-center md:text-right'>
          بدن خود را بهتر بشناسید!
        </h4>
        <p className='mt-5 text-justify font-light text-gray-600 md:text-md lg:w-3/5'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است،
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد
          نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
          درصد گذشته
          حال و آینده
        </p>

        <ul className='mt-10 list-inside list-disc'>
          {points.map((point) => (
            <li
              key={point.key}
              className='mb-4'
              style={{ color: point.color }}
            >
              <span className='text-black'>{point.title}</span>

            </li>
          ))}
        </ul>
        <div className='mt-20 flex gap-5'>
          <Button size='medium'>
            مشاهده مطالب
          </Button>
          <Button size='medium' variant='outline'>
            تماس با ما
          </Button>
        </div>
      </div>
      <div className='relative col-span-1 hidden text-left lg:block'>
        <img src='/assets/images/standing-guy.png' />
        {points.map((point) => (
          (
            <Tooltip
              key={point.key}
              content={(
                <div className='px-3 py-5 font-sans'>
                  <span className={circleStyle} />
                  <p className='mt-5 font-bold' style={{ font: 'iranSans' }}>
                    {point.title}
                  </p>
                  <p
                    className='mt-5 text-justify font-light text-gray-600'
                  >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                    طراحان گرافیک
                    است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                    شرایط فعلی
                    تکنولوژی مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
                    در شصت و سه
                    درصد گذشته
                    حال و آینده
                  </p>
                  <Button className='mt-4' variant='text'>
                    مشاهده مطالب
                  </Button>
                </div>
              )}
              triggerElement={
                (
                  <div
                    className={`absolute transition-all hover:scale-125 ${circleStyle}`}
                    style={{ background: point.color, ...point.point, zIndex: '0' }}
                    data-tip={point.title}
                  />
                )
              }
            />
          )
        ))}
      </div>
    </div>
  );
}

export default ImageMap;
