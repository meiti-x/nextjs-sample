import type { FieldHookConfig } from 'formik';
import React from 'react';

import styles from './radio.module.css';

interface RadioProps {
  name: string;
  label: string;
  value: string;
  field: FieldHookConfig<string>;
}

function Index({
  name, label, field
}: RadioProps) {
  return (
    <div className='mx-2 inline-flex align-baseline'>
      {/* @ts-ignore */}
      <input type='radio' {...field} className={styles.input} />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  );
}

export default Index;
