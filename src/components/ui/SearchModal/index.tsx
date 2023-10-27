import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';

interface SearchModalProps {
  visible: boolean;
  setVisible: (status: boolean) => void;
}

function SearchModal({ visible, setVisible }: SearchModalProps) {
  const router = useRouter();
  return (
    <Modal
      title='جستجو'
      content={(
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async (values) => {
            router.push(`/search?search=${values.search}`);
            setVisible(false);
          }}
        >
          {() => (
            <Form>
              <Field
                name='search'
                component={Input}
                placeholder='عبارت مورد نظر را برای جستجو وارد کنید'
                className='mx-auto mt-10 w-full'
              />
              <Button type='submit'>جستجو</Button>
            </Form>
          )}

        </Formik>
      )}
      visible={visible}
      setVisible={() => {
        setVisible(false);
      }}
    />
  );
}

export default SearchModal;
