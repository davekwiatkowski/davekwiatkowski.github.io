import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import getUrlFor from '../../util/getUrlFor';
import { IPostListItemData } from '../../util/data/usePostListData';

const PostListItem: FC<{ post: IPostListItemData; index: number }> = ({ post, index }) => {
  const date = new Date(post.publishedAt).toDateString();
  const { title } = post;
  const slug = post.slug.current;
  const imageSrc = getUrlFor(post.mainImage).url();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3">
      <Link
        className="w-full relative outline outline-1 outline-PRIMARY"
        to={`/${slug}`}
        key={slug}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[200px] mb-[5rem] object-cover shrink-0"
        />
        <div className={`absolute bottom-0 bg-BG w-full p-4 transition-all duration-300 ${!isHovering ? 'h-full text-2xl' : 'h-[5rem]'}`}>
          <div className="flex justify-between">
            <div className={`font-bold text-PRIMARY ${isHovering ? '' : 'text-5xl'}`}>{title}</div>
            <div className="text-TEXT_DE_EMP font-extralight">
              #
              {index + 1}
            </div>
          </div>
          <div className="italic absolute bottom-4 text-TEXT_DE_EMP font-extralight">{date}</div>
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
