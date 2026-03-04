import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import sanityClient from '../constants/sanityClient';

const useSanityFetch = (
  query: string,
  {
    params = undefined,
    isOneResult = false,
  }: { params?: any; isOneResult?: boolean } = {},
) => {
  const { data } = useSWR(
    [query, JSON.stringify(params)],
    (url) => sanityClient.fetch(url, params),
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.length === 0) {
      navigate('/', { replace: true });
    }
  }, [data?.length, navigate]);

  return useMemo(
    () => (isOneResult ? data?.[0] : data),
    [data, isOneResult],
  );
};

export default useSanityFetch;
