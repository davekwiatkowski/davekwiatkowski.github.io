import sanityClient from '@sanity/client';

const SanityClient = sanityClient({
  projectId: 's2w7hldl',
  dataset: 'production',
  useCdn: true,
});

export default SanityClient;
