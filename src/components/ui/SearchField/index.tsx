import type { FieldHookConfig } from 'formik';
import React from 'react';
import { Search } from 'react-feather';

import Input from '@/components/ui/Input';

import Button from '../Button';

export default function SearchField({ width, className, ...props }: {
  width?: string,
  className?: string,
  label?: string;
  placeholder?: string;
  field: FieldHookConfig<string>
}) {
  return (
    <div
      style={{ width }}
      className={`${className} flex max-w-full overflow-hidden rounded border-2 border-gray-300 bg-white  shadow-lg shadow-gray-400`}
    >
      <div className='w-11/12'>
        <Input
          {...props}
          className='h-full border-none focus:outline-0'
          placeholder='عبارت مورد نظر برای جستجو را وارد کنید'
        />
      </div>

      <Button
        variant='text'
        size='small'
        className='flex w-1/12 items-center justify-center rounded-none hover:bg-gray-300 '
        type='submit'
      >
        <Search />
      </Button>
    </div>
  );
}
