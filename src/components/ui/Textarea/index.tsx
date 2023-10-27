import type { FieldHookConfig } from 'formik';
import { ErrorMessage, useField } from 'formik';
import React from 'react';

import styles from './textarea.module.css';

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  field: FieldHookConfig<string>;
}

export default function Textarea({
  field, label, className, ...rest
}: Props) {
  // @ts-ignore
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [, meta] = useField(field);
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
      <textarea
        {...field}
        {...rest}
        rows={5}
        data-error={isTouchedAndHasError}
        className={`${styles.input} ${className}`}
      />
      <ErrorMessage
        name={field?.name}
        component='p'
        className='mt-1 block text-xs font-medium text-red-400'
      />
    </div>
  );
}
