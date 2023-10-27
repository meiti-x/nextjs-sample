import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import type { Dispatch, SetStateAction } from 'react';
import React, { Fragment, useState } from 'react';
import { Search, XCircle } from 'react-feather';

import Button from '@/components/ui/Button';
import SearchModal from '@/components/ui/SearchModal';

interface Props {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  menuItems: {
    title: string,
    href: string,
    key: string
  }[]
}

function MobileDrawer({ open, setOpen, menuItems }: Props) {
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <SearchModal visible={isSearchModalVisible} setVisible={setIsSearchModalVisible} />

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen'>
                  <div
                    className='flex h-full flex-col overflow-y-scroll  bg-white py-6 shadow-xl'
                  >
                    <div className=''>
                      <Dialog.Title className='mx-3 flex justify-between sm:mx-5'>
                        <Button
                          size='small'
                          variant='text'
                          type='button'
                          className='mr'
                          onClick={() => setOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XCircle
                            className='h-6 w-6 text-gray-900 outline-0'
                            aria-hidden='true'
                          />
                        </Button>

                        <Button
                          size='small'
                          variant='text'
                          onClick={() => setIsSearchModalVisible(true)}
                        >
                          <Search className='text-gray-900' />
                        </Button>
                      </Dialog.Title>
                    </div>
                    <div className='relative mt-6 flex-1 px-4 font-sans sm:px-6'>
                      <ul className='list-none font-sans'>
                        {menuItems.map((item) => (
                          <li
                            key={item.key}
                            className='mb-3 font-sans text-gray-700'
                          >
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

  );
}

export default MobileDrawer;
