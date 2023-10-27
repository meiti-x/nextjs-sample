import Link from 'next/link';
import React, { useState } from 'react';
import { AlignJustify, Search } from 'react-feather';
import { v4 as uuidV4 } from 'uuid';

import MobileDrawer from '@/components/layouts/MobileDrawer';
import Button from '@/components/ui/Button';
import SearchModal from '@/components/ui/SearchModal';

export default function Header() {
  const menuItems = [
    {
      title: 'صفحه نخست',
      href: '/',
      key: uuidV4()
    }
  ];
  const [mobileDrawerIsOpen, setMobileDrawerIsOpen] = useState(false);
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  return (
    <header>
      <nav className='px-4 py-2.5 lg:px-6 '>
        <div
          className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'
        >
          <div
            className='order-2 hidden w-full items-stretch lg:mr-7 lg:flex lg:w-auto lg:flex-1'
          >
            <ul className='mt-4 flex flex-row lg:mt-0 lg:gap-3 xl:gap-7'>
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className='border-b-2 border-b-transparent text-gray-700  transition-all lg:bg-transparent lg:p-0'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href='/' className='order-1 hidden items-center lg:flex'>
            <span className='self-center whitespace-nowrap text-xl font-semibold'>
              LOGO
            </span>
          </Link>
          <div className='order-3 flex w-full items-center lg:inline-flex lg:w-auto'>

            <Button
              size='small'
              onClick={() => setIsSearchModalVisible(true)}
              variant='text'
              className='order-4 mr-1 hidden sm:inline-block'
            >
              <Search className='text-gray-900' />
              <SearchModal visible={isSearchModalVisible} setVisible={setIsSearchModalVisible} />
            </Button>
            <button
              type='button'
              className='me-3 lg:hidden'
              onClick={() => setMobileDrawerIsOpen(true)}
            >
              <span className='sr-only'>باز کردن منو</span>
              <AlignJustify />
            </button>
            <a href='https://flowbite.com' className='order-2 flex items-center lg:hidden'>
              <span className='self-center whitespace-nowrap text-xl font-semibold'>
                LOGO
              </span>
            </a>
          </div>
        </div>
        <MobileDrawer
          open={mobileDrawerIsOpen}
          setOpen={setMobileDrawerIsOpen}
          menuItems={menuItems}
        />
      </nav>
    </header>
  );
}
