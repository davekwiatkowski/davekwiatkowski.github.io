import React, { FC, useEffect, useState } from 'react';
import SanityClient from '../SanityClient';
import BlogPost from './BlogPost';

const BlogPosts: FC = () => {
  const [allPostsData, setAllPosts] = useState<any>(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "post"]{
        title,
        publishedAt,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          crop,
        }
      }`
    )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className='p-4'>
      <div className='flex flex-row flex-wrap max-w-screen-xl'>
        {allPostsData ? (
          allPostsData
            .sort(
              (a: any, b: any) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            )
            .map((post: any, index: number) => (
              <BlogPost post={post} index={index} />
            ))
        ) : (
          <div className='p-2'>Loading blog posts...</div>
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
