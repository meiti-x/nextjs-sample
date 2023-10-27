import Link from 'next/link';
import React from 'react';
import {
  Facebook, Instagram, Linkedin, Mail, Phone, Twitter
} from 'react-feather';
import { v4 as uuidv4 } from 'uuid';

import type { HomeDataClinicData } from '@/service/getHomeData';

const linkClassnames = 'flex text-sm py-1 text-white  border-b-2 border-b-transparent transition-all';

function LeftSide() {
  const leftLinks = [
    {
      text: 'حریم خصوصی',
      href: '/',
      key: uuidv4()
    },
    {
      text: 'سوالات متداول',
      href: '/faq',
      key: uuidv4()
    }
  ];
  return (
    <div className='flex gap-x-3'>
      {leftLinks.map((item) => (
        <Link className={linkClassnames} key={item.key} href={item.href}>{item.text}</Link>
      ))}
    </div>
  );
}

function RightSide({ clinicData }: { clinicData: HomeDataClinicData }) {
  const socialMedia = [
    {
      text: <Twitter color='#fff' />,
      href: clinicData?.twitter_address || '#',
      key: uuidv4()
    },
    {
      text: <Instagram color='#fff' />,
      href: clinicData?.instagram_address || '#',
      key: uuidv4()
    },
    {
      text: <Linkedin color='#fff' />,
      href: clinicData?.linkedin_address || '#',
      key: uuidv4()
    },
    {
      text: <Facebook color='#fff' />,
      href: clinicData?.facebook_address || '#',
      key: uuidv4()
    }
  ];
  return (
    <div className='flex gap-x-5 '>
      <Link className={linkClassnames} href='tel:+982112345678'>
        <Phone className='me-3' />
        <span dir='ltr'>
          09123456789
        </span>
      </Link>
      <Link className={linkClassnames} href='mailto:test@mail.com'>
        <Mail className='me-3' />
        test@mail.com
      </Link>
      <div className='h-full w-0.5 bg-white' />
      <div className='divide-x-2 divide-amber-200' />
      {socialMedia.map((item) => (
        <Link key={item.key} href={item.href} className={linkClassnames}>
          {item.text}
        </Link>
      ))}
    </div>
  );
}

interface TopBarInterface {
  clinicData: HomeDataClinicData;
}

export default function TopBar({ clinicData }:TopBarInterface) {
  return (
    <div className='hidden bg-primary-light p-3 text-white lg:block'>
      <div className='mx-auto flex max-w-screen-xl justify-between align-middle'>
        <RightSide clinicData={clinicData as HomeDataClinicData} />
        <LeftSide />
      </div>
    </div>
  );
}
