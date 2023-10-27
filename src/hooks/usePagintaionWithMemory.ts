import { useState } from 'react';

export const usePaginationWithMemory = <T>(startPage = 1, startData: T[] = []) => {
  const [page, setPage] = useState(startPage);
  const [prevData, setPrevData] = useState(startData);

  const setNewPage = (newPage: number, dataToKeep?: any[]) => {
    setPage(newPage);
    setPrevData(dataToKeep ? (prevState) => ([...prevState, ...dataToKeep]) : []);
  };

  // helper to resolve conflict between "laggy" SWR middleware and this hook
  const cleanData = (data: T[]) => data.filter((item, index) => data.indexOf(item) === index);

  return {
    page, prevData, setNewPage, cleanData
  };
};
