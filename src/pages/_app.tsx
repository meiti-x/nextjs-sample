import '../styles/global.css';
import '@/libs/yupConfig';

import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';

import Layout from '@/components/layouts/Main';
import { getSWRConfig } from '@/libs/SWR';

import type { Page } from '../types/page';
// this should give a better typing
type Props = AppProps & {
  Component: Page;
};
export default function MyApp({ Component, pageProps }: Props) {
  // Use the layout defined at the page level, if available
  return (
    <SWRConfig
      value={getSWRConfig(pageProps)}
    >
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
