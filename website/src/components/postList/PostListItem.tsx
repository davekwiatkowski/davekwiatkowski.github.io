import {
  FC, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';
import { IPostListItemData } from '../../util/data/usePostListData';
import RouteName from '../../constants/Route';

const PostListItem: FC<{ post: IPostListItemData; postNumber: number }> = ({ post, postNumber }) => {
  const { title } = post;
  const slug = post.slug.current;
  const [isHovering, setIsHovering] = useState(false);

  const date = useMemo(() => new Date(post.publishedAt).toLocaleDateString(), [post.publishedAt]);

  return (
    <div className="w-full border-t-1 border-b border-dashed border-spacing-0 border-separate border-LINK">
      <Link
        className="w-full cursor-pointer"
        to={`/${RouteName.Blog}/${slug}`}
        key={slug}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <div
          className={`
            flex flex-row justify-between p-4 text-sm sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 
            ${isHovering ? 'bg-HIGHLIGHT text-TEXT' : 'text-LINK'}
          `}
        >
          <div className="flex flex-row gap-4 items-center grow">
            <div className="text-xs sm:text-sm w-4">{postNumber}</div>
            <div className="flex flex-col gap-2">
              <div>{title}</div>
              <div className="text-xs sm:text-sm md:text-base">
                {`(Published: ${date})`}
              </div>
            </div>
          </div>
          <ArrowUpRightIcon
            className={`
              w-[16px] sm:w-[32px] md:w-[40px] transition-transform
              ${isHovering ? 'rotate-45' : 'rotate-0'}
            `}
          />
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
