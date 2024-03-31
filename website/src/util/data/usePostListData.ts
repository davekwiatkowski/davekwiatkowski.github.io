import useSanityFetch from '../useSanityFetch';

export interface IPostListItemData {
  title: string;
  publishedAt: string;
  slug: {
    current: string;
  };
}

const usePostListData = (): IPostListItemData[] | undefined => useSanityFetch(
  `*[_type == "post"]{
    title,
    publishedAt,
    slug
  }`,
);

export default usePostListData;
