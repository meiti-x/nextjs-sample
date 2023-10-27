import Tippy from '@tippyjs/react';
import type { ReactNode } from 'react';
import React from 'react';

function Tooltip({ content, triggerElement }: {
  content: string | ReactNode,
  triggerElement: ReactNode
}) {
  return (
    <Tippy delay={500} interactive content={content}>
      {/* @ts-ignore */}
      {triggerElement}
    </Tippy>
  );
}

export default Tooltip;
