import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import sanityImageUrlBuilder from '../constants/sanityImageUrlBuilder';

const getUrlFor = (sanitySource: SanityImageSource) => sanityImageUrlBuilder.image(sanitySource);

export default getUrlFor;
