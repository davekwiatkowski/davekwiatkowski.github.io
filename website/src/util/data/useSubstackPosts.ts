import useSWR from 'swr';
import urlConstants from '../../constants/urlConstants';

interface SubstackPost {
  title: string;
  link: string;
  date: string;
  description: string;
}

const FEED_URL = `${urlConstants.BLOG_SITE}/feed`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;
const MAX_POSTS = 10;

const fetcher = (url: string): Promise<SubstackPost[]> => fetch(url)
  .then((res) => {
    if (!res.ok) throw new Error('Feed fetch failed');
    return res.json();
  })
  .then((json) => {
    if (json.status !== 'ok') throw new Error('Feed parse failed');
    return json.items.slice(0, MAX_POSTS).map((item: any) => {
      const stripped = (item.description ?? '').replace(/<[^>]*>/g, '').trim();
      const truncated = stripped.length > 140 ? `${stripped.slice(0, 140)}...` : stripped;
      return {
        title: item.title ?? '',
        link: item.link ?? '',
        date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }) : '',
        description: truncated,
      };
    });
  });

const useSubstackPosts = (): SubstackPost[] | undefined => {
  const { data } = useSWR(API_URL, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 600000,
  });

  return data;
};

export default useSubstackPosts;
