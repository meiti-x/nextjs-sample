import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { v4 as uuidV4 } from 'uuid';

import Button from '@/components/ui/Button';
import SearchField from '@/components/ui/SearchField';

export default function Hero() {
  const router = useRouter();
  const services = [
    {
      title: 'بیماری های گردن',
      iconPath: '/assets/images/neck.svg',
      key: uuidV4()

    },
    {
      title: 'بیماری‌های ناحیه پشتی',
      iconPath: '/assets/images/back.svg',
      key: uuidV4()

    },
    {
      title: 'بیماری‌های شانه',
      iconPath: '/assets/images/shoulder.svg',
      key: uuidV4()

    },
    {
      title: 'بیماری‌های آرنج',
      iconPath: '/assets/images/arm.svg',
      key: uuidV4()

    },
    {
      title: 'بیماری‌های زانو',
      iconPath: '/assets/images/knee.svg',
      key: uuidV4()
    },
    {
      title: 'بیماری‌های کف پا',
      iconPath: '/assets/images/foot.svg',
      key: uuidV4()
    }
  ];
  return (
    <div className='my-10'>
      <h1 className='text-center tracking-widest'>
        <strong className='space text-primary-main'>S</strong>
        ample
        <strong className='text-primary-main'>P</strong>
        roject
      </h1>
      <Formik
        initialValues={{ search: '' }}
        // validationSchema={loginSchema}
        onSubmit={async (values) => {
          router.push(`/search?search=${values.search}`);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name='search'
              component={SearchField}
              className='mx-auto mt-10 w-full md:w-3/5'
            />
          </Form>
        )}
      </Formik>
      <div className='mx-auto mt-12 grid grid-cols-2 gap-6 md:w-3/5 lg:grid-cols-3'>
        {services.map((service) => (
          <div
            className='rounded border-2 border-primary-100 py-5 text-center transition-all hover:rotate-2 hover:border-primary-light'
            key={service.key}
          >
            <img src={service.iconPath} alt={service.title} width={60} className='mx-auto mb-4' />
            <span>{service.title}</span>
          </div>
        ))}
      </div>
      <div className='mt-20 flex justify-center gap-4'>
        <Button size='medium'>نوبت اینترنتی</Button>
        <Button size='medium'>دندانپزشکی</Button>
      </div>
    </div>
  );
}
