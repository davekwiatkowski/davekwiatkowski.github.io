import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 's2w7hldl',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-12-18',
});
