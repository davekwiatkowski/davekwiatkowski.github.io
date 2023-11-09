import {
  FC, useState,
} from 'react';
import { Link } from 'react-router-dom';
import getUrlFor from '../../util/getUrlFor';
import { IPostListItemData } from '../../util/data/usePostListData';
import Image from '../common/Image';

const PostListItem: FC<{ post: IPostListItemData; index: number }> = ({ post, index }) => {
  const date = new Date(post.publishedAt).toLocaleDateString();
  const { title } = post;
  const slug = post.slug.current;
  const imageSrc = getUrlFor(post.mainImage).url();
  const [isHovering, setIsHovering] = useState(false);
  const backgroundColor = post.mainImage.asset.metadata.palette.dominant.background;

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
          <Image
            src={imageSrc}
            alt={title}
            endingOpacity={isHovering ? 1 : 0.2}
            className="w-full h-full object-cover object-top transition-all duration-200 rounded-2xl md:rounded-[38px]"
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full p-8 sm:p-12 mix-blend-plus-lighter"
          style={{ color: backgroundColor }}
        >
          <div className="flex flex-col justify-between w-full h-full">
            <div
              className="text-4xl lg:text-6xl"
            >
              {title}
            </div>
            <div className="flex flex-row items-baseline justify-between">
              <div
                className="text-xs italic sm:text-lg"
              >
                {date}
              </div>
              <div
                className="text-xs sm:text-lg"
              >
                {index + 1}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
