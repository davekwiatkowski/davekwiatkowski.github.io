import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SanityClient from '../SanityClient';
import BlockContent from '@sanity/block-content-to-react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import HelmetMetaData from '../components/HelmetMetaData';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(SanityClient);
function urlFor(source: string) {
  return builder.image(source);
}

const BlogPostPage: FC = () => {
  const [postData, setPostData] = useState<any>(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const sanityConfig = useMemo(() => SanityClient.config(), []);

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

  useEffect(() => {
    SanityClient.fetch(
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
          crop
        }
       }`,
      { slug }
    )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

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
              <img
                src={urlFor(postData.mainImage).url()}
                alt={postData.title}
              />
              <div className='unreset'>
                <BlockContent
                  blocks={postData.body}
                  projectId={sanityConfig.projectId}
                  dataset={sanityConfig.dataset}
                />
              </div>
              <hr className='mb-4'></hr>
              <div className='flex flex-row flex-wrap gap-2 mb-4'>
                <FacebookShareButton
                  url={window.location.href}
                  quote={description}
                  hashtag={`#${hashtag}`}>
                  <FacebookIcon className='rounded-full' size={32} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={window.location.href}
                  title={description}
                  hashtags={[hashtag]}>
                  <TwitterIcon className='rounded-full' size={32} />
                </TwitterShareButton>
                <EmailShareButton
                  url={window.location.href}
                  subject={description}>
                  <EmailIcon className='rounded-full' size={32} />
                </EmailShareButton>
              </div>
              <div
                className='text-teal-500 cursor-pointer hover:text-teal-600'
                onClick={handleClose}>
                <span>← </span>
                <span className='underline'>Read more by {postData.name}</span>
              </div>
            </>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
