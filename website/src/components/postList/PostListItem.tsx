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
    <div className="w-full border-t-1 border-b border-spacing-0 border-separate border-PRIMARY">
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
        <div className={`flex flex-row justify-between p-4 text-sm sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl ${isHovering ? 'bg-HIGHLIGHT text-TEXT' : ''} text-PRIMARY`}>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-xs">{postNumber}</div>
            <div className="font-bold">{title}</div>
            <div className="text-xs sm:text-base">{date}</div>
          </div>
          <ArrowUpRightIcon className={`w-[16px] sm:w-[32px] md:w-[40px] ${isHovering ? 'rotate-45' : 'rotate-0'} transition-transform`} />
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
