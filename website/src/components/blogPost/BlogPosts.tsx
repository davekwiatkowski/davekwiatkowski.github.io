import { FC } from 'react';
import useSanityFetch from '../../util/useSanityFetch';
import LoadingSignal from '../common/LoadingSignal';
import BlogPost from './BlogPost';

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
    }`,
  );

  return (
    <div>
      <div className="flex flex-row flex-wrap max-w-screen-xl">
        {allPostsData ? (
          allPostsData
            .sort(
              (a: any, b: any) => new Date(b.publishedAt).getTime()
                - new Date(a.publishedAt).getTime(),
            )
            .map((post: any, index: number) => (
              <BlogPost
                key={post.publishedAt}
                post={post}
                index={index}
              />
            ))
        ) : (
          <LoadingSignal />
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
