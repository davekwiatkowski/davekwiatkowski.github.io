import { FC } from 'react';
import useSanityFetch from '../util/useSanityFetch';
import BlogPost from './BlogPost';
import LoadingSignal from './LoadingSignal';

const BlogPosts: FC = () => {
  const allPostsData = useSanityFetch(
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
  );

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
          <LoadingSignal />
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
