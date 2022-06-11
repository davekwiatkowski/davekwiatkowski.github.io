import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 's2w7hldl',
  dataset: 'production',
  useCdn: true,
});
