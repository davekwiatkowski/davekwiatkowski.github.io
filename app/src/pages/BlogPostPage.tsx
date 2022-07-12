import { FC, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sanityClient from '../constants/sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import HelmetMetaData from '../components/HelmetMetaData';
import imageUrlBuilder from '@sanity/image-url';
import useSanityFetch from '../util/useSanityFetch';
import LoadingSignal from '../components/LoadingSignal';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: string) {
  return builder.image(source);
}

const BlogPostPage: FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const postData = useSanityFetch(
    `*[slug.current == $slug]{
      title,
      slug,
      body,
      publishedAt,
      "name": author->name,
      mainImage{
        asset->{
          _id,
          url
        },
        crop,
        caption
      }
    }`,
    { params: { slug }, isOneResult: true }
  );
  const sanityConfig = useMemo(() => sanityClient.config(), []);
  const hashtag = useMemo(() => 'davekwiatkowski', []);
  const description = useMemo(
    () => postData && `"${postData.title}" by ${postData.name}`,
    [postData]
  );

  const handleClose = useCallback(
    (event: any) => {
      event.preventDefault();
      navigate('/');
    },
    [navigate]
  );

  return (
    <div className='flex flex-col p-4 pt-12 pb-12'>
      <div className='flex justify-center w-full'>
        <div className='w-full max-w-2xl'>
          {postData ? (
            <>
              <HelmetMetaData
                description={description}
                title={postData.title}
                hashtag={`#${hashtag}`}
                image={urlFor(postData.mainImage).url()}
              />
              <div>
                <h2 className='pb-4 text-4xl italic font-extralight sm:text-8xl'>
                  {postData.title}
                </h2>
                <div className='text-gray-400'>
                  {new Date(postData.publishedAt).toDateString()} | By{' '}
                  <span
                    className='text-teal-500 cursor-pointer hover:text-teal-600'
                    onClick={handleClose}>
                    <span className='underline'>{postData.name}</span>
                  </span>
                </div>
              </div>
              <hr className='mt-4 mb-4' />
              <figure>
                <img
                  src={urlFor(postData.mainImage).url()}
                  alt={postData.mainImage.caption ?? undefined}
                />
                {postData.mainImage.caption && (
                  <figcaption className='text-sm italic text-center text-gray-600'>
                    {postData.mainImage.caption}
                  </figcaption>
                )}
              </figure>
              <div className='unreset'>
                <BlockContent
                  blocks={postData.body}
                  projectId={sanityConfig.projectId}
                  dataset={sanityConfig.dataset}
                  serializers={{
                    types: {
                      image: ({ node }) => {
                        if (!node || !node.asset || !node.asset._ref) {
                          return null;
                        }
                        return (
                          <figure>
                            <img
                              src={urlFor(node).url()}
                              alt={node.caption ?? undefined}
                            />
                            {node.caption && (
                              <figcaption className='text-sm italic text-center text-gray-600'>
                                {node.caption}
                              </figcaption>
                            )}
                          </figure>
                        );
                      },
                    },
                  }}
                />
              </div>
              <hr className='mb-4'></hr>
              <div
                className='text-teal-500 cursor-pointer hover:text-teal-600'
                onClick={handleClose}>
                <span>← </span>
                <span className='underline'>Read more by {postData.name}</span>
              </div>
            </>
          ) : (
            <LoadingSignal />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
