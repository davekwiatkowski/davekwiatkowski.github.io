import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SanityClient from '../SanityClient';

const BlogPosts: FC = () => {
  const [allPostsData, setAllPosts] = useState<any>(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "post"]{
        title,
        publishedAt,
        slug
      }`
    )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className='p-4'>
      <div className='flex flex-row flex-wrap max-w-screen-xl'>
        {allPostsData &&
          allPostsData
            .sort(
              (a: any, b: any) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            )
            .map((post: any, index: number) => (
              <Link
                className='flex w-full pb-4 pr-4 sm:w-1/2 md:w-1/3 lg:w-1/4'
                to={'/' + post.slug.current}
                key={post.slug.current}>
                <div className='flex flex-col w-full h-full'>
                  <h2 className='pb-1 italic font-light'>
                    {new Date(post.publishedAt).toDateString()}
                  </h2>
                  <div
                    className={`${
                      index === 0 ? 'bg-green-200' : 'bg-white'
                    } h-full p-2 border-2 border-black border-dotted hover:bg-black hover:text-white`}>
                    <div className={`text-3xl text-justify font-extralight`}>
                      {post.title}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default BlogPosts;
