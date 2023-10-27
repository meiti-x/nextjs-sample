import type { FieldHookConfig } from 'formik';
import { ErrorMessage, useField } from 'formik';
import React from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import type { DateObject } from 'react-multi-date-picker';
import RCDatePicker from 'react-multi-date-picker';
import InputIcon from 'react-multi-date-picker/components/input_icon';

import styles from './DatePicker.module.css';

interface Props {
  label?: string;
  placeholder?: string;
  field: FieldHookConfig<string>;
}

function DatePicker({
  field, label
}: Props) {
  const [fieldData, meta, helpers] = useField(field.name);
  const isTouchedAndHasError = Boolean(meta.error && meta.touched);

  const { setValue } = helpers;
  return (
    <div className='my-2' data-error={isTouchedAndHasError}>
      {label
        ? (
          <label
            className={styles.label}
            htmlFor={fieldData.name}
          >
            {label}
          </label>
        )
        : null}
      {/* @ts-ignore */}
      <RCDatePicker
        {...field}
        name={field.name}
        onChange={(date: DateObject) => {
          setValue(date);
        }}
        calendar={persian}
        locale={persian_fa}
        render={<InputIcon />}
        calendarPosition='bottom-left'
        containerStyle={{
          width: '100%',
        }}
      />
      <ErrorMessage
        name={fieldData?.name}
        component='p'
        className='mt-1 block text-xs font-medium text-red-400'
      />
    </div>
  );
}

export default DatePicker;
