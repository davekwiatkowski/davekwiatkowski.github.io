import sanityImageUrlBuilder from '../constants/sanityImageUrlBuilder';

const getUrlFor = (sanitySource: string) => sanityImageUrlBuilder.image(sanitySource);

export default getUrlFor;
