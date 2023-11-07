import {
  FC, useState,
} from 'react';
import { Link } from 'react-router-dom';
import getUrlFor from '../../util/getUrlFor';
import { IPostListItemData } from '../../util/data/usePostListData';

const PostListItem: FC<{ post: IPostListItemData; index: number }> = ({ post, index }) => {
  const date = new Date(post.publishedAt).toLocaleDateString();
  const { title } = post;
  const slug = post.slug.current;
  const imageSrc = getUrlFor(post.mainImage).url();
  const [isHovering, setIsHovering] = useState(false);
  const backgroundColor = post.mainImage.asset.metadata.palette.dominant.background;
  const foregroundColor = post.mainImage.asset.metadata.palette.dominant.foreground;

  return (
    <div className={`flex flex-col w-full ${((index % 4) / 1.5) % 2 === 0 ? 'md:w-[33%]' : 'md:w-[66%]'}`}>
      <Link
        className="relative w-full"
        to={`/blog/${slug}`}
        key={slug}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <div
          className="w-full h-[200px] border-BG border-[10px] sm:h-[300px] lg:h-[400px] transition-all duration-200 rounded-3xl md:rounded-[50px]"
          style={{ backgroundColor }}
        >
          <img
            src={imageSrc}
            alt={title}
            className={`w-full h-full object-cover object-top transition-all duration-200 rounded-2xl md:rounded-[38px] ${isHovering ? 'opacity-100' : 'opacity-10'}`}
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full p-12"
          style={{ color: foregroundColor }}
        >
          <div className="flex justify-between">
            <div
              className="text-4xl lg:text-6xl"
            >
              {title}

            </div>
            <div
              className="text-xs font-bold"
            >
              {index + 1}
            </div>
          </div>
          <div
            className="absolute text-xs italic font-bold bottom-8 sm:text-lg"
          >
            {date}

          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
