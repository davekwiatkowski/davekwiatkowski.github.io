import { SanityAsset, SanityImageSource } from '@sanity/image-url/lib/types/types';
import useSanityFetch from '../useSanityFetch';

export type PostImageData = SanityImageSource & {
  asset: SanityAsset & {
    metadata: {
      palette: {
        dominant: {
          background: string;
          foreground: string;
        };
      };
    };
  };
  caption?: string;
};

export interface IPostData {
  title: string;
  slug: {
    current: string
  };
  body: string;
  publishedAt: string;
  mainImage: PostImageData;
}

const usePostData = (slug: string | undefined): IPostData | undefined => useSanityFetch(
  `*[slug.current == $slug]{
    title,
    slug,
    body,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url,
        metadata {
          palette {
            dominant {
              background,
              foreground,
            }
          }
        }
      },
      crop,
      caption
    }
  }`,
  { params: { slug }, isOneResult: true },
);

export default usePostData;
