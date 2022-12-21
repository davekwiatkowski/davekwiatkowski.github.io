import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import useSanityFetch from '../useSanityFetch';

export interface IPostListItemData {
  title: string;
  publishedAt: string;
  slug: {
    current: string
  };
  mainImage: SanityImageSource
}

const usePostListData = (): IPostListItemData[] | undefined => useSanityFetch(
  `*[_type == "post"]{
    title,
    publishedAt,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
      crop,
    }
  }`,
);

export default usePostListData;
