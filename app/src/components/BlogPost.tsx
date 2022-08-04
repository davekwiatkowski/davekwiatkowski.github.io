import { FC } from 'react';
import { Link } from 'react-router-dom';
import getUrlFor from '../util/getUrlFor';

const BlogPost: FC<{ post: any; index: number }> = ({ post, index }) => {
  return (
    <Link
      className='flex w-full pb-4 pr-4 sm:w-1/2 lg:w-1/3'
      to={'/' + post.slug.current}
      key={post.slug.current}>
      <div className='flex flex-col w-full h-full'>
        <h2
          className={`pb-1 text-sm italic ${
            index === 0 ? 'font-semibold' : 'font-light'
          }`}>
          {new Date(post.publishedAt).toDateString()}
        </h2>
        <div
          className={`flex flex-row h-full border-2 border-black border-dotted hover:bg-black hover:text-white ${
            index === 0 ? 'bg-yellow-200' : 'bg-white'
          }`}>
          <img
            src={getUrlFor(post.mainImage).url()}
            alt={post.title}
            className='w-[130px] h-[130px] object-cover shrink-0 p-2'
          />
          <div
            className={`text-3xl md:text-lg font-extralight md:font-light p-2 pl-0`}>
            {post.title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
