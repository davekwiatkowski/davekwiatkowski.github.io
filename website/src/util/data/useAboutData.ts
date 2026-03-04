import { SanityAsset, SanityImageSource } from '@sanity/image-url/lib/types/types';
import useSanityFetch from '../useSanityFetch';

type AboutImageData = SanityImageSource & {
  asset: SanityAsset
  caption?: string;
};

interface IAboutData {
  title?: string;
  text?: string;
  mainImage?: AboutImageData;
}

const useAboutData = (): IAboutData | undefined => useSanityFetch(
  `*[_type == "about"]{
    title,
    text,
    mainImage{
      asset->{
        _id,
        url
      },
      crop,
      caption
    }
  }`,
  { isOneResult: true },
);

export default useAboutData;
