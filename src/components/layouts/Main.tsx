import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Topbar from './Topbar';

type IMainProps = {
  // meta: ReactNode;
  children: ReactNode;
};
const iranSans = localFont({
  src: [
    {
      path: '../../../public/fonts/ttf/IRANSansWeb.ttf',
      weight: 'normal'
    },
    {
      path: '../../../public/fonts/ttf/IRANSansWeb_UltraLight.ttf',
      weight: '200'
    },
    {
      path: '../../../public/fonts/ttf/IRANSansWeb_Light.ttf',
      weight: '300'
    },
    {
      path: '../../../public/fonts/ttf/IRANSansWeb_Medium.ttf',
      weight: '500'
    },
    {
      path: '../../../public/fonts/ttf/IRANSansWeb_Bold.ttf',
      weight: 'bold'
    },
    {
      path: '../../../public/fonts/ttf/IRANSansWeb_Black.ttf',
      weight: '900'
    },

    {
      path: '../../../public/fonts/woff/IRANSansWeb.woff',
      weight: 'normal'
    },
    {
      path: '../../../public/fonts/woff/IRANSansWeb_UltraLight.woff',
      weight: '200'
    },
    {
      path: '../../../public/fonts/woff/IRANSansWeb_Light.woff',
      weight: '300'
    },
    {
      path: '../../../public/fonts/woff/IRANSansWeb_Medium.woff',
      weight: '500'
    },
    {
      path: '../../../public/fonts/woff/IRANSansWeb_Bold.woff',
      weight: 'bold'
    },
    {
      path: '../../../public/fonts/woff/IRANSansWeb_Black.woff',
      weight: '900'
    },

    {
      path: '../../../public/fonts/woff2/IRANSansWeb.woff2',
      weight: 'normal'
    },
    {
      path: '../../../public/fonts/woff2/IRANSansWeb_UltraLight.woff2',
      weight: '200'
    },
    {
      path: '../../../public/fonts/woff2/IRANSansWeb_Light.woff2',
      weight: '300'
    },
    {
      path: '../../../public/fonts/woff2/IRANSansWeb_Medium.woff2',
      weight: '500'
    },
    {
      path: '../../../public/fonts/woff2/IRANSansWeb_Bold.woff2',
      weight: 'bold'
    },
    {
      path: '../../../public/fonts/woff2/IRANSansWeb_Black.woff2',
      weight: '900'
    }
  ],
  display: 'swap',
  variable: '--font-iransans'
});

function Layout(props: IMainProps) {
  return (
    <div className={`${iranSans.variable} w-full font-sans text-gray-700 antialiased`}>
      {/* @ts-ignore */}
      <Topbar />
      <Header />
      {props.children}
      {/* @ts-ignore */}
      <Footer />
      {
        /*
          for some unknown reason for some component
          my fonts won't apply so, I defined a global css variable
       */
      }
      <style jsx global>
        {`
          :root {
            --font-iransans: ${iranSans.style.fontFamily};
          }
        `}
      </style>
    </div>
  );
}

export default Layout;
