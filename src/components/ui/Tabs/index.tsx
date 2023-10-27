import { Tab } from '@headlessui/react';
import type { ReactNode } from 'react';
import React from 'react';

interface ITab {
  title?: string,
  key?: string,
  content?: ReactNode
}

function Tabs({ tabs, className }: { tabs?: ITab[], className?: string }) {
  return (
    <div className={className}>
      <Tab.Group>
        <Tab.List className='mb-2 flex overflow-auto pb-2 md:justify-center'>
          {tabs?.map((tab: ITab) => (
            <Tab
              key={tab?.key}
              className='min-w-fit rounded outline-0 transition-all hover:bg-primary-100'
            >
              {({ selected }) => (
                <div
                  className={
                    `${selected ? ' border-primary-light font-bold text-primary-dark ' : 'font-normal '}border-b-2 border-transparent p-2 px-5`
                  }
                >
                  {tab?.title}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs?.map((tab: ITab) => (
            <Tab.Panel
              key={tab?.key}
            >
              {tab?.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Tabs;
