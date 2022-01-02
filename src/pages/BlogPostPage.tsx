import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SanityClient from '../SanityClient';
import BlockContent from '@sanity/block-content-to-react';

const BlogPostPage: FC = () => {
  const [postData, setPostData] = useState<any>(null);
  const { slug } = useParams();
  const sanityConfig = useMemo(() => SanityClient.config(), []);
  const navigate = useNavigate();

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
        "name": author->name
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
              <div className='unreset'>
                <BlockContent
                  blocks={postData.body}
                  projectId={sanityConfig.projectId}
                  dataset={sanityConfig.dataset}
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
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
