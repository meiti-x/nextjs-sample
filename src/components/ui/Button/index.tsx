import { cva, type VariantProps } from 'cva';
import type { FC, MutableRefObject } from 'react';
import React from 'react';

const buttonStyles = cva('rounded-lg font-medium  transition-all', {
  variants: {
    disabled: {
      true: 'pointer-events-none opacity-50 '
    },
    variant: {
      primary: [
        'bg-primary-main',
        'text-white',
        'border-transparent',
        'hover:bg-primary-dark',
        'ring-primary-light',
        'ring-offset-2',
        'focus:ring-2'
      ],
      text: [
        'bg-transparent',
        'text-primary-main',
        'hover:bg-primary-100',
        'focus:bg-primary-100'

      ],
      outline: [
        'text-primary-main',
        'border-primary-main',
        'border-2',
        'bg-transparent',
        'hover:bg-primary-100',
        'focus:bg-primary-100'
      ]
    },
    size: {
      small: ['text-xs', 'sm:text-sm', 'py-2', 'px-3', 'sm:px-4'],
      medium: ['md:text-md', 'md:py-3', 'md:px-8', 'text-sm', 'py-2.5', 'px-5'],
      large: ['md:text-lg', 'md:py-3', 'md:px-12', 'text-md', 'py-2.5', 'px-8']
    },
    block: {
      true: 'w-full'
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
});

// @ts-ignore
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonStyles> {
  ref?: MutableRefObject<any>;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    size, variant, disabled, className, block, ref
  } = props;
  return (
    <button
      type='button'
      {...props}
      ref={ref}
      className={buttonStyles({
        variant, size, block, disabled, className
      })}
    />
  );
};

export default Button;
