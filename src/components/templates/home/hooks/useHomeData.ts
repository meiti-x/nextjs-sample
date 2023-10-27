import type { SWRResponse } from 'swr';
import useSWR from 'swr';

import type { HomeDataInterface } from '@/service/getHomeData';
import getHomeData, { URL_HOME_DATA } from '@/service/getHomeData';

export function useHomeData() {
  const {
    data,
    isLoading,
    isValidating,
    error,
    mutate
  }: SWRResponse<HomeDataInterface, any, any> = useSWR(URL_HOME_DATA, getHomeData);

  return {
    data, isLoading, isValidating, error, mutate
  };
}
