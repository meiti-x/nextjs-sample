import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown } from 'react-feather';

interface Props {
  items?: {
    title: string | Element,
    description: string | Element,
    key: string
  }[];
}

function Collapse({ items }: Props) {
  return (
    <div className='w-full'>
      {
        items?.map((item) => (
          <Disclosure key={item.key}>
            {({ open }) => (
              <>
                {/* @ts-ignore */}
                <Disclosure.Button
                  key={item.key}
                  className='flex w-full border-b-2 border-gray-300 py-5 text-lg'
                >
                  {
                    typeof item.title === 'string'
                      ? (<h6 className='text-right font-medium'>{item.title}</h6>)
                      : item.title
                  }

                  <ChevronDown
                    className='mr-auto inline-block transition-all'
                    style={{ transform: open ? 'rotate(180deg)' : '' }}
                  />
                </Disclosure.Button>
                <Transition
                  enter='transition duration-100 ease-out'
                  enterFrom='transform scale-95 opacity-0'
                  enterTo='transform scale-100 opacity-100'
                  leave='transition duration-75 ease-out'
                  leaveFrom='transform scale-100 opacity-100'
                  leaveTo='transform scale-95 opacity-0'
                >
                  <Disclosure.Panel key={item.key} className='py-10 text-gray-600'>
                    {/* @ts-ignore */}
                    {item.description}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))
      }
    </div>
  );
}

export default Collapse;
