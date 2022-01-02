import React, { FC, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import SanityClient from '../SanityClient';
import BlockContent from '@sanity/block-content-to-react';

const BlogPostPage: FC = () => {
  const [postData, setPostData] = useState<any>(null);
  const { slug } = useParams();
  const sanityConfig = useMemo(() => SanityClient.config(), []);

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
    <div className='flex justify-center w-full p-4'>
      <div className='w-full max-w-2xl'>
        {postData ? (
          <>
            <div>
              <h2 className='pb-4 text-4xl italic font-extralight sm:text-8xl'>
                {postData.title}
              </h2>
              <div className='text-sm text-gray-400'>
                {new Date(postData.publishedAt).toDateString()} | By{' '}
                {postData.name}
              </div>
            </div>
            <div className='unreset'>
              <BlockContent
                blocks={postData.body}
                projectId={sanityConfig.projectId}
                dataset={sanityConfig.dataset}
              />
            </div>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;
