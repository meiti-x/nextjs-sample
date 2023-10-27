import { Field, Form, Formik } from 'formik';
import React from 'react';

import SearchField from '@/components/ui/SearchField';

import styles from './notFound.module.css';

function NotFound() {
  return (
    <div className='content'>
      <h1 className={styles.errorCode}>
        <span className='text-primary-main'>4</span>
        04
      </h1>
      <h3 className={styles.title}>
        به نظر میرسد مشکلی رخ داده است
      </h3>
      <p className={styles.desc}>
        به نظر می رسد چیزی یافت نشد. می خواهید شانس خود را یک بار دیگر
        امتحان کنید؟
      </p>

      <Formik
        initialValues={{ search: '' }}
        // validationSchema={loginSchema}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className='mb-10'>
            <Field
              name='search'
              component={SearchField}
              className='mx-auto mt-10 w-full md:w-3/5'
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default NotFound;
