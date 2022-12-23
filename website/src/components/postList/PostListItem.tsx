import { FC, useState } from 'react';
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
    <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3">
      <Link
        className="w-full relative"
        to={`/${slug}`}
        key={slug}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <div
          className={`w-full h-[200px] border-BG border sm:h-[300px] lg:h-[400px] transition-all duration-200 ${isHovering ? '' : 'pr-4 pb-10 sm:pb-12 pt-8 pl-8 sm:pt-14 sm:pl-14 lg:pt-20 lg:pl-20'}`}
          style={{ backgroundColor }}
        >
          <img
            src={imageSrc}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-200 ${isHovering ? '' : 'rounded-3xl'}`}
          />
        </div>
        <div
          className="w-full absolute left-0 top-0 h-full p-4"
          style={{ color: foregroundColor }}
        >
          <div className="flex justify-between">
            <div
              className="font-bold sm:font-thin text-3xl sm:text-5xl lg:text-6xl"
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
            className="italic text-xs absolute bottom-3 sm:text-lg font-thin"
          >
            {date}

          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
