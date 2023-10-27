import type { FieldHookConfig } from 'formik';
import { ErrorMessage, useField } from 'formik';
import React from 'react';

import styles from './input.module.css';

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  options: { label: string, value: string }[];
  field: FieldHookConfig<string>;
}

export default function FormikSelect({
  field, label, options, className, ...rest
}: Props) {
  // @ts-ignore
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [, meta, helpers] = useField(field);
  const isTouchedAndHasError = Boolean(meta.error && meta.touched);

  return (
    <div className='my-2'>
      {label
        ? (
          <label
            className={styles.label}
            htmlFor={field.name}
          >
            {label}
          </label>
        )
        : null}
      {/* @ts-ignore */}
      <select
        {...field}
        {...rest}
        data-error={isTouchedAndHasError}
        className={`${styles.input} ${className}`}
      >
        {/* eslint-disable-next-line max-len */}
        {options.map((option) => (<option onSelect={() => helpers.setValue(option.value)} key={option.value} value={option.value}>{option.label}</option>))}
      </select>
      <ErrorMessage
        name={field?.name}
        component='p'
        className='mt-1 block text-xs font-medium text-red-400'
      />
    </div>
  );
}
