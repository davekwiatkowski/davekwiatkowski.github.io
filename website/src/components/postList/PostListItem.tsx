import {
  FC, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { IPostListItemData } from '../../util/data/usePostListData';
import RouteName from '../../constants/Route';
import Image from '../common/Image';
import getUrlFor from '../../util/getUrlFor';

const PostListItem: FC<{ post: IPostListItemData; postNumber: number }> = ({ post, postNumber }) => {
  const { title, mainImage } = post;
  const slug = post.slug.current;
  const [isHovering, setIsHovering] = useState(false);
  const date = useMemo(() => new Date(post.publishedAt).toLocaleDateString(), [post.publishedAt]);

  return (
    <Link
      className="w-full h-[75vw] md:h-[33vw] xl:h-[25vw] 2xl:h-[270px] cursor-pointer flex items-center justify-center relative overflow-hidden rounded-xl border border-TEXT"
      to={`/${RouteName.Blog}/${slug}`}
      key={slug}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <Image
        className={`
          w-full h-full object-cover grayscale rounded-xl transition
          ${isHovering || isMobile ? 'scale-125 contrast-100' : 'scale-100 contrast-200'}
        `}
        src={getUrlFor(mainImage).url()}
        alt=""
      />
      <div
        className={`
          w-full h-full opacity-60 absolute top-0 left-0 rounded-xl
          ${isHovering ? 'bg-HIGHLIGHT' : 'bg-BG'}
        `}
      />
      <div className="absolute top-4 left-4 w-[calc(100%-32px)] h-[calc(100%-32px)]">
        <div className={`
          absolute top-0 left-0 flex flex-row w-full justify-between transition items-baseline
          ${isHovering || isMobile ? 'translate-y-0 opacity-100 text-TEXT' : 'translate-y-[-40px] opacity-0 text-BG'}
        `}
        >
          <div className="text-xl font-bold">{title}</div>
          <div>{postNumber}</div>
        </div>
        <div className={`
          absolute bottom-0 left-0 transition
          ${isHovering || isMobile ? 'translate-y-0 opacity-100 text-TEXT' : 'translate-y-[40px] opacity-0 text-BG'}
        `}
        >
          {date}
        </div>
      </div>
    </Link>
  );
};

export default PostListItem;
