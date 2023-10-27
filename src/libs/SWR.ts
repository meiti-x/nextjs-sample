import type { NextPage } from 'next';
import type { SWRConfiguration } from 'swr';

import { requester } from '@/libs/axios';

export function getSWRConfig(pageProps:NextPage): SWRConfiguration {
  const SWRFetcher = (url: string) => requester.get(url).then((res) => res.data);

  return {
    fetcher: SWRFetcher,
    revalidateOnMount: false,
    // @ts-ignore
    fallback: pageProps.fallback
  };
}
