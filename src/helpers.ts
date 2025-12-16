import { useEffect, useState } from 'react';

export type PhotoType = {
  albumId: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type AlbumType = {
  userId: number;
  id: number;
  title: string;
};

export enum ApiStatuses {
  SUCCESS = '200',
  INTERNAL_SERVER_ERROR = '500',
  NOT_FOUND = '404',
}

export const useAsyncData = <T>(asyncFunction: () => Promise<T>, initialState: T, deps: React.DependencyList | undefined = []): [T, boolean, ApiStatuses] => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialState);
  const [apiCallStatus, setApiResponseCode] = useState(ApiStatuses.INTERNAL_SERVER_ERROR);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await asyncFunction();
        setData(response);
        setIsLoading(false);
        setApiResponseCode(ApiStatuses.SUCCESS);
      } catch (error) {
        setIsLoading(false);
        setData(initialState);
        setApiResponseCode(ApiStatuses.INTERNAL_SERVER_ERROR);
      }
    })();
  }, deps);

  return [data, isLoading, apiCallStatus];
};
